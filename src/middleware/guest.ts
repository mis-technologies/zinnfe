import { useAuthStore } from "../store";
export default function guestMiddleware({next, to, from}){
  
    const authStore = useAuthStore()
    let isLoggedIn =  authStore.isLoggedIn
    console.log('isLoggedIn: ', isLoggedIn)
    
    if(isLoggedIn){

        // console.log('sd')

        console.log('next: ', next)
        
        return next({
            name: 'app'
        })
    }

    return next();
}