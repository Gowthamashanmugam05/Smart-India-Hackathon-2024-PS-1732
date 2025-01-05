document.getElementById('issueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('submit_issue.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
      .then(data => {
          document.getElementById('message').textContent = 'Issue reported successfully!';
          document.getElementById('message').style.display = 'block';
          document.getElementById('issueForm').reset();
      }).catch(error => {
          document.getElementById('message').textContent = 'Failed to report issue. Please try again.';
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').style.display = 'block';
      });
});
