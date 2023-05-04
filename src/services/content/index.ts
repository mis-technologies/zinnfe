import { apiRequest } from '../ofetch'


export default  {    
    async getLessons(query: any) {
        let qu = new window.URLSearchParams(query).toString()
        return await apiRequest(`lessons?${qu}`, { method: 'GET' })
    },
    async getLesson(lessonId: any) {
        return await apiRequest(`lessons/${lessonId}`, { method: 'GET' })
    },

    async getCourses() {
        return await apiRequest(`courses`, { method: 'GET' })
    },

    async getCourse(coursesId: any) {
        return await apiRequest(`courses/${coursesId}`, { method: 'GET' })
    },

}