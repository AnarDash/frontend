const API_BASE_URL = 'http://localhost:5000/api';

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return await response.json();
}

export async function register(userData) {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
}

export async function login(name, password) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password }),
  });
  return handleResponse(response);
}

export async function getUserLoans(userId) {
  const response = await fetch(`${API_BASE_URL}/loans/${userId}`);
  return handleResponse(response);
}

export async function addLoan(loanData) {
  const response = await fetch(`${API_BASE_URL}/loans/addLoan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loanData),
  });
  return handleResponse(response);
}