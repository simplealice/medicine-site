import React from "react";
import '../styles/doctorStyle.css'
import '../styles/patientStyle.css'
import AuthService from "../routs/AuthService";
import Patients from "./Patients";

function Patient() {

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
      <div id="avatarShell">
        <h2 id="textOnPage">Пациент</h2>
        <div className="obshA">
          <div className="photoShell">
            <div><img className="avatar" src="https://www.photogorky.ru/photos/0d51916319cc8ee34e478d487741c274.jpg"></img></div>
          </div>
          <div className="info" id="info">
            <div className="lastNameA">
              <p className="lastNameTitleA" id="lastNameTitle">Фамилия: Гзюнова</p>
            </div>
            <div className="firstNameA">
              <p className="firstNameTitleA" id="firstNameTitle">Имя: Инна</p>
            </div>
            <div className="patronymicA">
              <p className="patronymicTitleA" id="patronymicTitle">Отчество: Алексеевна</p>
            </div>
            <div className="educationA">
              <p className="educationTitleA" id="educationTitle">Возраст: 80 лет</p>
            </div>
            <div className="workExperienceA">
              <p className="workExperienceTitleA" id="workExperienceTitle">Номер телефона: +79455557963</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;