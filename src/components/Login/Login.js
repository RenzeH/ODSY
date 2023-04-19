import { signInWithGoogle } from '../../firebase/firebaseConfig';

import './Login.css';

const Login = () => {
  return (
    <div style={{marginTop:'3rem'}}>
      <button onClick={signInWithGoogle} type="button" className="login-with-google-btn" >
      Sign in with Google
      </button>
    </div>
    
  )
}

export default Login;