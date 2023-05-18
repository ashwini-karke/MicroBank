import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  renderHook,
  act
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionTable from "./index";
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

describe.only("Transaction Table", () => {
  test("Render Transaction Table", () => {
    render(<TransactionTable />, {
      wrapper: Wrapper,
    });
  });

  test("Show Modal", () => {
    userEvent.setup();
    const handleClick = jest.fn();
    render(<TransactionTable />, {
      wrapper: Wrapper,
    });
    render(
      <Modal transactionId="1" date="6 Nov" amount="10000" status="Approved" />
    );

    const eyeBtn = screen.queryAllByTestId("eye-img");
    expect(eyeBtn).toHaveLength(5);
    render(
      <img
        src=""
        data-testid="eye-img"
        onClick={() => handleClick("1", "6 Nov", "10000", "Approved")}
        alt="Eye Icon"
      />
    );
    eyeBtn.forEach((item) => {
      userEvent.click(item);
    });
    const modal = document.querySelectorAll(".transaction-details");
    const cross=document.getElementById('cross')!
    modal.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    fireEvent.click(cross)
  });
  test("Toggle modal", () => {
    const { result } = renderHook(() => TransactionTable());
    const handleClick = jest.fn();
    render(<TransactionTable />, {
      wrapper: Wrapper,
    });
    const eyeBtn = document.getElementById("eye")!;
    fireEvent.click(eyeBtn);
    // act(() => {
    //   fireEvent.click(eyeBtn);
    // });
  
  });
});
