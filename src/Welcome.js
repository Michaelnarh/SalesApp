import React, { Component } from "react";
import firebase from "firebase";
export default class Welcome extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    isLogin: false,
  };
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCNZxUxSTahU7fz80mgT9Isk2DjNKbITSA",
      authDomain: "orbital-ethos-239204.firebaseapp.com",
      databaseURL: "https://orbital-ethos-239204.firebaseio.com",
      projectId: "orbital-ethos-239204",
      storageBucket: "orbital-ethos-239204.appspot.com",
      messagingSenderId: "1025630727120",
      appId: "1:1025630727120:web:4d7c50f61a1edb74",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ isLogin: true, username: "", password: "", email: "" });
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(" problem with credentials" + err.toString());
      });
    e.preventDefault();
  };
  handleLogin = e => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ isLogin: true, username: "", password: "", email: "" });
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(" problem with credentials" + err.toString());
      });
    e.preventDefault();
  };
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(u => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err + "problem");
      });
  };
  render() {
    const { username, password, email } = this.state;
    return (
      <>
        <div className="container mt-5">
          <form>
            <div className="form-group ">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                onChange={e => this.handleTextChange(e)}
                name="username"
                value={username}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                onChange={e => this.handleTextChange(e)}
                name="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="password"
                onChange={e => this.handleTextChange(e)}
                name="password"
                value={password}
              />
            </div>
            <button onClick={this.submitForm} className="btn btn-primary btn-outline-light form-contrl" type="submit">
              signUp
            </button>
            <button onClick={this.handleLogin} className="btn btn-primary btn-outline-light form-contrl" type="submit">
              LogIn
            </button>
          </form>
          <div className="container text-success">
            {this.state.isLogin ? (
              <>
                {" "}
                <h4>
                  am login <button onClick={this.handleSignout}>signout</button>{" "}
                </h4>
              </>
            ) : (
              "hemm"
            )}
          </div>
        </div>
      </>
    );
  }
}
