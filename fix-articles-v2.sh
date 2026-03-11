#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Re-extract 4 Leading Through Uncertainty articles (v2)
# Properly strips meta/link/script/title tags
# Run from: /Users/kylemoyer/HBC/Clients/KBL/TheRailWay/trw-site
# ═══════════════════════════════════════════════════════════

set -e
DEST="public/insights"

ARTICLES=(
  "the-road-ahead-2|The Road Ahead: Putting It All Together|2026 will reveal which rail leaders are prepared and proactive. Part 4 of the Leading Through Uncertainty series."
  "lead-yourself-first|Lead Yourself First: The Trinity of Excellence|We cannot lead others through uncertainty without first learning to lead ourselves. Part 3 of 4."
  "leading-through-uncertainty-part-2|Leading Through Uncertainty: What's Your Style?|Three leadership styles emerge under stress — only one builds lasting safety culture. Part 2 of 4."
  "leaders-navigate-uncertainty|How Leaders Navigate Uncertainty and Come Out Stronger|The four-stage framework that transforms crisis into competitive advantage. Part 1 of 4."
)

echo "📰 Re-extracting 4 Leading Through Uncertainty articles (v2)..."
echo ""

for entry in "${ARTICLES[@]}"; do
  IFS='|' read -r slug title desc <<< "$entry"
  echo "  → Extracting: $slug"
  
  TMPFILE=$(mktemp)
  curl -sL "https://therailway.us/$slug/" -o "$TMPFILE"
  
  python3 << PYEOF > "$DEST/$slug.html"
import re

with open('$TMPFILE', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Find the elementor-widget-html content
# Pattern: class contains elementor-widget-html, then grab innerHTML
widget_match = re.search(
    r'class="[^"]*elementor-widget-html[^"]*"[^>]*>\s*(.*?)\s*(?:</div>\s*){3,5}</section>',
    html, re.DOTALL
)

if not widget_match:
    # Fallback: find content between first <style> that has article CSS and the last visible content
    widget_match = re.search(
        r'(<style>[^<]*(?:article-header|hero-image|article-meta)[^<]*</style>.*?)(?:</div>\s*){3,5}</section>',
        html, re.DOTALL
    )

content = widget_match.group(1) if widget_match else ''

if not content:
    print('<!-- EXTRACTION FAILED -->')
    import sys
    sys.exit(1)

# Strip invisible head elements
content = re.sub(r'<meta[^>]*/?>', '', content)
content = re.sub(r'<title>[^<]*</title>', '', content)
content = re.sub(r'<link[^>]*/?>', '', content)
# Strip script tags BUT keep inline scripts that contain article functionality
content = re.sub(r'<script\s+src=[^>]*></script>', '', content)
# Keep inline scripts (assessment, form handlers etc)
# Strip noscript
content = re.sub(r'<noscript[^>]*>.*?</noscript>', '', content, flags=re.DOTALL)
# Strip comments that look like WordPress
content = re.sub(r'<!--\s*(?:Google|wp-|/wp-|Elementor).*?-->', '', content, flags=re.DOTALL)
# Clean up excess whitespace
content = re.sub(r'\n{3,}', '\n\n', content)

# Build the full page
nav_top = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>$title | The Rail Way™</title>
<meta name="description" content="$desc">
<style>
  .trw-site-nav {
    position: sticky; top: 0; z-index: 100;
    background: #fff; border-bottom: 1px solid #E0E0E0;
    padding: 12px 20px;
    display: flex; align-items: center; justify-content: space-between;
    max-width: 100%; font-family: Arial, sans-serif;
  }
  .trw-site-nav a { text-decoration: none; }
  .trw-site-nav .logo img { height: 32px; }
  .trw-site-nav .back { color: #C4622D; font-size: 14px; font-weight: 600; }
  .trw-site-nav .back:hover { text-decoration: underline; }
</style>
</head>
<body>
<div class="trw-site-nav">
  <a href="/" class="logo">
    <img src="https://raw.githubusercontent.com/Textak-AI/trw-assets/main/brand/rail-way-logo.png" alt="The Rail Way">
  </a>
  <a href="/insights" class="back">← All Insights</a>
</div>
'''

nav_bottom = '''
<div style="max-width:800px;margin:40px auto;padding:20px;text-align:center;font-family:Arial,sans-serif;">
  <a href="/" style="color:#C4622D;font-weight:600;text-decoration:none;">← Back to The Rail Way</a>
  <span style="margin:0 12px;color:#ccc;">|</span>
  <a href="/insights" style="color:#C4622D;font-weight:600;text-decoration:none;">All Insights</a>
</div>
</body>
</html>'''

print(nav_top)
print(content.strip())
print(nav_bottom)
PYEOF
  
  rm -f "$TMPFILE"
  
  FILESIZE=$(wc -c < "$DEST/$slug.html")
  if [ "$FILESIZE" -lt 5000 ]; then
    echo "    ⚠️  WARNING: Only $FILESIZE bytes — extraction may have failed"
  else
    echo "    ✓ Saved: $DEST/$slug.html ($FILESIZE bytes)"
  fi
done

echo ""
echo "═══════════════════════════════════════"
echo "All article files:"
ls -la "$DEST"/*.html | awk '{printf "  %-55s %s bytes\n", $NF, $5}'
echo ""
echo "Every file should be 15KB+."
echo "Push: git add . && git commit -m 'Fix article extraction v2' && git push"
echo "═══════════════════════════════════════"
