import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'

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
            <h1 id="welcome">Добро пожаловать!</h1>
            <h2 id="textOnPage">Пациент</h2>
        </div>
    </div>
  );
}

export default Patient;