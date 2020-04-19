const baseUrl = 'http://localhost:8000/api';
const getTokenUrl = `${baseUrl}/token/`;
const getBetsUrl = `${baseUrl}/bets/`;

function getToken() {
  const { token } = JSON.parse(localStorage.getItem('betAny-user'));
  return token;
}

function getUserToken(username, password) {
  const body = JSON.stringify({ username, password });
  console.log(body);
  return fetch(getTokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }).then((res) => res.json());
}

function getBets() {
  const token = getToken();
  return fetch(getBetsUrl, {
    method: 'GET',
    headers: {
      Authorization: `JWT ${token}`,
    },
  }).then((res) => res.json());
}

export { getUserToken, getBets };
