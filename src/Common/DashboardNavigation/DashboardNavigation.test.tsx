import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DashboardNavigation from "./index";
import ProfileCard from "../../Components/ProfileCard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../Store";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

describe.only("Dashboard Navigation", () => {
  test("Render Dashboard", () => {
    render(<DashboardNavigation />, { wrapper: Wrapper });
  });

  test("Render logo", async () => {
    render(<DashboardNavigation />, { wrapper: Wrapper });
    const handleClickHome = jest.fn();
    render(
      <p className="logo" onClick={handleClickHome}>
        Micro <span>Bank</span>
      </p>
    );
    const logo: HTMLElement = screen.getByTestId("logo");
    fireEvent.click(logo);
    expect(logo.innerHTML).toBe("Micro <span>Bank</span>");
  });

  test("Show menu", () => {
    userEvent.setup();
    const handleClick = jest.fn();
    render(<DashboardNavigation />, { wrapper: Wrapper });
    const menu = document.getElementById("menu")!
    fireEvent.click(menu);
    expect(
      render(
        <ProfileCard
          username="ashwini"
          email="ashwini@gmail.com"
          profileName="A"
        />,
        { wrapper: Wrapper }
      )
    ).toBeTruthy();
  });
});
