
import guestMiddleware from "./guest"

function middlewarePipeline (context, middlewares, index) {
    
    const middleware = middlewares[index]
 

    console.log(context, 'context')


    if(middleware == 'guest'){
        // console.log('guest')
        // const nextPipeline = middlewarePipeline(
        //     context, middlewares, index + 1
        // )
        return guestMiddleware({ ...context })
    }

    if(!middleware){
        console.log('ds')
        return context.next
    }
 
    
 }
 export default middlewarePipeline