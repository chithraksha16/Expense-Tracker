import {ToastContainer,Bounce,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"



 export const showSuccess=(message="Successfull")=>{
    toast.success(message,{
            position:"top-right",
            autoClose:1000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
            theme:"dark",
            transition:Bounce,
        });
}





 export const showError=(message="Something went wrong")=>{
    toast.error(message,{
            position:"top-right",
            autoClose:1000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
            theme:"dark",
            transition:Bounce,
        });
}