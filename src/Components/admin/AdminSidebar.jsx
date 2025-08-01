import {
  LayoutDashboardIcon,
  ListCollapseIcon,
  ListIcon,
  PlusSquareIcon,
} from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets"; 

const AdminSidebar = () => {
  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: assets.profile,
  };

  const location = useLocation();

  const adminNavlinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
    { name: "Add Events", path: "/admin/add-shows", icon: PlusSquareIcon },
    { name: "List Events", path: "/admin/list-shows", icon: ListIcon },
    {
      name: "List Bookings",
      path: "/admin/list-bookings",
      icon: ListCollapseIcon,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm">
      <img
        className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
        src={user.imageUrl}
        alt="sidebar"
      />
      <p className="mt-2 text-base max-md:hidden">
        {user.firstName} {user.lastName}
      </p>
      <div className="w-full">
        {adminNavlinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <NavLink
              key={index}
              to={link.path} 
              className={`relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 text-gray-400 ${
                isActive ? "bg-primary/15 text-primary" : ""
              }`}
            >
              <link.icon className="w-5 h-5" />
              <p className="max-md:hidden">{link.name}</p>
              {isActive && (
                <span className="w-1.5 h-10 rounded-l-md bg-primary absolute right-0" />
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
