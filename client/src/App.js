import './App.css';

function App() {
  return (
    <div className="App">
        <form action="#" method="POST" noValidate="" autoComplete="off">
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
                <input type="submit" value="Login" className="button-green"/>
            </div>
        </form>
    </div>
  );
}

export default App;
