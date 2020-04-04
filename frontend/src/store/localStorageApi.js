export const loadUser = () => {
  try {
    const serializedUser = localStorage.getItem('betAny-user')
    if (serializedUser === null) {
      return undefined;
    }
    return JSON.parse(serializedUser);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export const saveUser = (user) => {
  try {
    const serializedUser = JSON.stringify(user);
    localStorage.setItem('betAny-user', serializedUser);
  } catch (err) {
    console.log(err);
  }
}