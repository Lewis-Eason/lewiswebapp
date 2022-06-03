import './App.css';
import $ from 'jquery';
import Axios from "axios";


function App() {

    const login = () => {
        const username = $("#username").val();
        const password = $("#password").val();
        Axios.post("http://localhost:3001/validateLogin", {
            username: username,
            password: password,
        }).then(() => {
            alert("Successful login!");
        }).catch(() => {
            alert("Invalid login");
        });
    }

  return (
    <div className="App">
            <div className="container">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password"/>
                <div className="error">Invalid login</div>
                <span>
                    <a href="#">Forgot your password?</a>
                    <p>Not a member? <a href="#">Click here</a> to create an account.</p>
                </span>
                <input type="submit" value="Login" className="button-green" onClick={login}/>
            </div>
    </div>
  );
}

export default App;
