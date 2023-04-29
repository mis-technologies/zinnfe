import { createApp } from 'vue';
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import middlewarePipeline from './middleware/pipeline'
import guestMiddleware from './middleware/guest'
import authMiddleware from './middleware/auth'

import App from './App.vue';
import './styles/base.css';

// Router
import { Router } from '/@/router';



const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)





// middleware pipeline
Router.beforeEach((to, from, next) => {
    // console.log(to)
    if (!to.meta.tomiddleware ) {
        return next()
    }
    // const middleware = to.meta.tomiddleware

    const middleware = Array.isArray(to.meta.tomiddleware) ? to.meta.tomiddleware : [to.meta.tomiddleware]

    const unique = (value: any, index: any, self: any) => {
        return self.indexOf(value) === index
    }
    const uniqueMiddlewares = middleware.filter(unique)

    const context = {
        to,
        from,
        next,
        store: pinia.state,
        router: Router,
    }
    
    if( uniqueMiddlewares.includes('auth') ){
        console.log('middleware includes auth')
        authMiddleware({ ...context })
    }

    if( uniqueMiddlewares.includes('guest') ){
        console.log('middleware includes guest')
        guestMiddleware({ ...context })
    }

    
})



const app = createApp(App);

// app.use(i18n);

app.use(Router);

app.use(pinia);

app.mount('#app');
