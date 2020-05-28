import axios from 'axios';

const APIService = axios.create({
	baseURL: 'http://localhost:3000',
	responseType: "json",
	headers: "Content-Type: application/json"
})

export default APIService