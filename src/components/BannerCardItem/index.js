import './index.css'

// Write your code here.
const BannerCard = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button type="button">Show more</button>
    </li>
  )
}

export default BannerCard
