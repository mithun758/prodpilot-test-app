/**
 * API client — centralised HTTP calls to backend.
 */
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const api = {
  
  // Auth
  login: (email, password) => 
    fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  logout: (token) =>
    fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }),

  // Payments
  processPayment: (payload) =>
    fetch(`${BASE_URL}/payments/process`, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getPaymentHistory: (userId) =>
    fetch(`${BASE_URL}/payments/history/${userId}`),

  // Users
  getUser: (userId) =>
    fetch(`${BASE_URL}/users/${userId}`),

  updateUser: (userId, data) =>
    fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};
