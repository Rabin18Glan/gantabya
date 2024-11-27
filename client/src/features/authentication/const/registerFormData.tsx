import { ReactElement } from "react";
import RoleSelection from "../components/register/RoleSelection";
import ContactInfo from "../components/register/ContactInfo";
import CreateAccount from "../components/register/CreateAccount";
import { RegisterFormFields } from "@/schemas/registerSchema";
import MultiStepFormWrapper from "@/layouts/wrappers/MultiStepFormWrapper";

export interface IRegisterForm {
  title:string,
    form: ReactElement,
    fields?: ("role" | "phoneNumber" | "name" | "email" | "password")[]
  }
  
 export const REGISTER_FORM_STEPS: IRegisterForm[] = [
    {
      title:'Role',
      form: <RoleSelection key="roleSelection" />,
      fields: ["role"],
    },
    {
      title:'Contact Info',
      form: <ContactInfo key="contactInfo" />,
      fields: ["phoneNumber"],
    },
    {
      title:'Acount Creation',
      form: <CreateAccount key="createAccount" />,
      fields: ["email", "password", "name"]
  
    },
    {title:'Email Verification',
     form:<MultiStepFormWrapper ><h1 className="text-xl">Check you email and verify it!</h1></MultiStepFormWrapper>,

    }
  ];


 export const INITIAL_DATA: RegisterFormFields = {
    role: 'passenger',
    phoneNumber: "",
    name: "",
    email: "",
    password: "",
  
  }