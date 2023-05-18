import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StarRating from "./index";
import ProfileCard from "../../Components/ProfileCard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../Store";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);

describe.only("Star Rating", () => {
  test("Render Star Rating", () => {
    const mockfuntion = jest.fn();
    render(<StarRating id="star" rating={1} />, { wrapper: Wrapper });
    const star=screen.getByTestId('star')
    fireEvent.click(star)
  });
});
