import React from "react";
import { render, cleanup, screen, fireEvent, logRoles } from "@testing-library/react";

import Modal from "./index";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

afterEach(cleanup);

describe.only("Modal", () => {
  test("Render Modal", () => {
    render(<Modal transactionId='1' date='6 Nov' amount='10000' status='Approved'/>, { wrapper: Wrapper });

    const crossBtn=document.getElementById('cross')!
    fireEvent.click(crossBtn)
  });

});
