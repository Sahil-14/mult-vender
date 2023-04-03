import React from "react";
import { withRouter } from "react-router-dom";
import LoadingBox from "./LoadingBox";

const AdminStyles = React.lazy(() => import("./AdminStyleImporter"));
const UserStyles = React.lazy(() => import("./UserStyleImporter"));
const StyleSelector = ({ location, children }) => {
  const currentLocation = location.pathname;
  const adminPaths = [
    "/dashboard",
    "/productlist",
    "/orderlist",
    "/userlist",
    "/support",
  ];
  return(
    <>
        <React.Suspense fallback={<LoadingBox></LoadingBox>}>
            {adminPaths.includes(currentLocation) ? <AdminStyles /> : <UserStyles/>}
        </React.Suspense>
        {children}
    </>
  ) ;
};

export default withRouter(StyleSelector);
