import { apiRequest } from '../ofetch'


export default  {

    async getMe() {
        return await apiRequest('users/me', { method: 'GET'})
    },
 
    async getUsers(query: any) {
        let qu = new window.URLSearchParams(query).toString()
        return await apiRequest(`users?${qu}`, { method: 'GET' })
    },

    async getUser(userId: any) {
        return await apiRequest(`users/${userId}`, { method: 'GET' })
    }

}