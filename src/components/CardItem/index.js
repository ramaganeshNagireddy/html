// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails
  return (
    <li className={card ${className}}>
      <h1 className="head">{title}</h1>
      <p className="para">{description}</p>
      <div className="cardImg">
        <img src={imgUrl} className="img" alt="image" />
      </div>
    </li>
  )
}
export default CardItem
