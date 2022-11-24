export async function getUser() {
  let data = [];
  try {
    let response = await fetch('https://api.github.com/users/carpioapaza');
    200 === response.status
      ? (data = await response.json())
      : console.log('Error desconocido');
  } catch (error) {
    console.log(error);
  }
  return data;
}
export async function getRepos() {
  let data = [];
  try {
    let response = await fetch(
      'https://api.github.com/users/carpioapaza/repos'
    );
    200 === response.status &&
      (data = (await response.json()).filter(
        (data) => data.stargazers_count >= 1
      ));
  } catch (error) {
    console.log(error);
  }
  return data;
}
export async function getReposByName(name) {
  let data = [];
  try {
    let response = await fetch(
      `https://api.github.com/repos/carpioapaza/${name}`
    );
    200 === response.status
      ? (data = await response.json())
      : console.log('Error desconocido');
  } catch (error) {
    console.log(error);
  }
  return data;
}
