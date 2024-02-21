import "../sass/main.scss";
import Cards from "./Cards";
import Navbar from "../navbar/Navbar";
import AdminSidebar from "./AdminSidebar";
import AdminContent from "./AdminContent";

const AdminLayout = () => {
  return (
    <>
      
      <div className="w-[100%] bg-slate-300 flex">
        <AdminSidebar />
        <AdminContent />
      </div>
     
    </>
  );
};

export default AdminLayout;
