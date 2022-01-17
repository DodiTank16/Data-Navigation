import React from "react";
import { useLocation } from "react-router-dom";

const MyHOC = (NewComponent) => {
    const Home = () => {
        const location = useLocation();
        console.log("location",location);

        return <NewComponent location={location} />;
    }
    return Home;
}
export default MyHOC;