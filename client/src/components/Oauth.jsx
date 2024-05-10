import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import {GoogleAuthProvider,  getAuth,  signInWithPopup} from "firebase/auth"
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
  const auth = getAuth(app)
  const dispatch =useDispatch()
  const navigate = useNavigate()
    const handleGoogleclick = async()=>{
       
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt: "select_account" })
        try{
            const resultFromGoogle = await signInWithPopup(auth,provider)
           const res  = await  fetch('api/auth/google',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
              name: resultFromGoogle.user.displayName,
              email:resultFromGoogle.user.email,
              googlePhotoURL:resultFromGoogle.user.photoURL
            }),
            
           })
          
           const data = await res.json()
           if (res.ok){
               dispatch(signInSuccess(data))
               navigate('/')

        }}
        catch(error){
          console.log(error)
        }
    }
  return (
    <Button type="button" outline onClick={handleGoogleclick}> Continue with Google
    <AiFillGoogleCircle className="w-6 h-6 ml-2"/>
    </Button>
)
}
