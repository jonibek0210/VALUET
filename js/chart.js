const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      datasets: [{
         label: '# of Votes',
         data: [5, 25, 13],
         backgroundColor: [
            'rgb(255, 255, 255)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
         ],
         borderColor: [
            'rgb(255, 255, 255, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
         ],
         borderWidth: 1
      }]
   }
});

// =========================== //


const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
   type: 'line',
   data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
         label: '# of Votes',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
            'rgba(0, 151, 232, 0.2)'
         ],
         borderColor: [
            'rgba(0, 151, 232, 0.2)'
         ],
         borderWidth: 4
      }]
   },
   options: {
      scales: {
         y: {
            beginAtZero: Boolean
         }
      }
   }
});

// =========================== //


const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
   type: 'line',
   data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
         label: '# of Votes',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
            'rgba(0, 151, 232, 0.2)'
         ],
         borderColor: [
            'rgba(0, 151, 232, 0.2)'
         ],
         borderWidth: 4
      }]
   },
   options: {
      scales: {
         y: {
            beginAtZero: Boolean
         }
      }
   }
});
