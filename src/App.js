import React from "react";
import './App.css';
import Login from "./pages/Login";
import LoginAdmin from "./pages/LoginAdmin";
import LKDoctor from "./pages/LKDoctor";
import Patients from "./pages/Patients";
import Patient from "./pages/Patient";
import Tables from "./pages/Tables";
import LKAdmin from "./pages/LKAdmin";
import Doctors from "./pages/Doctors";
import PatientsAdmin from "./pages/PatientsAdmin";
import PatientsResults from "./pages/PatientResults"
import { Routes, Route } from "react-router-dom";
import Layout from "./routs/Layout";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public root*/}
        <Route path="/" element={<Login />} />
        <Route path="loginadmin" element={<LoginAdmin />} />
        {/*doctor's roots*/}
        <Route path="lkdoctor" element={<LKDoctor />} />
        <Route path="patients" element={<Patients />} />
        <Route path="patient" element={<Patient />} />
        <Route path="tables" element={<Tables />} />
        <Route path="patientres" element={<PatientsResults />} />
        {/*admin's roots*/}
        <Route path="lkadmin" element={<LKAdmin />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patientsadmin" element={<PatientsAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
