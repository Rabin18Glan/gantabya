import withAuth from "@/components/hoc/withAuth";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { PageWrapper } from "@/layouts";
import { postApiService } from "@/services/postApiService";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import { IResponseUserData, IUserData } from "@/types/auth";
import { Progress } from "@radix-ui/react-progress";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";




interface Data{
  verificationToken:string|null
}
function VerifyEmail() {
  const {toast} = useToast();
  const [isSuccessful,setIsSuccessful] = useState(false);
  const [searchParams] = useSearchParams();
  const verificationToken = searchParams.get("verification-token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleVerification = async()=>{
    const {success,token,userData}:IResponseUserData =await postApiService<Data,IResponseUserData>({verificationToken},'http://localhost:3000/api/v1/user/verify-email');

    if(success)
    {
setIsSuccessful(success);
dispatch(login({token,userData}));
toast({
  variant: "default",
  title: "Successful",
  description: "Email Verification successful",
  action: <ToastAction altText="Okay">Okay</ToastAction>,
});
navigate('/travel');
    }
  }
  return (
<PageWrapper >
<div className="h-screen flex flex-col gap-5 justify-center items-center">
Click on this button to verify!
{!isSuccessful&&<Button onClick={handleVerification}>Verify Email</Button>}
{isSuccessful&&<div>
  <h1 className="text-xl">Email Verification Successful!</h1>
  <Progress /></div>
 
  }
</div>
</PageWrapper>
  )
}


const LoginCheckedVerifyEmail = withAuth(VerifyEmail)
export default LoginCheckedVerifyEmail