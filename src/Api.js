const userAPI = "https://jsonplaceholder.typicode.com/users/";

export async function fetchUser(id) {
  const res = await fetch(userAPI + id);
  const data = await res.json();
  return data;
}
