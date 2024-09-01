import { Outlet } from "react-router-dom";
import Header from "./components/Header";


export default function Layout() {



  return (
    <div className="bg-[#0a192f] overflow-x-hidden">
      <Header />
      <Outlet/>
    </div>
  );
}
