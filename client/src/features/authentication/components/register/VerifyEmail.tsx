import { Button } from "@/components/ui/button";
import { postApiService } from "@/services/postApiService";
import { useNavigate, useSearchParams } from "react-router-dom";


interface IResponseData{
  success:boolean
}

interface Data{
  token:string|null
}
function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleVerification = async()=>{
    const response:IResponseData =await postApiService<Data,IResponseData>({token},'http://localhost:3000/api/v1/user/verify-email');

    if(response.success )
    {
      navigate('/');
      
    }
  }
  return (
    <div className="flex justify-center items-center">

      <Button onClick={handleVerification}>Verify Email</Button>
    </div>
  )
}

export default VerifyEmail