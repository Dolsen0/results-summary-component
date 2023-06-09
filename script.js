fetch('data.json') // Assuming the JSON file is named 'data.json' and located in the same directory
  .then(response => response.json())
  .then(data => {
    const summaryContainer = document.getElementById('summaryData');
    let summaryHTML = '';

    data.forEach(item => {
      summaryHTML += `<p> <img src="${item.icon}" alt="${item.category} icon"> ${item.category} ${item.score} / 100</p>`;
    });

    summaryContainer.innerHTML = summaryHTML;
  })
  .catch(error => {
    console.log('Error:', error);
  });
