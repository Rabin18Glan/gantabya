import { SubmitHandler } from "react-hook-form";
import { LoginFormFields } from "@/schemas/loginSchema";
import axios from "axios";
import { CORS_HEADERS, LOGIN_API_URL } from "../../../const/apiRoutes";

export const handleLoginSubmitData: SubmitHandler<LoginFormFields> = async (data) => {
    const response = await axios.post(LOGIN_API_URL, data,
        {
            headers: {
                ...CORS_HEADERS,

            }
        }
    );

    return response.data;
}