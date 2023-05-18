import ServicesCard from "../../Common/ServicesCard";
import SummaryCard from "../../Components/SummaryCard";
import ServicesComponent from "../../Common/ServicesComponent";
import { getStarData } from "../../MOCKAPI/ApiCalls";
import { useEffect, useState } from "react";
import "./styles.css";

interface ServiceData {
  serviceCategory?: string;
  img: string;
  serviceName: string;
  displayStarRating?: boolean;
  key?: number;
  rating?: number;
  image?:string;
}


const availableServices: ServiceData[] = [
  {
    serviceCategory: "Available Services",
    img: "wallet",
    serviceName: "Wallet",
  },
  {
    serviceCategory: "Available Services",
    img: "invest",
    serviceName: "Investments",
  },
  {
    serviceCategory: "Available Services",
    img: "tax",
    serviceName: "Tax Payment",
  },
  {
    serviceCategory: "Available Services",
    img: "Payment",
    serviceName: "Loans",
  },
];
let starData: ServiceData[] = [];
const currentServices: ServiceData[] = [];

export default function DashboardSummary() {
  const [starArray, setStarArray] = useState(currentServices);
  const [isDataSet, setData] = useState(false);

  async function displayRating() {
    starData = await getStarData();
    
    setStarArray(starData)
    setData(true);
  }

  useEffect(() => {
    async function displayRating() {
      starData = await getStarData();
      setStarArray(starData)
      setData(true);
    }
    displayRating();
  },[]);

  return (
    <div>
      <div className="summary-card-wrapper">
        <SummaryCard />
      </div>
      <div className="services-title">
        Services <span>Micro bank services for you</span>
      </div>

      {isDataSet && (
        <ServicesCard category={"Current Services"}>
          {starArray.map(
            (data: ServiceData, index: number): JSX.Element => (
              <ServicesComponent
                key={index}
                img={data.image? data.image: 'Current'}
                serviceName={data.serviceName}
                displayStarRating={true}
                id={data.serviceName + "-" + (index + 1)}
                rating={data.rating ? data.rating : 0}
              />
            )
          )}
        </ServicesCard>
      )}
      <ServicesCard category={"Available Services"}>
        {availableServices.map(
          (data: ServiceData, index: number): JSX.Element => (
            <ServicesComponent
              key={index}
              img={data.img}
              serviceName={data.serviceName}
              displayStarRating={false}
              id={data.serviceName + index}
              rating={0}
            />
          )
        )}
      </ServicesCard>
    </div>
  );
}
