import axios from 'axios';

// const userURL = 'http://localhost:3001/users';
const userURL = 'http://localhost:3001/users'; // server running on this port

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${userURL}/${id}`)
} 

// export const addUser = async (userData) => {
//     return await axios.post(`${userURL}`, userData)
// } 

export const addUser = async (userData) => {
    return await axios.post(`${userURL}/add`, userData);
} 

export const deleteUser = async (id) => {
    return await axios.delete(`${userURL}/${id}`);
}

export const editUser = async (id, userData) => {
    return await axios.put(`${userURL}/${id}`, userData);
}

export const Login = async (loginData) => {
    return await axios.post(`${userURL}/login`, loginData);
}