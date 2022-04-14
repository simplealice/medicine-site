import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import axios from 'axios';
import { Link } from "react-router-dom";

function PatientsAdmin() {

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDoctors = () => {
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
    getDoctors();
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
        <nav>
            <ul className="topmenu">
              <li><a href="lkadmin">Личный кабинет</a></li>
              <li><a href="doctors">Врачи</a></li>
              <li><a href="patientsadmin" className="active">Пациенты</a></li>
            </ul>
        </nav>

        { loading ? (
          <div id="avatarShell">
            <h1 id="textOnPage">Пациенты</h1>
            <ul className="patientslist">
            { 
              patients.map(patient => <li key={patient.id}>{patient.firstName + " " + patient.lastName + " " + patient.patronymic}
              <Link to={'#'} onClick={() => {if(window.confirm('Вы подтверждаете удаление?')){deleteHandler(patient.id)};}}> 
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
