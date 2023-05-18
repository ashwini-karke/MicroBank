import ButtonComponent from "../../Common/Button";
import InputFieldComponent from "../../Common/InputField";
import "./styles.css";
import { useState } from "react";
import { getUser } from "../../MOCKAPI/ApiCalls";
import { Link, useNavigate } from "react-router-dom";
import {connect} from 'react-redux'


function LoginForm(props:any) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  let [errMsgEmail, setErrMsgEmail] = useState("");
  let [errMsgPass, setErrMsgPass] = useState("");
  let [errMsgInvalidUser, setErrMsgInvalidUser] = useState("");
  var setLogin: boolean;

  function handleEmailErr(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (email === "") {
      setErrMsgEmail((errMsgEmail = "*Please enter Email"));
    } else if (!email.includes(".com")) {
      setErrMsgEmail((errMsgEmail = "*Invalid Email"));
      setLogin = false;
    } else {
      setErrMsgEmail((errMsgEmail = ""));
      setLogin = true;
    }
  }

  function handlePassErr() {
    if (password === "") {
      setErrMsgPass((errMsgPass = "*Please enter password"));
      setLogin = false;
    } else {
      setErrMsgPass((errMsgPass = ""));
      setLogin = true;
    }
  }

  async function LoginUser() {
    if (email === "") {
      setErrMsgEmail("*Please enter Email");
    }
    if (password === "") {
      setErrMsgPass("*Please enter Password");
    } else if(email!=="" && password!==""){
      const data = {
        userEmail: email,
        userPass: password,
      };
      const userData = await getUser(data);
      console.log(userData)
      if (userData.length > 0) {
        JSON.stringify(userData[0].username);
        localStorage.setItem("username", userData[0].username);
        localStorage.setItem("email", userData[0].email);
        localStorage.setItem("password", userData[0].password);
        localStorage.setItem("id", userData[0].id);
        localStorage.setItem("islogin", "1");
        let profileName = userData[0].username
          .split(/\s/)
          .reduce(
            (response: string, word: string) => (response += word.slice(0, 1)),
            ""
          );
        localStorage.setItem("profileName", profileName.toUpperCase());
        navigate("/Dashboard");
      } else {
        setErrMsgInvalidUser("*Invalid User");
      }

      const userLoginData: string[] = [
        userData[0].username,
        userData[0].email,
        userData[0].password,
        userData[0].id,
      ];

      // props.loginAction(userLoginData);
    }
  }

  return (
    <div className="form-wrapper">
      <p className="login-txt">Login</p>
      <p className="login-msg">Please login to your account</p>
      <InputFieldComponent
        focus={true}
        id={"email"}
        labelName="Email or Phone"
        type="text"
        value={email}
        testId="email"
        placeholder="Email"
        handleOnChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
        handleErrOnfocusOut={handleEmailErr}
        errMsg={errMsgEmail}
      />

      <InputFieldComponent
        id={"password"}
        labelName="Password"
        type="password"
        value={password}
        testId="password"
        placeholder="Password"
        handleOnChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
        handleErrOnfocusOut={handlePassErr}
        errMsg={errMsgPass}
      />

      <div className="forget-pass-wrapper">
        <p className="forget-pass-txt">Forgot Password?</p>
      </div>

      <ButtonComponent
        buttonValidation={errMsgInvalidUser}
        buttonLabel="Login"
        onClickHandler={LoginUser}
      />

      <div className="create-acc-txt">
        <p>Dont't have an account? </p>
        <Link style={{ textDecoration: "none" }} to="/CreateAccount">
          <p style={{ color: "#D90429" }}> &nbsp;&nbsp;Create an Account</p>
        </Link>
      </div>
    </div>
  );
}
// const mapdispatchtoprops = (dispatch: any) => ({
//   loginAction: (data: string[]) => dispatch(loginAction(data)),
// });

// export default connect(null, mapdispatchtoprops)(LoginForm);

export default LoginForm;