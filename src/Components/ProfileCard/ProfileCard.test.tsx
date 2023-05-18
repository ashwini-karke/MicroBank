import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import ProfileCardField from "../../Common/ProfileCardField";
import ProfileCard from "./index";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

const localStorageMock = (function () {
  let store: any = {};

  return {
    getItem(key: any) {
      return store[key];
    },

    setItem(key: any, value: any) {
      store[key] = value;
    },

    clear() {
      store = {};
    },
  };
})();
const setLocalStorage = (id: any, data: any) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });
afterEach(cleanup);

describe.only("Profile Card", () => {
  test("Render Profile Card", () => {
    render(
      <ProfileCard
        username="Ashwini"
        email="ashwini@gmail.com"
        profileName="AK"
      />,
      {
        wrapper: Wrapper,
      }
    );
  });
  test("RenderProfileField", async () => {
    const mockFunction = jest.fn();
    const mockFunction1 = jest.fn();
    const mockFunction2 = jest.fn();
    userEvent.setup();
    render(
      <ProfileCard
        username="Ashwini"
        email="ashwini@gmail.com"
        profileName="AK"
      />,
      {
        wrapper: Wrapper,
      }
    );
    
    const editProfile = document.getElementById("edit-profile")!;
    fireEvent.click(editProfile);
    const settings = document.getElementById("settings")!;
    fireEvent.click(settings);
    const logout = document.getElementById("logout")!;
    fireEvent.click(logout);
  });
});
