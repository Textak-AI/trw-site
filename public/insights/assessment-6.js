function calculateScore6() {
    var checks = document.querySelectorAll('.check6:checked');
    var score = checks.length;
    var total = 6;
    var resultDiv = document.getElementById('scoreResult6');
    var formDiv = document.getElementById('leadForm6');
    var msg = '';
    var cls = '';

    if (score >= 5) {
        cls = 'green';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Strong Data Foundation</strong><br>Your organization has the data infrastructure to build a compelling business case for culture transformation. You\u2019re tracking the right metrics. The next step is connecting those metrics to a transformation investment thesis your board can evaluate.';
    } else if (score >= 3) {
        cls = 'amber';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Partial Visibility</strong><br>You have some of the data you need, but there are gaps in how your organization tracks the financial impact of safety culture. Most railroads at this stage underestimate both the cost of the status quo and the ROI of transformation because they\u2019re not measuring the right things.';
    } else {
        cls = 'red';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Building the Foundation</strong><br>Your organization is likely spending significantly more on safety-related costs than it realizes, because the tracking infrastructure isn\u2019t in place to make those costs visible. This is the most common starting point \u2014 and it means the ROI of transformation will likely be even higher than expected once the full picture emerges.';
    }

    resultDiv.className = 'score-result ' + cls;
    resultDiv.innerHTML = msg;
    resultDiv.style.display = 'block';

    formDiv.innerHTML = '<h3 style="font-size:1.1em;margin-bottom:12px;">Request a Follow-Up Conversation</h3><p style="font-family:Arial,sans-serif;font-size:0.85em;color:#666;margin-bottom:15px;">Share your results with our team for a confidential discussion about building the ROI case for safety culture transformation.</p><input type="text" id="trw_name6" placeholder="Full Name" required><input type="text" id="trw_jobtitle6" placeholder="Job Title"><input type="email" id="trw_email6" placeholder="Email Address" required><input type="text" id="trw_company6" placeholder="Company / Organization"><button class="submit-btn" onclick="submitLead6()">Request a Follow-Up Conversation</button>';
    formDiv.style.display = 'block';
}

function submitLead6() {
    var name = document.getElementById('trw_name6').value;
    var email = document.getElementById('trw_email6').value;
    if (!name || !email) { alert('Please enter your name and email.'); return; }
    var data = new FormData();
    data.append('name', name);
    data.append('jobtitle', document.getElementById('trw_jobtitle6').value);
    data.append('email', email);
    data.append('company', document.getElementById('trw_company6').value);
    data.append('_cc', 'pauline@therailway.us');
    data.append('_subject', 'ASSESSMENT LEAD - Safety Culture ROI | Score: ' + document.querySelectorAll('.check6:checked').length + '/6');
    data.append('assessment', 'Safety Culture ROI Readiness Assessment');
    data.append('score', document.querySelectorAll('.check6:checked').length + '/6');
    fetch('https://formspree.io/f/xnjbobyn', { method: 'POST', body: data, headers: { 'Accept': 'application/json' }})
    .then(function(r) {
        document.getElementById('leadForm6').style.display = 'none';
        document.getElementById('successMsg6').style.display = 'block';
    });
}
