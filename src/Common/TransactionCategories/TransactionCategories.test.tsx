import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCategories from "./index";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

afterEach(cleanup);

describe.only("ServiceComponent", () => {
  test("Render ServiceComponent", () => {
    const mockFuntion = jest.fn();
    render(
      <TransactionCategories
        categoryName="Aavailable services"
        categorydetails="Approved"
      />,
      {
        wrapper: Wrapper,
      }
    );
    render(
        <TransactionCategories
          categoryName="Aavailable services"
          categorydetails="Rejected"
        />,
        {
          wrapper: Wrapper,
        }
      );
  });
});
