document.getElementById('addBtn').addEventListener('click', function() {
    const input = document.getElementById('milestoneInput');
    const milestoneText = input.value.trim();

    if (milestoneText === '') {
        alert('Please enter a valid milestone!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>${milestoneText}</span> ✅`;
    
    document.getElementById('milestoneList').appendChild(li);
    input.value = '';
});