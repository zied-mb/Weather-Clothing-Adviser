function adviseClothing() {
    const temperature = document.getElementById('temperature').value;
    const isRaining = document.getElementById('raining').value;
    let advice = '';
  
    if (temperature < 10) {
      advice = 'It\'s quite cold. Wear a heavy jacket, hat, and gloves.';
    } else if (temperature >= 10 && temperature <= 20) {
      advice = 'It\'s a bit chilly. Wear a light jacket or a sweater.';
    } else {
      advice = 'It\'s warm. A t-shirt and shorts should be fine.';
    }
  
    if (isRaining === 'yes') {
      advice += ' Don\'t forget to take an umbrella or a raincoat.';
    }
  
    document.getElementById('adviceResult').innerText = advice;
  }