function calculateScore4() {
    var checks = document.querySelectorAll('.check4:checked');
    var score = checks.length;
    var total = 7;
    var resultDiv = document.getElementById('scoreResult4');
    var formDiv = document.getElementById('leadForm4');
    var msg = '';
    var cls = '';

    if (score >= 5) {
        cls = 'red';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 High Transformation Need</strong><br>Your organization is showing clear signs that training alone is not producing the behavior change you need. This is a solvable structural issue \u2014 not a people failure. The gap between your safety programs and your safety outcomes points to a culture challenge that transformation is specifically designed to address.';
    } else if (score >= 3) {
        cls = 'amber';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Emerging Gaps</strong><br>You have some of the foundations in place, but there are meaningful gaps between your training investment and your behavioral outcomes. Most railroads at this stage benefit from a focused assessment of where the disconnect between policy and practice is occurring.';
    } else {
        cls = 'green';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Strong Foundation</strong><br>Your organization appears to have meaningful alignment between safety programs and operational culture. The next level of sophistication involves building internal sustainability \u2014 ensuring these behaviors persist through leadership transitions and operational pressures.';
    }

    resultDiv.className = 'score-result ' + cls;
    resultDiv.innerHTML = msg;
    resultDiv.style.display = 'block';

    formDiv.innerHTML = '<h3 style="font-size:1.1em;margin-bottom:12px;">Request a Follow-Up Conversation</h3><p style="font-family:Arial,sans-serif;font-size:0.85em;color:#666;margin-bottom:15px;">Share your results with our team for a confidential discussion about your organization\u2019s transformation readiness.</p><input type="text" id="trw_name4" placeholder="Full Name" required><input type="text" id="trw_jobtitle4" placeholder="Job Title"><input type="email" id="trw_email4" placeholder="Email Address" required><input type="text" id="trw_company4" placeholder="Company / Organization"><button class="submit-btn" onclick="submitLead4()">Request a Follow-Up Conversation</button>';
    formDiv.style.display = 'block';
}

function submitLead4() {
    var name = document.getElementById('trw_name4').value;
    var email = document.getElementById('trw_email4').value;
    if (!name || !email) { alert('Please enter your name and email.'); return; }
    var data = new FormData();
    data.append('name', name);
    data.append('jobtitle', document.getElementById('trw_jobtitle4').value);
    data.append('email', email);
    data.append('company', document.getElementById('trw_company4').value);
    data.append('_subject', 'ASSESSMENT LEAD - Transformation Readiness | Score: ' + document.querySelectorAll('.check4:checked').length + '/7');
    data.append('assessment', 'Transformation Readiness Assessment');
    data.append('score', document.querySelectorAll('.check4:checked').length + '/7');
    fetch('https://formspree.io/f/xnjbobyn', { method: 'POST', body: data, headers: { 'Accept': 'application/json' }})
    .then(function(r) {
        document.getElementById('leadForm4').style.display = 'none';
        document.getElementById('successMsg4').style.display = 'block';
    });
}
