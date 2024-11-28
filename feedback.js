document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    fetch('https://sheetdb.io/api/v1/zavhazoddsmv0', {  // Replace with your SheetsDB API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        branch: formData.get('branch'),
        feedback: formData.get('feedback')
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('Feedback submitted successfully!');
      window.location.href = 'index.html';  // Redirect to home page after submission
    })
    .catch(error => console.error('Error submitting feedback:', error));
  });
  