import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div >
      <Navbar />
      <div className="conatiner mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
