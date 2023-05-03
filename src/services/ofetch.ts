import { ofetch } from 'ofetch'
// import { useAuthStore } from '../store/auth';

import { Router } from '../router';


let options = {
    baseURL: 'http://zinnbe.test/api/v1',
    headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache'
    },
    onRequest: ({request, response, options, error}: any) => {
    
       if(window.localStorage.useAuthStore){
        const authStore =  JSON.parse(window.localStorage.useAuthStore); // global method
        if ( authStore.isLoggedIn && authStore.bearerToken ){
            options.headers.Authorization = 'Bearer ' + authStore.bearerToken
        }
       }
    },

    onRequestError: (err: any) => {
        console.error('onRequestError', err)
    },

    onResponse: ({ request, options, response }: any) => {
        // console.log(request, options, response);
    },

    onResponseError: ({ request, options, response }: any) =>{
        //if error is 401 - clear local storage and redirect back to the login page
        console.error('onResponseError', response.status)
        if(response.status === 401){
            delete window.localStorage.useAuthStore;
            Router.push('/signin');
        }
    },
}




const apiRequest = ofetch.create(options)

export {apiRequest}
// apiRequest('/test') // Same as ofetch('/test', { baseURL: '/api' })