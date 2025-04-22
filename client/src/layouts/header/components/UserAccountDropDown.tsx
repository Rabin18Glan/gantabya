import MyAvatar from '@/components/common/MyAvatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function UserAccountDropDown() {
    const dispatch = useAppDispatch();
    const{status,userData}= useAppSelector(state=>state.auth);

  return (
   
<>

{(status&&userData?.name)&& <DropdownMenu >
    <DropdownMenuTrigger><MyAvatar src='' className='' name={userData.name}/></DropdownMenuTrigger>
    <DropdownMenuContent className='bg-primary-background'>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>dispatch(logout())} className='text-destructive'>Log out <FaArrowRight/></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

         
}
            {
              !status&&<Link className='bg-primary'  to={'/login'}></Link>
            }</>
  )
}

export default UserAccountDropDown