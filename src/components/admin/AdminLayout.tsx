import "../sass/main.scss";
import Cards from "../landingUI/Cards";
import Navbar from "../navbar/Navbar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-[100%] bg-slate-300 flex">
        <AdminSidebar />
        <Cards />
      </div>
     
    </>
  );
};

export default AdminLayout;
