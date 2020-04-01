const baseUrl = 'http://localhost:8000/api';
const getTokenUrl = `${baseUrl}/token/`

function getUserToken(username, password) {
  const body = JSON.stringify({ username, password });
  console.log(body)
  return fetch(getTokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
  .then(res => res.json())
}

export { getUserToken }
