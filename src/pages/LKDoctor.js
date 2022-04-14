import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/lkStyle.css'

function LKDoctor() {
  return (
    <div className="Login">
      <div id="headShell">
            <h1 id="title">Telesfor</h1>
        </div>
        <nav>
            <ul className="topmenu">
              <li><a href="lkdoctor" className="active">Личный кабинет</a></li>
              <li><a href="patients">Мои пациенты</a></li>
              <li><a href="tables">Опросник</a></li>
            </ul>
        </nav>
        <div id="avatarShell">
            <h2 id="textOnPage">Личный кабинет</h2>
            <img className="avatar" src="https://womenstalk.ru/wp-content/uploads/plus/2017/11/2-87.jpg"></img>
            <a href="/">Выход</a>
        </div>
    </div>
  );
}

export default LKDoctor;
