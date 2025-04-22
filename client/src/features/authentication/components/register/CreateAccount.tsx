import { InputField } from "@/components/common";
import MultiStepFormWrapper from "@/layouts/wrappers/MultiStepFormWrapper";
import { RegisterFormFields } from "@/schemas/registerSchema";
import { useFormContext } from "react-hook-form";

const CreateAccount = () => {
  const { register, formState: { errors } } = useFormContext<RegisterFormFields>();

  return (
    <MultiStepFormWrapper title="Create an Account">
      <div className="space-y-6">
      <InputField
          label="Enter Name"
            id="name"
            type="text"
            register={register("name", {
              required: "Name is required"
              
            })}
            error={errors.name?.message}
            placeholder="Name"
          />
         <InputField
          label="Enter Email"
            id="email"
            type="email"
            register={register("email", {
              required: "Email is required",
            })}
            error={errors.email?.message}
            placeholder="Email"
          />
        <InputField
          label="Enter Password"
            id="password"
            type="password"
            register={register("password", {
              required: "Phone number is required",
             
            })}
            error={errors.password?.message}
            placeholder="Password"
          />

        
      </div>
    </MultiStepFormWrapper>
  );
};

export default CreateAccount;
