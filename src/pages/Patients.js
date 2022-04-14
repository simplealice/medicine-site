import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import axios from 'axios';

function Patients() {

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPatients = () => {
    try {
      axios.get('https://telesfor-noauth.herokuapp.com/api/users/patients')
      .then((response) => {
      console.log(response.data);
      setPatients(response.data);
    });
    setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="Login">
      <div id="headShell">
            <h1 id="title">Telesfor</h1>
        </div>
        <nav>
            <ul className="topmenu">
              <li><a href="lkdoctor">Личный кабинет</a></li>
              <li><a href="patients" className="active">Мои пациенты</a></li>
              <li><a href="tables">Опросник</a></li>
            </ul>
        </nav>

        { loading ? (
          <div id="avatarShell">
            <h2 id="textOnPage">Пациенты</h2>
            <ul className="patientslist">
            { 
              patients.map(patient => <li key={patient.id}><a href="patient">{patient.firstName + " " + patient.lastName + " " + patient.patronymic}</a></li>)
            }
            </ul>
          </div>
        ) : (
          <div className="preloader">
            <img className="heart" src="https://res.cloudinary.com/dejzo3x6l/image/upload/v1468422552/heart_qwl5in.svg" alt="heart" />
          </div>
        )}
    </div>
  );
}

export default Patients;