import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import { PlansProvider } from "./context/PlansContext";
import { AddOnsProvider } from "./context/AddOnsContext";

const App = () => {
  return (
    <PlansProvider>
      <AddOnsProvider>
        <BrowserRouter>
          <div className="bg-white w-[60rem] h-[35rem] rounded-xl shadow-xl p-4 flex justify-between">
            <Sidebar />
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/selectplan" element={<SelectPlan />} />
              <Route path="/addons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AddOnsProvider>
    </PlansProvider>
  );
};

export default App;
