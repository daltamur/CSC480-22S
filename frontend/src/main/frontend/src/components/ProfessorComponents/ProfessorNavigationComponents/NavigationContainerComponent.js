import uuid from "react-uuid";
import './_ProfessorNavigationComponents.css'
import useCollapse from "react-collapsed";
import HomeTileComponent from "./HomeTileComponent";
import CoursesTileComponent from "./CoursesTileComponent";
import {useRef, useState} from "react";
import LogoutButton from "../../GlobalComponents/LogoutButton";
import BulkDownloadTileComponent from "./BulkDownloadTileComponent";

const NavigationContainerComponent = () => {

    const [trigger, setTrigger] = useState(0)

    const deactivateTiles = () => {
        setTrigger((trigger) => trigger + 1)
    }

    return (
        <div className="parent-container">
            <div className="navigation-container">
                <HomeTileComponent trigger={trigger} deactivateTiles={deactivateTiles}/>
                <CoursesTileComponent trigger={trigger} deactivateTiles={deactivateTiles}/>
                <BulkDownloadTileComponent trigger={trigger} deactivateTiles={deactivateTiles}/>
            </div>
            <LogoutButton/>
        </div>
    );
};

export default NavigationContainerComponent;