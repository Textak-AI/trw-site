function calculateScore5() {
    var checks = document.querySelectorAll('.check5:checked');
    var score = checks.length;
    var total = 8;
    var resultDiv = document.getElementById('scoreResult5');
    var formDiv = document.getElementById('leadForm5');
    var msg = '';
    var cls = '';

    if (score >= 6) {
        cls = 'green';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Strong Speak Up Culture</strong><br>Your organization demonstrates many of the hallmarks of a genuine speak up culture. The next level of sophistication involves ensuring these behaviors are consistent across all shifts, locations, and leadership transitions \u2014 and that they survive operational pressure.';
    } else if (score >= 3) {
        cls = 'amber';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Developing Culture</strong><br>You have elements of speak up culture in place, but there are gaps that likely affect specific shifts, locations, or leadership styles. The most common pattern at this stage is inconsistency \u2014 the culture works well under some supervisors but not others.';
    } else {
        cls = 'red';
        msg = '<strong>Score: ' + score + '/' + total + ' \u2014 Significant Opportunity</strong><br>Your organization has substantial room to build speak up culture. This is not a reflection of your people \u2014 it is a structural issue that can be addressed through sustained leadership behavior change. The good news: railroads at this stage often see the most dramatic improvements.';
    }

    resultDiv.className = 'score-result ' + cls;
    resultDiv.innerHTML = msg;
    resultDiv.style.display = 'block';

    formDiv.innerHTML = '<h3 style="font-size:1.1em;margin-bottom:12px;">Request a Follow-Up Conversation</h3><p style="font-family:Arial,sans-serif;font-size:0.85em;color:#666;margin-bottom:15px;">Share your results with our team for a confidential discussion about building speak up culture at your railroad.</p><input type="text" id="trw_name5" placeholder="Full Name" required><input type="text" id="trw_jobtitle5" placeholder="Job Title"><input type="email" id="trw_email5" placeholder="Email Address" required><input type="text" id="trw_company5" placeholder="Company / Organization"><button class="submit-btn" onclick="submitLead5()">Request a Follow-Up Conversation</button>';
    formDiv.style.display = 'block';
}

function submitLead5() {
    var name = document.getElementById('trw_name5').value;
    var email = document.getElementById('trw_email5').value;
    if (!name || !email) { alert('Please enter your name and email.'); return; }
    var data = new FormData();
    data.append('name', name);
    data.append('jobtitle', document.getElementById('trw_jobtitle5').value);
    data.append('email', email);
    data.append('company', document.getElementById('trw_company5').value);
    data.append('_cc', 'pauline@therailway.us');
    data.append('_subject', 'ASSESSMENT LEAD - Speak Up Culture | Score: ' + document.querySelectorAll('.check5:checked').length + '/8');
    data.append('assessment', 'Speak Up Culture Assessment');
    data.append('score', document.querySelectorAll('.check5:checked').length + '/8');
    fetch('https://formspree.io/f/xnjbobyn', { method: 'POST', body: data, headers: { 'Accept': 'application/json' }})
    .then(function(r) {
        document.getElementById('leadForm5').style.display = 'none';
        document.getElementById('successMsg5').style.display = 'block';
    });
}
