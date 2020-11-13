
import React, {Component} from 'react';
import axios from 'axios';


class Auth extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            password: '',
       
        }

      register = async (e) => {
        const user = await axios.post('/api/auth/register')
      }

      
    
             







    }
    render() {
        return(
            <div>
                <form>

        <div>Auth</div>
            <input name="username"/>
            <input name="password"/>
            <button>Login</button>
            <button>Register</button>
            
          
                </form>
            </div>
        )
    }
}

export default Auth;