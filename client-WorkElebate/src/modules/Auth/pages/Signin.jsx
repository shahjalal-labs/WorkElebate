import { Link } from "react-router";
import SigninForm from "../components/SigninForm";
import LottieAnimation from "../../../animation/LottieAnimation";
import { authLottie } from "../../../animation";

const Signin = () => {
  return (
    <div className="min-h-[80vh] mt-10 bg-gray-100 py-10 rounded-lg shadow">
      <div className="max-lg:max-w-[490px] mx-auto">
        <h2 className="text-center text-xl sm:text-3xl font-semibold font-kaushan">
          WorkElevate connects talent with opportunity.
        </h2>
        <p className="text-center text-gray-500 ext-sm mb-10 mt-2">
          Log in to access thousands of jobs, connect with employers, and take
          control of your career.
        </p>
      </div>
      <div className="flex  flex-col-reverse lg:flex-row items-center justify-around *:flex-1 gap-7  mt-5">
        <div className="lg:max-w-[480px]  order bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98">
          <LottieAnimation anime={authLottie} />
        </div>
        <div className="max-w-[480px]">
          <SigninForm />
        </div>
      </div>
    </div>
  );
};

export default Signin;
