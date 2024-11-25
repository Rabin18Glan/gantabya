import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { CORS_HEADERS, REGISTER_API_URL } from "../../../const/apiRoutes";
import { RegisterFormFields } from "../../../schemas/registerSchema";
import { json } from "stream/consumers";



export const handleRegisterSubmitData = async (data:RegisterFormFields) => {
    console.log(JSON.stringify(data));
    const response = await axios.post(REGISTER_API_URL, data,
        {
            headers: {
                ...CORS_HEADERS,
          }
        }
    );

    return response.data;
}