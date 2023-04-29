import { useAuthStore } from "../store";
export default function authMiddleware({next, to, from}){
    const authStore = useAuthStore()
    let isLoggedIn =  authStore.isLoggedIn
    
    console.log('authMiddleware')
    if(!isLoggedIn){
        return next({
            name: 'signin'
        })
    }

    return next();
}

  // if (to.meta.requiresAuth && !authStore.isLoggedIn) return '/login' 