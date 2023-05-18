import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import InputField from "./index";
import Modal from "../../Common/Modal";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

afterEach(cleanup);

describe.only("InputField", () => {
  test("Render InputField", () => {
    const mockFuntion=jest.fn()
    render(<InputField labelName='Email'
        id='email'
        type='email'
        value='ashwini@gmail.com'
        placeholder='Email'
        errMsg=''
        testId=''
        handleOnChangeInput={mockFuntion}
        handleErrOnfocusOut={mockFuntion}/>, {
      wrapper: Wrapper,
    });
  });

});
