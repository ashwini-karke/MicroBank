import "./styles.css";


type Props = {
  children: JSX.Element[] | JSX.Element
  category:string;
}
export default function ServicesCard(props:Props) {

  return (
    <div className='services-card'>
      <div className="service-category-title">
        {props.category}
      </div>
      <div className="service-component-wrapper">
        {props.children}
      </div>
    </div>
  )
}
