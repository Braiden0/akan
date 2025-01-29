// script.js
function calculateDayOfWeek(date) {
    const [year, month, day] = date.split('-').map(Number);
    let m = month, y = year;
    if (m <= 2) {
      m += 12;
      y -= 1;
    }
    const k = Math.floor(y / 100);
    const j = y % 100;

    const f = day + Math.floor(13 * (m + 1) / 5) + j + Math.floor(j / 4) + Math.floor(k / 4) - 2 * k;
    const dayOfWeek = (f % 7 + 7) % 7;
    return dayOfWeek;
  }

  function getAkanName(dayOfWeek, gender) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afia', 'Ama'];

    if (gender === 'male') {
      return maleNames[dayOfWeek];
    } else {
      return femaleNames[dayOfWeek];
    }
  }

  document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    const dayOfWeek = calculateDayOfWeek(birthdate);
    const akanName = getAkanName(dayOfWeek, gender);

    document.getElementById('result').textContent = `Your Akan Name is: ${akanName}`;
  });