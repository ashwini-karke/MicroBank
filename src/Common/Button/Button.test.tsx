import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Button from "./index";
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

describe.only("Button", () => {
  test("Render Button", () => {
    const mockFuntion=jest.fn()
    render(<Button buttonLabel='submit' buttonValidation='err' onClickHandler={mockFuntion}/>, {
      wrapper: Wrapper,
    });
  });

});
