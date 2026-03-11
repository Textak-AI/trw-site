function calculateScore3() {
    const checkboxes = document.querySelectorAll('#assessment3 input[type="checkbox"]:checked');
    const score = checkboxes.length;

    document.getElementById('scoreValue3').textContent = score;
    document.getElementById('formScore3').value = score + '/7';

    const subjectField = document.querySelector('#assessmentForm3 input[name="_subject"]');
    if (subjectField) subjectField.value = 'ASSESSMENT LEAD - Data-Driven Culture Assessment | Score: ' + score + '/7';

    let interpretation = '';
    if (score >= 5) {
        interpretation = '<strong style="color:#4CAF50;">Strong Data Infrastructure (5&#8211;7)</strong><br>Your railroad is measuring safety in ways that give you real predictive visibility. The priority now is ensuring that what you\'re measuring is actually driving decisions — that leadership is acting on leading indicator data, not just reporting it. A strong measurement system that doesn\'t change behavior is still a compliance exercise, not a safety culture.';
    } else if (score >= 3) {
        interpretation = '<strong style="color:#FF9800;">Developing Visibility (3&#8211;4)</strong><br>You have meaningful data practices in some areas, but you\'re likely missing leading indicator visibility in others. The most common gap at this score level: near-miss reporting rates that are low relative to incident rates, suggesting underreporting. This usually indicates a trust problem, not a process problem — people aren\'t reporting because they\'re not confident something useful will happen when they do.';
    } else {
        interpretation = '<strong style="color:#F44336;">Limited Predictive Visibility (0&#8211;2)</strong><br>Your safety data is primarily telling you what has already gone wrong. Organizations operating primarily on lagging indicators are reacting to incidents rather than preventing them. The good news: improving leading indicator visibility doesn\'t require a sophisticated analytics infrastructure — it requires frontline trust. That\'s a culture problem, and it\'s solvable.';
    }

    document.getElementById('scoreInterpretation3').innerHTML = interpretation;
    document.getElementById('scoreResult3').classList.add('show');
}

function submitAssessment3() {
    const form = document.getElementById('assessmentForm3');
    const name = document.getElementById('trw_name3').value.trim();
    const email = document.getElementById('trw_email3').value.trim();
    const company = document.getElementById('trw_company3').value.trim();

    if (!name || !email || !company) {
        alert('Please fill in your name, email, and railroad/company name.');
        return;
    }

    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            form.style.display = 'none';
            document.getElementById('formSuccess3').style.display = 'block';
        } else {
            alert('There was a problem submitting the form. Please email us directly at info@therailway.us.');
        }
    })
    .catch(() => {
        alert('There was a problem submitting the form. Please email us directly at info@therailway.us.');
    });
}
