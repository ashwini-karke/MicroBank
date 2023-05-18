import React from "react";
import { render, cleanup, screen, fireEvent, logRoles } from "@testing-library/react";

import CreateAccountPage from "./index";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

afterEach(cleanup);

describe.only("Create Account Page", () => {
  test("Render Create Account Page", () => {
    render(<CreateAccountPage />, { wrapper: Wrapper });
  });
});
