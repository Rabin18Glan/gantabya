import MultiStepFormWrapper from "@/layouts/wrappers/MultiStepFormWrapper";
import { useFormContext } from "react-hook-form";

const ContactInfo = () => {
  const { register, formState: { errors }} = useFormContext();

  return (
    <MultiStepFormWrapper title="Your Contact Info">
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-lg font-semibold text-gray-700">Contact Number</label>
          <input
            id="phoneNumber"
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number"
              }
            })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-500">{`${errors.phoneNumber.message}`}</p>
          )}
        </div>


      </div>
    </MultiStepFormWrapper>
  );
};

export default ContactInfo;
