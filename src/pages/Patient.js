import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/lkStyle.css'

function Patient() {
  return (
    <div className="Login">
      <div id="headShell">
        <h1 id="title">Telesfor</h1>
      </div>
      <div className="exit"><a href="/">Выход</a></div>
      <nav>
        <ul className="topmenu">
          <li><a href="lkdoctor">Личный кабинет</a></li>
          <li><a href="patients" className="active">Мои пациенты</a></li>
          <li><a href="tables">Опросник</a></li>
        </ul>
      </nav>
      <div id="avatarShell">
        <h2 id="textOnPage">Пациент</h2>
        <div className="obsh">
          <div className="photoShell">
            <div><img className="avatar" src="https://www.photogorky.ru/photos/0d51916319cc8ee34e478d487741c274.jpg"></img></div>
          </div>
          <div className="info" id="info">
            <div className="firstNameShell">
              <p className="firstNameTitle" id="firstNameTitle">Имя: Оксана</p>
            </div>
            <div className="lastNameShell">
              <p className="lastNameTitle" id="lastNameTitle">Фамилия: Петрова</p>
            </div>
            <div className="patronymicShell">
              <p className="patronymicTitle" id="patronymicTitle">Отчество: Олеговна</p>
            </div>
            <div className="educationShell">
              <p className="educationTitle" id="educationTitle">Возраст: 70 лет</p>
            </div>
            <div className="workExperienceShell">
              <p className="workExperienceTitle" id="workExperienceTitle">Номер телефона: +79455557963</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;