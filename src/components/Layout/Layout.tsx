import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import StaticHeader from "../StaticHeader/StaticHeader";

export default function Layout() {
  return (
    <>
      <StaticHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
