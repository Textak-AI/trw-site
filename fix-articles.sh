#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Re-extract the 4 Leading Through Uncertainty articles
# These use .elementor-widget-html, not .trw-article
# Run from: /Users/kylemoyer/HBC/Clients/KBL/TheRailWay/trw-site
# ═══════════════════════════════════════════════════════════

set -e
DEST="public/insights"

NAV_TOP='<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ARTICLE_TITLE | The Rail Way™</title>
<meta name="description" content="ARTICLE_DESC">
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
'

NAV_BOTTOM='
<div style="max-width:800px;margin:40px auto;padding:20px;text-align:center;font-family:Arial,sans-serif;">
  <a href="/" style="color:#C4622D;font-weight:600;text-decoration:none;">← Back to The Rail Way</a>
  <span style="margin:0 12px;color:#ccc;">|</span>
  <a href="/insights" style="color:#C4622D;font-weight:600;text-decoration:none;">All Insights</a>
</div>
</body>
</html>'

ARTICLES=(
  "the-road-ahead-2|The Road Ahead: Putting It All Together|2026 will reveal which rail leaders are prepared and proactive. Part 4 of the Leading Through Uncertainty series."
  "lead-yourself-first|Lead Yourself First: The Trinity of Excellence|We cannot lead others through uncertainty without first learning to lead ourselves. Part 3 of 4."
  "leading-through-uncertainty-part-2|Leading Through Uncertainty: What's Your Style?|Three leadership styles emerge under stress — only one builds lasting safety culture. Part 2 of 4."
  "leaders-navigate-uncertainty|How Leaders Navigate Uncertainty and Come Out Stronger|The four-stage framework that transforms crisis into competitive advantage. Part 1 of 4."
)

echo "📰 Re-extracting 4 Leading Through Uncertainty articles..."
echo "   (These use elementor-widget-html, not .trw-article)"
echo ""

for entry in "${ARTICLES[@]}"; do
  IFS='|' read -r slug title desc <<< "$entry"
  echo "  → Extracting: $slug"
  
  TMPFILE=$(mktemp)
  curl -sL "https://therailway.us/$slug/" -o "$TMPFILE"
  
  # Extract everything inside the elementor-widget-html element
  # This captures the style block, meta tags (which we'll strip), and article content
  python3 -c "
import re, sys
with open('$TMPFILE', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Method 1: Look for elementor-widget-html content
widget_match = re.search(r'elementor-widget-html[^>]*>(.*?)</div>\s*</div>\s*</div>\s*</div>\s*</section>', html, re.DOTALL)
if widget_match:
    content = widget_match.group(1)
    # Strip <meta> tags and <title> (we have those in our wrapper)
    content = re.sub(r'<meta[^>]*>', '', content)
    content = re.sub(r'<title>[^<]*</title>', '', content)
    print(content.strip())
    sys.exit(0)

# Method 2: Look for <style> blocks and content between them and the author bio
style_match = re.search(r'(<style>.*?</style>.*?(?:author-bio|About The Rail Way).*?</div>)', html, re.DOTALL)
if style_match:
    print(style_match.group(1).strip())
    sys.exit(0)

# Method 3: Just get everything between the first <style> with article CSS and last </script>
style_start = html.find('<style>')
if style_start > 0:
    # Find a reasonable end point
    script_end = html.rfind('</script>')
    if script_end > style_start:
        content = html[style_start:script_end + len('</script>')]
        content = re.sub(r'<meta[^>]*>', '', content)
        content = re.sub(r'<title>[^<]*</title>', '', content)
        print(content.strip())
        sys.exit(0)

print('<!-- EXTRACTION FAILED: Could not find article content -->')
sys.stderr.write('WARNING: Could not extract content for $slug\n')
" > "$DEST/$slug.html.body"
  
  BODYSIZE=$(wc -c < "$DEST/$slug.html.body")
  
  if [ "$BODYSIZE" -lt 500 ]; then
    echo "    ⚠️  WARNING: Extracted content is very small ($BODYSIZE bytes) — may need manual extraction"
  fi
  
  # Wrap with nav
  WRAPPED_TOP=$(echo "$NAV_TOP" | sed "s|ARTICLE_TITLE|$title|g" | sed "s|ARTICLE_DESC|$desc|g")
  echo "$WRAPPED_TOP" > "$DEST/$slug.html"
  cat "$DEST/$slug.html.body" >> "$DEST/$slug.html"
  echo "$NAV_BOTTOM" >> "$DEST/$slug.html"
  
  rm -f "$TMPFILE" "$DEST/$slug.html.body"
  
  FINALSIZE=$(wc -c < "$DEST/$slug.html")
  echo "    ✓ Saved: $DEST/$slug.html ($FINALSIZE bytes)"
done

echo ""
echo "═══════════════════════════════════════"
echo "All files in $DEST:"
ls -la "$DEST"/*.html
echo ""
echo "If any file is under 5KB, the extraction"
echo "may have failed — let me know and I'll fix."
echo "═══════════════════════════════════════"
