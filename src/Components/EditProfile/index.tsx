import InputField from "../../Common/InputField";
import Button from "../../Common/Button";
import "./styles.css";
import ImageIcon from "../../assests/Images/Image-icon.png";
import { useState } from "react";
import { changePassword } from "../../MOCKAPI/ApiCalls";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

interface fields {
  labelName: string;
  type: string;
  value: string;
  errMsg: string;
}
const editableFields: fields[] = [
  {
    labelName: "Company Name",
    type: "text",
    value: "",
    errMsg: "",
  },
  {
    labelName: "Email Address",
    type: "email",
    value: "",
    errMsg: "",
  },
  {
    labelName: "Old Password",
    type: "password",
    value: "",
    errMsg: "",
  },
  {
    labelName: "New Password",
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
function EditProfile(props: any) {
  let [data, setData] = useState("");
  let [errMsg, setErrMsg] = useState("");
  const [submitErrMsg, setSubmitErrMsg] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(0);
  const [password, setPassword] = useState('');
  let navigate = useNavigate();


  async function ChangePassword() {
    const name = localStorage.getItem("username");
    const emailId = localStorage.getItem("email");
    const userId = localStorage.getItem("id");
    const userPassword = localStorage.getItem("password");
    // setUsername(name? name:"Ashwini")
    // setEmail(email? email:"ashwini@123")
    // setPassword(password?password:"123")
    // setId(id?id:1)
    
    // const username = props.userData[0];
    // const email = props.userData[1];
    // const password = props.userData[2];
    // const id = props.userData[3];
    const updatedPassword = editableFields[3].value;

    if (
      editableFields[0].value === "" &&
      editableFields[1].value === "" &&
      editableFields[2].value === "" &&
      editableFields[3].value === "" &&
      editableFields[4].value === ""
    ) {
      editableFields.forEach((element) => {
        element.errMsg = "*Required";
        setErrMsg(element.errMsg);
      });}
    // } else if (
    //   editableFields[2].value !== "" &&
    //   editableFields[2].value === editableFields[3].value
    // ) {
    //   setSubmitErrMsg("*New password cannot be the same as old");
    // } else if (
    //   editableFields[3].value !== "" &&
    //   editableFields[3].value !== editableFields[4].value
    // ) {
    //   setSubmitErrMsg("*Password not same");
    // } else if (!editableFields[1].value.includes(".com")) {
    //   editableFields[1].errMsg = "*Invalid Email";
    //   setErrMsg(editableFields[1].errMsg);
    // } else if (editableFields[1].value !== email) {
    //   editableFields[1].errMsg = "*Incorrect Email";
    //   setErrMsg(editableFields[1].errMsg);
    // } else if (editableFields[2].value !== password) {
    //   editableFields[2].errMsg = "*Incorrect Password";
    //   setErrMsg(editableFields[2].errMsg);
    //} 
    else if (
      editableFields[0].value !== "" &&
      editableFields[1].value !== "" &&
      editableFields[2].value !== "" &&
      editableFields[3].value !== "" &&
      editableFields[4].value !== ""
    ) {
      changePassword(username, email, updatedPassword, id);
      navigate("/Dashboard");
    } else {
      editableFields.forEach((e) => {
        if (e.value === "") {
          e.errMsg = "*Required";
          setErrMsg(e.errMsg);
        }
      });
    }
  }

  function handleInput(e: any) {
    editableFields[e.target.id.slice(10, 11)].value = e.target.value;
    setData((data = editableFields[e.target.id.slice(10, 11)].value));
  }
  function handleErr(e: any) {
    editableFields.forEach((ele) => {
      if (e.target.value === "") {
        editableFields[e.target.id.slice(10, 11)].errMsg = "*Required";
        setErrMsg(editableFields[e.target.id.slice(10, 11)].errMsg);
      } else if (
        e.target.type === "email" &&
        !e.target.value.includes(".com")
      ) {
        editableFields[e.target.id.slice(10, 11)].errMsg = "*Invalid email";
        setErrMsg(editableFields[e.target.id.slice(10, 11)].errMsg);
      } else {
        editableFields[e.target.id.slice(10, 11)].errMsg = "";
        setErrMsg(editableFields[e.target.id.slice(10, 11)].errMsg);
      }
    });
  }
  return (
    <div className="edit-profile-wrapper">
      <div>
        <div className="upload-profile-field">
          <div className="uploaded-image">
            <img src={ImageIcon} alt="img" />
          </div>
          <div className="browse-image-button">
            Browse Image
            <input type="file" />
          </div>
        </div>
      </div>
      <div className="input-field-wrapper">
        {editableFields.map(
          (data: fields, index: number): JSX.Element => (
            <>
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
              />
            </>
          )
        )}
      </div>
      <Button
        buttonValidation={submitErrMsg}
        buttonLabel="Update"
        onClickHandler={ChangePassword}
      />
    </div>
  );
}

const mapstatetoprops = (state: any) => {
  return {
    userData: state.loginUserReducer.userData,
  };
};
export default connect(mapstatetoprops, null)(EditProfile);
