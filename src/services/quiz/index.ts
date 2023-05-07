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

    async submitQuizSession(sessionId: any, payload: any) {
        return await apiRequest(`quizes/sessions/${sessionId}/submit`, { method: 'POST', body: payload})
    },

    async getQuizSessionResult(sessionId: any) {
        return await apiRequest(`quizes/sessions/${sessionId}/result`, { method: 'GET'})
    },


    async getQuizSession(sessionId: any) {
        return await apiRequest(`quizes/sessions/${sessionId}`, { method: 'GET'})
    },


    async createChallenge(payload: any) {
        return await apiRequest(`quizes/challenges`, { method: 'POST', body: payload})
    },

    async getChallenge(challengeId: any) {
        return await apiRequest(`quizes/challenges/${challengeId}`, { method: 'GET'})
    },

    async getChallenges() {
        return await apiRequest(`quizes/challenges`, { method: 'GET'})
    },


}