import './styles.css'
interface CardProps{
  fieldName:string,
  profileHandler:(e:React.MouseEvent<HTMLElement>)=>void
}
export default function ProfileCardField(props:CardProps) {
  return (
  <p className='profileField' id='profile-field' onClick={props.profileHandler}>{props.fieldName}</p>
  )
}
