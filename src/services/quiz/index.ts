import { apiRequest } from '../ofetch'


export default  {

    async submitResponse(query: any) {
        return await apiRequest(`quizes/1/responses?${query}`, { method: 'POST'})
    },


    async getQuizLevels() {
        return await apiRequest(`quizes/levels`, { method: 'GET'})
    },
    async startQuizSession(payload: any) {
        return await apiRequest(`quizes/sessions/start`, { method: 'POST', body: payload})
    },

    async submitQuizSession(session: any, payload: any) {
        return await apiRequest(`quizes/sessions/${session}/submit`, { method: 'POST', body: payload})
    },

    async getQuizSessionResult(session: any) {
        return await apiRequest(`quizes/sessions/${session}/result`, { method: 'GET'})
    },


}