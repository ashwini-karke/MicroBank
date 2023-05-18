import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditProfile from "./index";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as router from 'react-router'
const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);
 const navigate = jest.fn()

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })
afterEach(cleanup);

describe.only("Edit Profile", () => {
  test("Render Edit Profile", () => {
    render(<EditProfile />, { wrapper: Wrapper });

    const ele = screen.queryAllByTestId("input-wrapper");
    expect(ele).toHaveLength(5);

    const submitBtn = screen.getByRole("button", {
      name: "Update",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.click(submitBtn);
  });
  test("On Button Click", async () => {
    const { container } = render(<EditProfile />, { wrapper: Wrapper });
    const mockfunction = jest.fn();
    const ele = await screen.getAllByRole("textbox");
    const err = await document.getElementById("err-msg")!;
    const submitBtn = screen.getByRole("button", {
      name: "Update",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[0], { target: { value: "" } });
    fireEvent.change(ele[1], { target: { value: "" } });
    fireEvent.change(ele[2], { target: { value: "" } });
    fireEvent.change(ele[3], { target: { value: "" } });
    fireEvent.change(ele[4], { target: { value: "" } });
    fireEvent.change(ele[1], { target: { value: "" } });

    await fireEvent.click(submitBtn);
    expect((document.getElementById("err-msg") as HTMLInputElement).value).toBe(
      "*Required"
    );
  });
  test("Check for correct input", async() => {
    const mockfunction = jest.fn();
    render(<EditProfile />, { wrapper: Wrapper });
    const ele = screen.getAllByRole("textbox");
    const err = document.getElementById("err-msg");
    const submitBtn = screen.getByRole("button", {
      name: "Update",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[0], { target: { value: "ABC" } });
    fireEvent.change(ele[1], { target: { value: "ashwini@gmail.com" } });
    fireEvent.change(ele[2], { target: { value: "123" } });
    fireEvent.change(ele[3], { target: { value: "12345" } });
    fireEvent.change(ele[4], { target: { value: "12345" } });
    await fireEvent.click(submitBtn);
    // expect(mockfunction).toHaveBeenCalled();
  });
  test("Check for onfocus out input", () => {
    render(<EditProfile />, { wrapper: Wrapper });
    const ele = screen.getAllByRole("textbox");
    const err = document.getElementById("err-msg");
    const submitBtn = screen.getByRole("button", {
      name: "Update",
    });
    expect(submitBtn).toBeInTheDocument();
    fireEvent.change(ele[0], { target: { value: "ABC" } });
    fireEvent.change(ele[1], { target: { value: "ashwini@gmail.com" } });
    fireEvent.change(ele[2], { target: { value: "123" } });
    fireEvent.change(ele[3], { target: { value: "12345" } });
    fireEvent.change(ele[4], { target: { value: "12345" } });
    fireEvent.blur(ele[0]);
    fireEvent.blur(ele[1]);
    fireEvent.blur(ele[2]);
    fireEvent.blur(ele[3]);
    fireEvent.blur(ele[4]);
    expect((document.getElementById("err-msg") as HTMLInputElement).value).toBe(
      ""
    );
    fireEvent.change(ele[0], { target: { value: "" } });
    fireEvent.change(ele[1], { target: { value: "" } });
    fireEvent.change(ele[2], { target: { value: "" } });
    fireEvent.change(ele[3], { target: { value: "" } });
    fireEvent.change(ele[4], { target: { value: "" } });
    fireEvent.change(ele[1], { target: { value: "" } });
    fireEvent.blur(ele[0]);
    fireEvent.blur(ele[1]);
    fireEvent.blur(ele[2]);
    fireEvent.blur(ele[3]);
    fireEvent.blur(ele[4]);
  });
});
