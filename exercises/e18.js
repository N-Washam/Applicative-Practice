/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const years = [];

  for (let i = 0; i < data.asteroids.length; i++) {
    if (years[data.asteroids[i].discoveryYear]) {
      years[data.asteroids[i].discoveryYear] += 1;
    } else {
      years[data.asteroids[i].discoveryYear] = 1;
    }
  }

  console.log(years);

  const numberOfAsteroids = Math.max(...years.filter((year) => year));
  const year = years.indexOf(numberOfAsteroids);
  return year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
