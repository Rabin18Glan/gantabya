import MultiStepFormWrapper from "@/layouts/wrappers/MultiStepFormWrapper";
import { useFormContext } from "react-hook-form";

const CreateAccount = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <MultiStepFormWrapper title="Create an Account">
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
              {errors.name && <p className="text-sm text-red-500">{`${errors.name.message}`}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-sm text-red-500">{`${errors.email.message}`}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-sm text-red-500">{`${errors.password.message}`}</p>}
        </div>
      </div>
    </MultiStepFormWrapper>
  );
};

export default CreateAccount;
