import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/lkStyle.css'

function Patient() {
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
        <div id="avatarShell">
            <h2 id="textOnPage">Пациент</h2>
            <div className="obsh">
            <div className="photoShell">
              <div><img className="avatar" src="https://womenstalk.ru/wp-content/uploads/plus/2017/11/2-87.jpg"></img></div>
            </div>
            <div className="info" id="info">
                  <div className="firstNameShell">
                    <p className="firstNameTitle" id="firstNameTitle">Имя: a</p>
                  </div>
                  <div className="lastNameShell">
                    <p className="lastNameTitle" id="lastNameTitle">Фамилия: </p>
                  </div>
                  <div className="patronymicShell">
                    <p className="patronymicTitle" id="patronymicTitle">Отчество: </p>
                  </div>
                  <div className="educationShell">
                    <p className="educationTitle" id="educationTitle">Образование: </p>
                  </div>
                  <div className="workExperienceShell">
                    <p className="workExperienceTitle" id="workExperienceTitle">Опыт работы: </p>
                  </div>
                </div>
          </div>
        </div>
    </div>
  );
}

export default Patient;