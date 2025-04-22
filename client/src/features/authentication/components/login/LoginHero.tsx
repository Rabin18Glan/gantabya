import Lottie from "lottie-react"
import GlobalDelivery from '../../../../assets/lotties/Global delivery.json'
interface LoginHeroProps{
  className?:string,

}
function LoginHero({className}:LoginHeroProps) {
  return (
    <div className={`self-center ${className}`}>

      <Lottie animationData={GlobalDelivery} loop={true}/>

        <p>Welcome to Gantabya, your ultimate travel companion—log in to book tickets and explore the world with ease!</p>
      
    </div>
  )
}

export default LoginHero