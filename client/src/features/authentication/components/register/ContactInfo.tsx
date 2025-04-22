import { InputField } from "@/components/common";
import MultiStepFormWrapper from "@/layouts/wrappers/MultiStepFormWrapper";
import { RegisterFormFields } from "@/schemas/registerSchema";
import { useFormContext } from "react-hook-form";

const ContactInfo = () => {
  const { register, formState: { errors }} = useFormContext<RegisterFormFields>();

  return (
    <MultiStepFormWrapper title="Your Contact Info">
      <div className="space-y-6">
       
         
          <InputField
          label="Enter Phone Number"
            id="phoneNumber"
            type="tel"
            register={register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number"
              }
            })}
            error={errors.phoneNumber?.message}
            placeholder="Phone"
          />
          


      </div>
    </MultiStepFormWrapper>
  );
};

export default ContactInfo;
