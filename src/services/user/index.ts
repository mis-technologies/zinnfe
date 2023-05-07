import { apiRequest } from '../ofetch'


export default  {

    async getMe() {
        return await apiRequest('users/me', { method: 'GET'})
    },
    async getUser(username: any) {
        return await apiRequest(`users/${username}`, { method: 'GET'})
    },

    async getUsers(query: any) {
        let qu = new window.URLSearchParams(query).toString()
        return await apiRequest(`users?${qu}`, { method: 'GET' })
    },

}