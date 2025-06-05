import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";

const RootLayout = () => {
  return (
    <div className="max-container">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <CommonFooter />
    </div>
  );
};

export default RootLayout;
