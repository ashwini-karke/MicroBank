import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
  renderHook,
  act
} from "@testing-library/react";
import CreateAccount from "./CreateAccountForm";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getUser } from "../../MOCKAPI/ApiCalls";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);
let userData = {
  userEmail: "ashwini@123",
  userPass: "123",
};
afterEach(cleanup);

describe.only("Create Account Form", () => {
  test("Render Create Account form", () => {
    render(<CreateAccount />, { wrapper: Wrapper });

    const ele = screen.queryAllByTestId("input-wrapper");
    expect(ele).toHaveLength(5);

    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
  });

  test("Render Input Field", async () => {
    const {container}=render(<CreateAccount />, { wrapper: Wrapper });
    const mockfunction = jest.fn();
    const ele = await screen.getAllByRole("textbox");
    const err= await document.getElementById('err-msg')!
    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[0], { target: { value: "" } });
    fireEvent.change(ele[1], { target: { value: "" } });
    fireEvent.change(ele[2], { target: { value: "" } });
    fireEvent.change(ele[3], { target: { value: "" } });
    fireEvent.change(ele[4], { target: { value: "" } });
    fireEvent.change(ele[1], { target: { value: "" } });
    // fireEvent.blur(ele[0]);
    // fireEvent.blur(ele[1]);
    // fireEvent.blur(ele[2]);
    // fireEvent.blur(ele[3]);
    // fireEvent.blur(ele[4]);

    await fireEvent.click(submitBtn)
    expect((document.getElementById('err-msg') as HTMLInputElement).value).toBe('*Required')
    fireEvent.blur(ele[0]);
    fireEvent.blur(ele[0]);
  });
  test("Check for same password",()=>{
    render(<CreateAccount />, { wrapper: Wrapper });
    const ele = screen.getAllByRole("textbox");
    const err= document.getElementById('err-msg')
    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[3], { target: { value: "123" } });
    fireEvent.change(ele[4], { target: { value: "12345" } });
    fireEvent.click(submitBtn)
    expect((document.getElementById('err-msg') as HTMLInputElement).value).toBe('*Required')
  })
  test("Check for invalid email format",()=>{
    render(<CreateAccount />, { wrapper: Wrapper });
    const ele = screen.getAllByRole("textbox");
    const err= document.getElementById('err-msg')
    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[2], { target: { value: "123" } });
    fireEvent.click(submitBtn)
    expect((document.getElementById('err-msg') as HTMLInputElement).value).toBe('*Required')
  })
  test("Check for same password",async()=>{
    const {container}=render(<CreateAccount />, { wrapper: Wrapper });
    const mockfunction = jest.fn();
    const ele = screen.getAllByRole("textbox");
    const err= document.getElementById('err-msg')!
    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
    // fireEvent.change(ele[0], { target: { value: "ABC" } });
    // fireEvent.change(ele[1], { target: { value: "6 Nov" } });
    // fireEvent.change(ele[2], { target: { value: "ashwini@gmail.com" } });
    fireEvent.change(ele[3], { target: { value: "123" } });
    fireEvent.change(ele[4], { target: { value: "12345" } });
    await fireEvent.click(submitBtn)
  })
  test("Check for correct input values",async()=>{
    const {container}=render(<CreateAccount />, { wrapper: Wrapper });
    const mockfunction = jest.fn();
    const ele = screen.getAllByRole("textbox");
    const err= document.getElementById('err-msg')!
    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[0], { target: { value: "ABC" } });
    fireEvent.change(ele[1], { target: { value: "6 Nov" } });
    fireEvent.change(ele[2], { target: { value: "ashwini@gmail.com" } });
    fireEvent.change(ele[3], { target: { value: "123" } });
    fireEvent.change(ele[4], { target: { value: "123" } });
    fireEvent.blur(ele[0]);
    fireEvent.blur(ele[1]);
    fireEvent.blur(ele[2]);
    fireEvent.blur(ele[3]);
    fireEvent.blur(ele[4]);
    await fireEvent.click(submitBtn)
    // expect(mockfunction).toBeCalled
    // expect(getUser(userData)).toBeCalled()
  })

  
  test("Check Button", () => {
    render(<CreateAccount />, { wrapper: Wrapper });
    const mockfunction = jest.fn();
    const submitBtn = screen.getByRole("button", {
      name: "Create an Account",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.click(submitBtn);
  });

  test("Test Err Msg",()=>{
    render(<CreateAccount />, { wrapper: Wrapper });
    const mockfunction = jest.fn();
  
  
  })
});
