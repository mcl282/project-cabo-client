const jwt = localStorage.getItem('jwt');

export const auth_header = { 'Authorization': `Bearer ${jwt}`};