import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import AuthService from "../routs/AuthService";
import axios from 'axios';
import { Link } from "react-router-dom";

function PatientsAdmin() {

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

  const deleteHandler = (props) => {
    axios.delete(`http://localhost:3000/api/v1/product?id=${props}`)
      .then(res => {
        console.log('Deleted Successfully.');
      })
  }

  return (
    <div className="Login">
      <div id="headShell">
        <h1 id="title">Telesfor</h1>
      </div>
      <div className="exit"><a href="/">выход</a></div>
      <nav>
        <ul className="topmenu">
          <li><a href="lkadmin">Личный кабинет</a></li>
          <li><a href="doctors">Врачи</a></li>
          <li><a href="patientsadmin" className="active">Пациенты</a></li>
        </ul>
      </nav>

      {loading ? (
        <div id="avatarShell">
          <h1 id="textOnPage">Пациенты</h1>
          <ul className="patientslist">
            {
              patients.map(patient => <li key={patient.id}>{patient.lastName + " " + patient.firstName + " " + patient.patronymic}
                <Link to={'#'} onClick={() => { if (window.confirm('Вы подтверждаете удаление?')) { deleteHandler(patient.id) }; }}>
                  <b className="deleteIcon">&#128465;</b>
                </Link>
              </li>)
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

export default PatientsAdmin;
