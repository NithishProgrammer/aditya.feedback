// Function to fetch and display reviews based on branch filter
window.onload = function() {
    fetchReviews();  // Initially fetch all reviews
  
    // Add event listener to filter dropdown
    document.getElementById('branch-filter').addEventListener('change', function() {
      fetchReviews(this.value);  // Fetch reviews based on the selected branch
    });
  };
  
  // Function to fetch reviews from SheetsDB API and display them
  function fetchReviews(branch = 'all') {
    fetch('https://sheetdb.io/api/v1/zavhazoddsmv0')  // Replace with your SheetsDB API URL
      .then(response => response.json())
      .then(data => {
        const reviewsContainer = document.getElementById('reviews-container');
        reviewsContainer.innerHTML = '';  // Clear existing reviews
  
        // Filter reviews based on selected branch
        const filteredReviews = branch === 'all' ? data : data.filter(review => review.branch === branch);
  
        filteredReviews.forEach(review => {
          const reviewDiv = document.createElement('div');
          reviewDiv.classList.add('review');
          reviewDiv.innerHTML = `
            <h4>${review.name}</h4> <h5> ${review.branch}</h5>
            <p  style="color: #D27D2D; font-weight: bold; text-decoration: underline; text-underline-offset: 6px;">${review.feedback}</p>
          `;
          reviewsContainer.appendChild(reviewDiv);
        });
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }
  