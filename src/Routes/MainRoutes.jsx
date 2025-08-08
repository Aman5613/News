import { Route, Routes } from "react-router-dom";
import ScienceFP from "../Full-Page/ScienceFP";
import PoliticsFP from "../Full-Page/PoliticsFP";
import IndiaFP from "../Full-Page/IndiaFP";
import SportsFP from "../Full-Page/SportsFP";
import WorldFP from "../Full-Page/WorldFP";
import HealthFP from "../Full-Page/HealthFP";
import BusinessFP from "../Full-Page/BusinessFP";
import Home from "../Components/Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<ScienceFP />} />
        <Route path="/india" element={<IndiaFP />} />
        <Route path="/politics" element={<PoliticsFP />} />
        <Route path="/sports" element={<SportsFP />} />
        <Route path="/world" element={<WorldFP />} />
        <Route path="/health" element={<HealthFP />} />
        <Route path="/business" element={<BusinessFP />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
