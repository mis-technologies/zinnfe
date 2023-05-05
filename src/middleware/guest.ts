import { useAuthStore } from "../store";
export default function guestMiddleware({next, to, from}){
  
    const authStore = useAuthStore()
    let isLoggedIn =  authStore.isLoggedIn
    console.log('isLoggedIn: ', isLoggedIn)
    
    if(isLoggedIn){
        return next({
            name: 'app-home'
        })
    }

    return next();
}