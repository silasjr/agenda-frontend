import * as http from 'axios'
const api = '/contatos'
export const listAllContatos = (filtro) => http.get(api)
export const deleteContato = (id) => http.delete(`${api}/${id}`)
export const saveContato = (contato) => http.post(api, contato)
export const updateContato = (contato) => http.put(`${api}/${contato._id}`, contato)
