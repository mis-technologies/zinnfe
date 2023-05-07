import { apiRequest } from '../ofetch'


export default  {

    async getMe() {
        return await apiRequest('users/me', { method: 'GET'})
    },
    async getUser(username: any) {
        return await apiRequest(`users/${username}`, { method: 'GET'})
    },

}