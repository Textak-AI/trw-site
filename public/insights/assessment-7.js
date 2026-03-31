/* ==========================================
   THE RAIL WAY - Assessment Script
   Article: Coaching from the Caboose
   Assessment ID: 6
   Formspree: xnjbobyn
   ========================================== */

function calculateScore7() {
    var checks = document.querySelectorAll('.check7:checked');
    var score = checks.length;
    var total = document.querySelectorAll('.check7').length;
    var resultDiv = document.getElementById('scoreResult7');
    var formDiv = document.getElementById('leadForm7');

    var interpretation = '';
    var bgColor = '';

    if (score >= 6) {
        bgColor = '#d4edda';
        interpretation = '<strong style="color:#155724;font-size:18px;">Score: ' + score + '/' + total + ' &#8212; You&#8217;re showing up for yourself.</strong><br><br>' +
            'You&#8217;re already doing much of what it takes to stay grounded in a demanding industry. The next level isn&#8217;t about doing more &#8212; it&#8217;s about being more intentional with what you&#8217;re already doing. Consider: what would it look like to teach one of these habits to someone on your crew?';
    } else if (score >= 3) {
        bgColor = '#fff3cd';
        interpretation = '<strong style="color:#856404;font-size:18px;">Score: ' + score + '/' + total + ' &#8212; You&#8217;re stretched thin.</strong><br><br>' +
            'You know what you should be doing, but the demands of the job keep pulling you off track. That gap between knowing and doing is where coaching lives. Pick one item you didn&#8217;t check &#8212; just one &#8212; and make it non-negotiable for the next seven days. Small wins compound.';
    } else {
        bgColor = '#f8d7da';
        interpretation = '<strong style="color:#721c24;font-size:18px;">Score: ' + score + '/' + total + ' &#8212; You&#8217;ve been running on fumes.</strong><br><br>' +
            'This isn&#8217;t a character flaw &#8212; it&#8217;s what happens when a demanding industry meets a person who gives everything to the job and keeps nothing for themselves. The fact that you took this assessment means something in you is ready for a different approach. Start with one question from the column above and sit with it. That&#8217;s enough for today.';
    }

    resultDiv.style.display = 'block';
    resultDiv.style.background = bgColor;
    resultDiv.innerHTML = interpretation;

    // Show lead form
    formDiv.style.display = 'block';
    formDiv.innerHTML =
        '<h3>Get Coaching Resources</h3>' +
        '<p>Receive a personalized follow-up with resources matched to where you are right now:</p>' +
        '<input type="text" id="trw_name7" placeholder="Your Name" required>' +
        '<input type="text" id="trw_jobtitle7" placeholder="Your Title (e.g., Conductor, VP Safety, Trainmaster)">' +
        '<input type="email" id="trw_email7" placeholder="Email Address" required>' +
        '<input type="text" id="trw_company7" placeholder="Railroad / Company Name">' +
        '<button onclick="submitLead7(' + score + ',' + total + ')">Send Me Resources</button>';
}

function submitLead7(score, total) {
    var name = document.getElementById('trw_name7').value;
    var title = document.getElementById('trw_jobtitle7').value;
    var email = document.getElementById('trw_email7').value;
    var company = document.getElementById('trw_company7').value;

    if (!name || !email) {
        alert('Please enter your name and email address.');
        return;
    }

    var data = {
        name: name,
        title: title,
        email: email,
        company: company,
        assessment_type: 'Personal Priority Self-Check (Coaching from the Caboose)',
        score: score + '/' + total,
        _subject: 'ASSESSMENT LEAD - Coaching from the Caboose | Score: ' + score + '/' + total
    };

    fetch('https://formspree.io/f/xnjbobyn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (response.ok) {
            document.getElementById('leadForm7').style.display = 'none';
            document.getElementById('successMsg7').style.display = 'block';
        } else {
            alert('Something went wrong. Please try again or contact Charlie@TheRailWay.US directly.');
        }
    })
    .catch(function() {
        alert('Something went wrong. Please try again or contact Charlie@TheRailWay.US directly.');
    });
}
