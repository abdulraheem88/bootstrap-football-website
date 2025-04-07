document.addEventListener('DOMContentLoaded', () => {
    checkCookieConsent();  // Call this to check cookie consent on page load
  });
  
  function searchPlayer() {
    const playerName = document.getElementById('playerSearch').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = '';  // Clear previous errors
  
    if (playerName) {
      showLoading();
      setTimeout(() => {
        fetchPlayerData(playerName);
      }, 3000);  // Simulate a delay of 3 seconds for fetching data
    } else {
      errorMessage.innerText = 'Please enter a player name.';
    }
  }
  
  function showLoading() {
    document.getElementById('loading').style.display = 'block';
  }
  
  function hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }
  
  function fetchPlayerData(playerName) {
    // Simulated player data
    const mockDatabase = {
      "Lionel Messi": { goals: 30, assists: 12 },
      "Cristiano Ronaldo": { goals: 25, assists: 8 },
      "Kylian Mbappe": { goals: 27, assists: 10 },
      "Neymar Jr": { goals: 18, assists: 13 },
      "Zlatan Ibrahimovic": { goals: 21, assists: 9 },
      "Robert Lewandowski": { goals: 35, assists: 6 },
      "Mohamed Salah": { goals: 29, assists: 10 },
      "Sadio Mane": { goals: 23, assists: 8 },
      "Kevin De Bruyne": { goals: 9, assists: 20 },
      "Sergio Ramos": { goals: 8, assists: 3 },
      "Karim Benzema": { goals: 26, assists: 11 },
      "Erling Haaland": { goals: 28, assists: 5 },
      "Luis Suarez": { goals: 20, assists: 7 },
      "Eden Hazard": { goals: 12, assists: 10 },
      "Paul Pogba": { goals: 6, assists: 9 },
      "Virgil van Dijk": { goals: 5, assists: 2 },
      "Sergio Aguero": { goals: 22, assists: 5 },
      "Raheem Sterling": { goals: 18, assists: 11 },
      "Jadon Sancho": { goals: 14, assists: 12 },
      "Bruno Fernandes": { goals: 21, assists: 14 },
      "Harry Kane": { goals: 23, assists: 14 },
      "Heung-Min Son": { goals: 17, assists: 13 },
      "Phil Foden": { goals: 11, assists: 9 },
      "Luka Modric": { goals: 4, assists: 7 },
      "Joshua Kimmich": { goals: 3, assists: 10 },
      "Makkuana Brand":{ goals: 1000, assists: 10 }
    };
    
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mockDatabase[playerName]) {
          resolve(mockDatabase[playerName]);
        } else {
          reject('Player not found.');
        }
      }, 1000); // Simulate delay for fetching data
    })
      .then(playerStats => {
        displayPlayerData(playerName, playerStats);
      })
      .catch(error => {
        displayError(error);
      })
      .finally(() => {
        hideLoading();
      });
  }
  
  function displayPlayerData(playerName, stats) {
    document.getElementById('playerName').innerText = playerName;
    document.getElementById('playerStats').innerText = `Goals: ${stats.goals}, Assists: ${stats.assists}`;
  }
  
  function displayError(error) {
    document.getElementById('errorMessage').innerText = error;
  }
  
  // Cookie Consent Logic
  function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted') {
      document.getElementById('cookieConsent').style.display = 'block';
    }
  }
  
  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieConsent').style.display = 'none';
  }
  
  function rejectCookies() {
    alert('Cookies rejected. Some features might not work as expected.');
    document.getElementById('cookieConsent').style.display = 'none';
  }
  
  