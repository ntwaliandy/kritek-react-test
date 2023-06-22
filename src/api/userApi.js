import { API_URL } from "../config";

export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (user) => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (userId) => {
  await fetch(`${API_URL}/${userId}`, { method: 'DELETE' });
};
