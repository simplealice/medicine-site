import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import AuthService from "../routs/AuthService";
import axios from 'axios';

var patientId;

function Patients() {

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentUser = AuthService.getCurrentUser();

  const doc = 'Bearer ' + currentUser.accessToken;

  const getPatients = () => {
    try {
      var config = {
        method: 'get',
        url: 'https://telesfor-noauth.herokuapp.com/api/users/patients',
        headers: {
          'Authorization': doc,
          'Content-Type': 'application/json'
        }
      };

      axios(config)
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

  // const showName = (patient) => {
  //   patientId = patient.id;
  //   console.log(patientId);
  //   AuthService.getPatient(patient);
  // }

  return (
    <div className="Login">
      <div id="headShell">
        <h1 id="title">Telesfor</h1>
      </div>
      <div className="exit"><a href="/">выход</a></div>
      <nav>
        <ul className="topmenu">
          <li><a href="lkdoctor">Личный кабинет</a></li>
          <li><a href="patients" className="active">Мои пациенты</a></li>
          <li><a href="tables">Опросник</a></li>
        </ul>
      </nav>

      {loading ? (
        <div id="avatarShell">
          <h2 id="textOnPage">Пациенты</h2>
          <ul className="patientslist">
            {
              patients.map(patient => <li key={patient.id}><a href="patient">{patient.lastName + " " + patient.firstName + " " + patient.patronymic}</a></li>)
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