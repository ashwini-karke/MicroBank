import "./styles.css";
import React, { useRef,useEffect } from "react";
interface InputProps {
  labelName: string;
  id: string;
  type: string;
  value: string;
  placeholder: string;
  errMsg: string;
  focus?:boolean;
  testId?:string
  handleOnChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleErrOnfocusOut: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputFieldComponent(props: InputProps) {
  const {
    focus,
    labelName,
    id,
    type,
    value,
    placeholder,
    errMsg,
    testId,
    handleOnChangeInput,
    handleErrOnfocusOut,
  } = props;

 
  return (
    <div className="input-component" data-testid='input-wrapper'>
      <label htmlFor={id}>{labelName}</label>
      <input  
      className="input"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChangeInput}
        onBlur={handleErrOnfocusOut}
        data-testid={testId}
      />
      <input className="err-msg" id='err-msg' aria-label="err-msg" value={errMsg}/>
      {/* <p className="err-msg" id='err-msg' data-testid='err-msg'>{errMsg}</p> */}
    </div>
  );
}
