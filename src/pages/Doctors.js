import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import AuthService from "../routs/AuthService";
import axios from 'axios';
import { Link } from "react-router-dom";

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentUser = AuthService.getCurrentUser();

  const doc = 'Bearer ' + currentUser.accessToken;

  const getDoctors = () => {
    try {
      var config = {
        method: 'get',
        url: 'https://telesfor-noauth.herokuapp.com/api/users/doctors',
        headers: {
          'Authorization': doc,
          'Content-Type': 'application/json'
        }
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          setDoctors(response.data);
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
      <div className="exit"><a href="/">выход</a></div>
      <nav>
        <ul className="topmenu">
          <li><a href="lkadmin">Личный кабинет</a></li>
          <li><a href="doctors" className="active">Врачи</a></li>
          <li><a href="patientsadmin">Пациенты</a></li>
        </ul>
      </nav>

      {loading ? (
        <div id="avatarShell">
          <h1 id="textOnPage">Врачи</h1>
          <ul className="doctorslist">
            {
              doctors.map(doctor => <li key={doctor.id}>{doctor.lastName + " " + doctor.firstName + " " + doctor.patronymic}
                <Link to={'#'} onClick={() => { if (window.confirm('Вы подтверждаете удаление?')) { deleteHandler(doctor.id) }; }}>
                  <b className="deleteIcon">&#128465;</b>
                </Link>
              </li>)
            }
          </ul>
          {/* <div className="preloader">
			    <img className="heart" src="https://res.cloudinary.com/dejzo3x6l/image/upload/v1468422552/heart_qwl5in.svg" alt="heart" />
		    </div> */}
        </div>
      ) : (
        <div className="preloader">
          <img className="heart" src="https://res.cloudinary.com/dejzo3x6l/image/upload/v1468422552/heart_qwl5in.svg" alt="heart" />
        </div>
      )}
    </div>
  );
}

export default Doctors;
