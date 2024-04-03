import { Route, RouterProvider, Routes } from "react-router-dom";
import Describes from "./components/Describes";
import Stepper from "./components/Stepper";
import Interested from "./components/Interested";
import RightPlace from "./components/RightPlace";
import MathLvl from "./components/MathLvl";
import Review from "./components/Review";
import LastPage from "./components/LastPage";
import Success from "./components/Success";

const App = () => {
  return (
    <div className=" flex flex-col  w-11/12 h-full items-center justify-center mt-10  ">
      <Stepper />

       
        <Routes>
          <Route path="/" element={
       <Describes/>
        } />
          <Route path="/interested" element={
        <Interested/>
        } />
          <Route path="/rightplace" element={
        <RightPlace/>
        } />
          <Route path="/mathlvl" element={
      <MathLvl/>
        } />
          <Route path="/review" element={
      <Review/>
        } />
          <Route path="/lastpage" element={
      <LastPage/>
        } />
          <Route path="/success" element={
      <Success/>
        } />
        </Routes>
      
    </div>
  );
};

export default App;
