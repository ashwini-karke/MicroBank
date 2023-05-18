import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DashboardSummary from "./index";
import ServicesCard from "../../Common/ServicesCard";
import SummaryCard from "../../Components/SummaryCard";
import ServicesComponent from "../../Common/ServicesComponent";
import Modal from "../../Common/Modal";
import store from "../../Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }: any) => (
  <BrowserRouter>
    <Provider store={store}>{children}</Provider>
  </BrowserRouter>
);
interface ServiceData {
  serviceCategory?: string;
  img: string;
  serviceName: string;
  displayStarRating?: boolean;
  key?: number;
  rating?: number;
  image?: string;
}

const availableServices: ServiceData[] = [
  {
    serviceCategory: "Available Services",
    img: "wallet",
    serviceName: "Wallet",
    rating: 1,
  },
  {
    serviceCategory: "Available Services",
    img: "invest",
    serviceName: "Investments",
    rating: 1,
  },
  {
    serviceCategory: "Available Services",
    img: "tax",
    serviceName: "Tax Payment",
    rating: 1,
  },
  {
    serviceCategory: "Available Services",
    img: "Payment",
    serviceName: "Loans",
    rating: 1,
  },
];

afterEach(cleanup);

describe.only("DashboardSummary", () => {
  test("Render DashboardSummary", () => {
    const mockFuntion = jest.fn();
    render(<DashboardSummary />, {
      wrapper: Wrapper,
    });
    render(<SummaryCard />, {
      wrapper: Wrapper,
    });
    render(<ServicesCard category="banking">{<p></p>}</ServicesCard>, {
      wrapper: Wrapper,
    });
    const { container } = render(
      <ServicesComponent
        key={1}
        img="bank"
        serviceName="current"
        id="bank"
        rating={1}
      />,
      {
        wrapper: Wrapper,
      }
    );
    expect(container).toBeInTheDocument();
  });
  test("Render DashboardSummary with different props", () => {
    render(<DashboardSummary />, {
      wrapper: Wrapper,
    });
    render(<ServicesCard category="banking">{
      
    }</ServicesCard>, {
      wrapper: Wrapper,
    });
    // for (let i = 0; i < 3; i++) 
    availableServices.forEach((item,i)=>{
      render(
        <ServicesComponent
          key={i}
          img={"Current"}
          serviceName={"current services"}
          displayStarRating={true}
          id={"current"+(i + 1)}
          rating={1}
        />,
        {
          wrapper: Wrapper,
        }
      );
    })
  });
});
