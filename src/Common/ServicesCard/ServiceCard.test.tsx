import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import ServiceCard from "./index";
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

describe.only("ServiceCard", () => {
  test("Render ServiceCard", () => {
    const mockFuntion=jest.fn()
    render(<ServiceCard category='card'><p></p><p></p></ServiceCard>, {
      wrapper: Wrapper,
    });
  });

});
