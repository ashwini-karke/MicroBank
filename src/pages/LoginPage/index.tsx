import React from "react";
import GroupImage from "../../Common/LoginCreateImage";
import LoginForm from "../../Components/LoginForm/LoginForm";
import store from '../../Store';
import {Provider} from 'react-redux'
import "./styles.css";

export default function LoginPage() {
  return (
    <div className="loginPage">
      <GroupImage></GroupImage>
      <Provider store={store}>
        <LoginForm></LoginForm>
      </Provider>
    </div>
  );
}
