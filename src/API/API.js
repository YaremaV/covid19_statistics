const BASE_URL = 'https://api.covid19api.com/';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchSearch() {
  return fetchWithErrorHandling(`${BASE_URL}summary`);
}

export function fetchDetails(country) {
  return fetchWithErrorHandling(
    `${BASE_URL}live/country/${country}/status/confirmed`,
  );

  // curl --location --request GET 'https://api.covid19api.com/live/country/south-africa/status/confirmed'
  // ("https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z");
  // curl --location --request GET 'https://api.covid19api.com/total/country/south-africa/status/confirmed'
}
