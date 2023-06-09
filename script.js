fetch('data.json') // Assuming the JSON file is named 'data.json' and located in the same directory
  .then(response => response.json())
  .then(data => {
    const summaryContainer = document.getElementById('summaryData');
    let summaryHTML = '';

    data.forEach(item => {
      summaryHTML += `
      <div class="summary-item ${item.category}">
        <div class="category">
          <img src="${item.icon}" alt="${item.category} icon" class="icon">
          ${item.category}
        </div>
        <span class="summaryScore">${item.score} / 100</span>
      </div>
      `;
    });

    summaryContainer.innerHTML = summaryHTML;
  })
  .catch(error => {
    console.log('Error:', error);
  });
