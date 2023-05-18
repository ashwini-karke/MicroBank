import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import { useState } from "react";
import LoginForm from "./LoginForm";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import InputFieldComponent from "../../Common/InputField";
import userEvent from "@testing-library/user-event";
import { getUser } from "../../MOCKAPI/ApiCalls";


import axios from 'axios';
// jest.mock('axios');


const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);
let data = {
  userEmail: "ashwini@123",
  userPass: "123",
};
afterEach(cleanup);

describe.only("Login Form", () => {
  test("Render login form", () => {
    userEvent.setup();
    render(<LoginForm />, { wrapper: Wrapper });

    const inputEl = screen.getByLabelText("Email or Phone");
    expect(inputEl).toBeInTheDocument();

    const inputEl2 = screen.getByLabelText("Password");
    expect(inputEl2).toBeInTheDocument();

    const submitBtn = screen.getByRole("button", {
      name: "Login",
    });
    expect(submitBtn).toBeInTheDocument();
  });
  test("Empty email and password", async () => {
    render(<LoginForm />, { wrapper: Wrapper });

    const email: HTMLInputElement = screen.getByRole("textbox", {
      name: /email or phone/i,
    });
    expect(email).toBeInTheDocument();
    await fireEvent.change(email, { target: { value: "" } });
    expect(email.value).toBe("");
    fireEvent.blur(email);

    const password: HTMLInputElement = screen.getByLabelText(/password/i);
    expect(password).toBeInTheDocument();
    await fireEvent.change(password, { target: { value: "" } });
    expect(password.value).toBe("");
    fireEvent.blur(password);
  });
  test("invalid email", async () => {
    render(<LoginForm />, { wrapper: Wrapper });

    const email: HTMLInputElement = screen.getByRole("textbox", {
      name: /email or phone/i,
    });
    expect(email).toBeInTheDocument();
    await fireEvent.change(email, { target: { value: "ash" } });
    expect(email.value).toBe("ash");
    fireEvent.blur(email);
  });

  test("Check email error on submit", async () => {
    render(<LoginForm />, { wrapper: Wrapper });
    const email: HTMLInputElement = screen.getByRole("textbox", {
      name: /email or phone/i,
    });
    const submitBtn = screen.getByRole("button", {
      name: "Login",
    });
    const err = (await document.getElementById("err-msg")!)as HTMLInputElement ;
    expect(email).toBeInTheDocument();
    await fireEvent.change(email, { target: { value: "" } });
    fireEvent.click(submitBtn);
    expect(err.value).toBe("*Please enter Email");
  });

  test("Check password error on submit", async () => {
    render(<LoginForm />, { wrapper: Wrapper });
    const password: HTMLInputElement = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button", {
      name: "Login",
    });
    const err = (await document.getElementById("err-msg")!) as HTMLInputElement;
    expect(password).toBeInTheDocument();
    await fireEvent.change(password, { target: { value: "" } });
    fireEvent.click(submitBtn);
    expect(err.value).toBe("*Please enter Email");
  });




  test("Change the input value", async () => {
 
    userEvent.setup();
    const mockFunction=jest.fn()
    render(<LoginForm />, { wrapper: Wrapper });
    const submitBtn = screen.getByRole("button", {
      name: "Login",
    });
    const email: HTMLInputElement = screen.getByRole("textbox", {
      name: /email or phone/i,
    });
    expect(email).toBeInTheDocument();
    await fireEvent.change(email, { target: { value: "ashwini@gmail.com" } });
    expect(email.value).toBe("ashwini@gmail.com");
    fireEvent.blur(email);

    const password: HTMLInputElement = screen.getByLabelText(/password/i);
    expect(password).toBeInTheDocument();
    await fireEvent.change(password, { target: { value: "123" } });
    expect(password.value).toBe("123");
    fireEvent.blur(password);
   

    // const mockedAxios = axios as jest.Mocked<typeof axios>;

    // mockedAxios.get.mockResolvedValue({
    //   data: [
    //     {
    //       "username": "Ashwini Karke",
    //       "email": "ashwini@gmail.com",
    //       "password": "1234",
    //       "id": 1
    //     },
    //     {
    //       "username": "ash",
    //       "email": "ash@gmail.com",
    //       "password": "12345",
    //       "id": 2
    //     }
    //   ],
    // });
    // await waitFor(() =>  mockFunction(data));
   
    fireEvent.click(submitBtn);
    // await expect (mockFunction(data)).toHaveBeenCalled()
   
  });
});
