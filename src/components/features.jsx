import FeaturesInfo from "./featuresInfo.jsx";
import CompanyInfo from "./companyInfo.jsx";
import { useState } from "react";

function Features() {

    const [featureDropDown, setFeatureDropDown] = useState(false);
    const [companyDropDown, setCompanyDropDown] = useState(false);

    function handleFeatureDrop() {
        setFeatureDropDown(!featureDropDown)
    }

    function handleCompanyDrop() {
        setCompanyDropDown(!companyDropDown)
    }

    return(
        <>
            <ul>
                <li className="features-drop" onClick={handleFeatureDrop}>Features { featureDropDown ? <img src="/images/icon-arrow-down.svg" alt="drop down menu" /> : <img src="/images/icon-arrow-up.svg" alt="drop down menu" />}</li>
                {featureDropDown && <FeaturesInfo />}
                <li className="company-drop" onClick={handleCompanyDrop}>Company  { companyDropDown ? <img src="/images/icon-arrow-down.svg" alt="drop down menu" /> : <img src="/images/icon-arrow-up.svg" alt="drop down menu" />}</li>
                {companyDropDown && <CompanyInfo />}
                <li>Careers</li>
                <li>About</li>
            </ul>            
        </>
        
    )
}

export default Features;