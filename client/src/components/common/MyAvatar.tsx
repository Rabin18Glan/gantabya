import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
interface IMyAvatarProps{
    className?:string;
    name:string;
    src:string
    



}
function MyAvatar({className,name,src}:IMyAvatarProps) {
  return (
    <Avatar className={`border border-accent shadow-lg shadow-primary hover:shadow-accent bg-background ${className}`}>
  <AvatarImage src={src}/>
    
  <AvatarFallback className="font-bold text-xl">{name[0]}</AvatarFallback>
</Avatar>
  )
}

export default MyAvatar