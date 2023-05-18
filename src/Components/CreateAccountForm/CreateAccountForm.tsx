import ButtonComponent from "../../Common/Button";
import InputField from "../../Common/InputField";
import "./styles.css";
import { useState } from "react";
import { createUser } from "../../MOCKAPI/ApiCalls";

import { Link, useNavigate } from "react-router-dom";

interface fields {
  labelName: string;
  type: string;
  value: string;
  errMsg: string;
}
const registrationFields: fields[] = [
  {
    labelName: "Full Name",
    type: "text",
    value: "",
    errMsg: "",
  },
  {
    labelName: "Date of Incorporation",
    type: "date",
    value: "",
    errMsg: "",
  },
  {
    labelName: "Email",
    type: "email",
    value: "",
    errMsg: "",
  },
  {
    labelName: "Password",
    type: "password",
    value: "",
    errMsg: "",
  },
  {
    labelName: "Confirm Password",
    type: "password",
    value: "",
    errMsg: "",
  },
];

export default function CreateAccountCard() {
  let [value, setName] = useState("");
  let [errMsg, setErrMsg] = useState("");
  const [submitErr, setSubmitErr] = useState("");
  const navigate = useNavigate();

  let userData = {
    username: "",
    email: "",
    password: "",
  };
  function handleInput(e: any) {
    registrationFields[e.target.id.slice(10, 11)].value = e.target.value;
    setName(registrationFields[e.target.id.slice(10, 11)].value);
  }

  function createAccount() {
    userData.username = registrationFields[0].value;
    userData.email = registrationFields[2].value;
    userData.password = registrationFields[3].value;

    if (
      registrationFields[0].value === "" &&
      registrationFields[1].value === "" &&
      registrationFields[2].value === "" &&
      registrationFields[3].value === ""
    ) {
      registrationFields.forEach((element) => {
        element.errMsg = "*Required";
        setErrMsg(element.errMsg);
      });
    }
    // else if ( registrationFields[3].value!=="" &&
    //   registrationFields[3].value !== registrationFields[4].value
    // ) {
    //   setSubmitErr("*Password not same");
    // } 
    else if(registrationFields[2].value!=="" && !registrationFields[2].value.includes(".com"))
    {
      registrationFields[2].errMsg='*Invalid Email'
      setErrMsg(registrationFields[2].errMsg)
    }
    else{
      createUser(userData);
      navigate("/Login");
    }
    // else{
    //   registrationFields.forEach((e)=>{
    //     if(e.value==="")
    //     {
    //       e.errMsg = "*Required";
    //       setErrMsg(e.errMsg);
    //     }
    //   })
    // }
  }

  function handleErr(e: any) {
      if (e.target.value === "") {
        registrationFields[e.target.id.slice(10, 11)].errMsg = "*Required";
        setErrMsg(registrationFields[e.target.id.slice(10, 11)].errMsg);
      } else if (
        e.target.type === "email" &&
        !e.target.value.includes(".com")
      ) {
        registrationFields[e.target.id.slice(10, 11)].errMsg = "*Invalid Email";
        setErrMsg(registrationFields[e.target.id.slice(10, 11)].errMsg);
      } else {
        registrationFields[e.target.id.slice(10, 11)].errMsg = "";
        setErrMsg(registrationFields[e.target.id.slice(10, 11)].errMsg);
      }
  }
  return (
    <div className="form-wrapper">
      <p className="login-txt">Create an Account</p>
      {registrationFields.map(
        (data: fields, index: number): JSX.Element => (
            <InputField
              key={index}
              id={"inputField" + index}
              labelName={data.labelName}
              type={data.type}
              value={data.value}
              placeholder={data.labelName}
              errMsg={data.errMsg}
              handleOnChangeInput={handleInput}
              handleErrOnfocusOut={handleErr}
              testId={data.labelName}
            />
        )
      )}
      <ButtonComponent
        buttonValidation={submitErr}
        buttonLabel="Create an Account"
        onClickHandler={createAccount}
      />

      <div className="create-acc-txt">
        <p>Already have an account?&nbsp;&nbsp;</p>
        <Link style={{ textDecoration: "none" }} to="/Login">
          <p style={{ color: "#D90429" }}> Login</p>
        </Link>
      </div>
    </div>
  );
}
