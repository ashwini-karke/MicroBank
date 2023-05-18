import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SummaryCard from "./index";
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

describe.only("SummaryCard", () => {
  test("Render SummaryCard", () => {
    const mockFuntion=jest.fn()
    render(<SummaryCard/>, {
      wrapper: Wrapper,
    });
  });

});
