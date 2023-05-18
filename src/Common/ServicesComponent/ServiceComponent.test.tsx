
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ServiceComponent from "./index";
import Modal from "../Modal";
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
      <ServiceComponent
        img="image"
        serviceName="payment"
        id="payment"
        displayStarRating={true}
        rating={2}
      />,
      {
        wrapper: Wrapper,
      }
    );
    render(
      <ServiceComponent
        img="image"
        serviceName="payment"
        id="payment"
        displayStarRating={false}
        rating={2}
      />,
      {
        wrapper: Wrapper,
      }
    );
  });
});
