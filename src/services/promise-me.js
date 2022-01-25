/**
 * TODO: Write a fetch request to an API using .then()
 */
export function fetchBreweries1() {
  const resp = fetch('https://api.openbrewerydb.org/breweries')
    .then((data) => data.json())
    .then((brewData) => console.log(brewData));
  return resp;
}

export async function fetchBreweries2() {
  const resp = await fetch('https://api.openbrewerydb.org/breweries');
  const data = await resp.json();
  console.log(data);
  return data;
}

/**
 * TODO:
 */
export function fetchPinBall() {
  const resp = fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((pinBallData) => console.log(pinBallData));
  return resp;
}
/**
 * TODO:
 */
export function fetchCatFacts() {
  const resp = fetch('https://cat-fact.herokuapp.com')
    .then((data) => data.json())
    .then((catData) => console.log(catData));
  return resp;
}

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
