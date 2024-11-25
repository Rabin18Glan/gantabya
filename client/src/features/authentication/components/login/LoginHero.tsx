
interface LoginHeroProps{
  className?:string,

}
function LoginHero({className}:LoginHeroProps) {
  return (
    <div className={` ${className}`}>LoginHero</div>
  )
}

export default LoginHero