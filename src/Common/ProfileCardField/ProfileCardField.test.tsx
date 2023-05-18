import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";

import ProfileCardField from "./index";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

afterEach(cleanup);

describe.only("Profile Card Field", () => {
    const mockFunction=jest.fn()
  test("Render Profile Card Field", () => {
    render(<ProfileCardField fieldName="Setting" profileHandler={mockFunction} />, {
      wrapper: Wrapper,
    });
    const profilefield = document.getElementById("profile-field")!;
    fireEvent.click(profilefield)
  });
});
