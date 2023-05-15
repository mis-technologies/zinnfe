// @ts-nocheck
import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default  {
  getSocketInstance () {
      const token = typeof window !== "undefined" && localStorage.getItem("token");
      window.Pusher = Pusher;

      let options = {}
      if(import.meta.env.VITE_SOCKET_SERVER === 'echo'){
        options = {
          broadcaster: "pusher",
          key: import.meta.env.VITE_ECHO_SOCKET_KEY,
          wsHost: import.meta.env.VITE_ECHO_SOCKET_HOST,
          forceTLS: false,
          encrypted: false,
          wsPort: import.meta.env.VITE_ECHO_SOCKET_PORT,
          wssPort: import.meta.env.VITE_ECHO_SOCKET_SSL_PORT,
          cluster: import.meta.env.VITE_ECHO_SOCKET_CLUSTER,
          
        }
      }else{
        options = {
          broadcaster: "pusher",
          key: import.meta.env.VITE_PUSHER_SOCKET_KEY,
          cluster: import.meta.env.VITE_PUSHER_SOCKET_CLUSTER,
          encrypted: true,
          forceTLS: true,
        }
      }

      const socketInstance = new Echo({
        ...options, 
        authEndpoint: import.meta.env.VITE_SOCKET_AUTH_ENDPOINT,
        disableStats: import.meta.env.VITE_SOCKET_DISABLE_STAT,
        enabledTransports: import.meta.env.VITE_SOCKET_ENABLED_TRANSPORT.split(','),
        auth: {
          headers: {
            authorization: !!token ? `Bearer ${token}` : "",
          },
        }
      })


      if(import.meta.env.VITE_SOCKET_ENABLE_LOG){

        socketInstance.channel('testchannel').listen(".Test", (e) => {
          console.log('.TestEvent', e)
        })

        // The connection to Channels is open and authenticated with your app
        socketInstance.connector.pusher.connection.bind('connected', (payload) => {
            console.log('connected!', payload);
        });

        // PING FROM SERVER
        socketInstance.connector.pusher.connection.bind('message', (payload) => {
            console.log('message', payload);
        });


      }

      return socketInstance
  }
}
