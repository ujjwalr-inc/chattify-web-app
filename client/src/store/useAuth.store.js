import {create} from "zustand"
import {axiosInstance} from '../lib/axios.js'
import toast from "react-hot-toast";
import {io} from 'socket.io-client'


const BASE_URL = import.meta.env.MODE=== "development"?"http://localhost:5001":"/";
export const useAuthStore = create((set,get)=>({
authUser:null,
isSigningUp:false,
isLoggingIn:false,
isUpdatingprofile:false,
isCheckingAuth: true,
onlineUsers:[],
socket:null,


checkAuth : async()=>{
try {
    const res = await axiosInstance.get("/auth/check");
    set({authUser:res.data})
    get().connectSocket()
} catch (error) {
    console.log("error in check auth ",error.message)
    set({authUser:null})
}finally{
    set({isCheckingAuth:false})
}
},

signup: async(data)=>{
    set({isSigningUp:true});

try {
const res = await axiosInstance.post("/auth/signup",data);
set({authUser : res.data})
get().connectSocket()
toast.success("Account Created Successfully");
get().connectSocket();
} catch (error) {
    toast.error(error.message);
}finally{
    set({isSigningUp:false})
}

},
login:async(data)=>{
    set({isLoggingIn:true});
    try {
        const res = await axiosInstance.post("/auth/login",data);
        set({authUser:res.data});
        toast.success("Logged In Successfully");
        get().connectSocket()
    } catch (error) {
        toast.error(error.message);
        
    }
    finally{
        set({isLoggingIn:false})
    }

},


logout:async()=>{
    try {
        await axiosInstance.post("/auth/logout");
        set({authUser:null})
        toast.success("Logged Out Successfully");
        get().disconnectSocket()
    } catch (error) {
        toast.error(error.response.messsage.data.message)
    }
},
updateProfile: async(data)=>{
    set({isUpdatingprofile:true})
    try {
        const res = await axiosInstance.put("/auth/update-profile",data);
        set({authUser:res.data})
        toast.success("Toast updated Successfully")
        
    } catch (error) {
    console.log("error in uploading image",error)
    toast.error(error.message) 

    }finally{
        set({isUpdatingprofile:false})

    }

},


connectSocket:()=>{
    const {authUser} = get()
    if(!authUser || get().socket?.connected) return;
    const socket = io(BASE_URL,{
        query:{
            userId:authUser._id
        }
    })
    socket.connect()
    set({socket:socket})

    socket.on("getOnlineUsers",(userIds)=>{
    set({onlineUsers:userIds})
    })
},
disconnectSocket:()=>{
    if(get().socket?.connected) get().socket.disconnect();
}



}))