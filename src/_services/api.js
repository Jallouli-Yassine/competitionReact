import axios from 'axios';
const apiUrl = "http://localhost:3001/competitions"
export async function getAll() {
    return (await axios.get(apiUrl)).data;
}
export async function getOne(id) {
    return (await axios.get(`${apiUrl}/${id}`)).data;
}
export async function addOne(product) {
    return (await axios.post(apiUrl, product)).data;
}
export async function updateOne(id, movie) {
    return (await axios.put(`${apiUrl}/${id}`, movie)).data
}
export async function deleteOne(id) {
    return (await axios.delete(`${apiUrl}/${id}`)).data;
}