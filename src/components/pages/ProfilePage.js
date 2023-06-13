import React from "react";
import { useRef ,useContext} from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
const ProfilePage=()=>{
  const history=useHistory()
  const authCtx=useContext(AuthContext)
  const newPasswordInputRef=useRef()
  const submitHandler=(event)=>{
       event.preventDefault();
       const enteredNewPassword=newPasswordInputRef.current.value
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key= AIzaSyC55DzSI2j7o_4bu-W2AL-BhjbyUQeQSJc',{
        method:'POST',
        body:JSON.stringify({
          idToken:authCtx.token,
          password:enteredNewPassword,
          returnSecureToken:false
        }),
        headers:{
          'Content-Type':'application/json'
        }

       }).then(res=>{
            history.replace("/passwordchanged")
       })
  }
return(
    <form  onSubmit={submitHandler}>
    <div >
      <label >New Password</label>
      <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
    </div>
    <div >
      <button>Change Password</button>
    </div>
  </form>
)
}
export default ProfilePage