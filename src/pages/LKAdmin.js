import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import axios from 'axios';

function LKAdmin() {


  const [doctors, setDoctors] = useState([]);

  const getDoctors = () => {
    axios.get('https://telesfor.herokuapp.com/api/users/doctors')
    .then((response) => {
      console.log(response.data);
      setDoctors(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="Login">
      <div id="headShell">
            <h1 id="title">Telesfor</h1>
        </div>
        <nav>
            <ul className="topmenu">
              <li><a href="lkadmin" className="active">Личный кабинет</a></li>
              <li><a href="doctors">Врачи</a></li>
              <li><a href="patientsadmin">Пациенты</a></li>
            </ul>
        </nav>
        <div id="avatarShell">
            <h2 id="textOnPage">Фамилия: Мишуткина</h2>
            <h2 id="textOnPage">Имя: Владислава</h2>
            <h2 id="textOnPage">Отчество: Игоревна</h2>
            <h2 id="textOnPage">Номер телефона: +79354457825</h2>
            <h2 id="textOnPage">Образование: Российский химико-технологический университет</h2>
            <h2 id="textOnPage">Опыт работы: 5 лет</h2>
            <a href="loginadmin">Выход</a>
        </div>
    </div>
  );
}

export default LKAdmin;
