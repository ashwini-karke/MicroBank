import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import { useEffect } from "react";
import Dashboard from "./index";
import NavigationBar from "../../Components/NavigationBar";
import TransactionTable from "../../Components/TransactionTable";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

afterEach(cleanup);

describe.only("Dashboard", () => {
  const handleDashboard = jest.fn();
  test("Render Dashboard", () => {
    render(<Dashboard />, { wrapper: Wrapper });
  });

  test("Render Transaction Table", () => {
    render(<Dashboard />, { wrapper: Wrapper });
    const { container } = render(<TransactionTable />);
    fireEvent.click(container);
    expect(container).toBeInTheDocument();
  });
  test("Render Navigation Bar ", () => {
    render(<Dashboard />, { wrapper: Wrapper });
    const handleDashboard = jest.fn();
    render(<NavigationBar onClick={handleDashboard} />);
    const navigationBtn = document.querySelector("button")!;
    fireEvent.click(navigationBtn);
  });
});
