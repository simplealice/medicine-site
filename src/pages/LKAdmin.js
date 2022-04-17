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


  const [image, setImage] = useState([]);

  let fileInput = React.createRef();

  const onOpenFileDialog = () => {
    fileInput.current.click();
  };

  const onProcessFile = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    }
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };


  return (
    <div className="Login">
      <div id="headShell">
        <h1 id="title">Telesfor</h1>
      </div>
      <div className="exit"><a href="/">Выход</a></div>
      <nav>
        <ul className="topmenu">
          <li><a href="lkadmin" className="active">Личный кабинет</a></li>
          <li><a href="doctors">Врачи</a></li>
          <li><a href="patientsadmin">Пациенты</a></li>
        </ul>
      </nav>
      <div id="avatarShell">
        <h2 id="textOnPage">Личный кабинет</h2>
        <div className="obsh">
          <div className="photoShell">
            <div><img className="avatar" src={image}></img></div>
            <div><button id="editBtn" onClick={onOpenFileDialog} className="editBtn" type="button">Сменить фото</button></div>

            <a href="#">
              <input
                type="file"
                onChange={onProcessFile}
                ref={fileInput}
                hidden={true} />
            </a>
          </div>

          <div className="editor" id="editor">
            <div className="firstNameShell">
              <p className="firstNameTitle" id="firstNameTitle">Имя: </p>
              <input defaultValue="a" className="firstName" id="firstName" />
              <b className="editIcon">&#9998;</b>
            </div>
            <div className="lastNameShell">
              <p className="lastNameTitle" id="lastNameTitle">Фамилия: </p>
              <input defaultValue="a" className="lastName" id="lastName" />
              <b className="editIcon">&#9998;</b>
            </div>
            <div className="patronymicShell">
              <p className="patronymicTitle" id="patronymicTitle">Отчество: </p>
              <input defaultValue="a" className="patronymic" id="patronymic" />
              <b className="editIcon">&#9998;</b>
            </div>
            <div className="educationShell">
              <p className="educationTitle" id="educationTitle">Образование: </p>
              <input defaultValue="a" className="education" id="education" />
              <b className="editIcon">&#9998;</b>
            </div>
            <div className="workExperienceShell">
              <p className="workExperienceTitle" id="workExperienceTitle">Опыт работы: </p>
              <input defaultValue="a" className="workExperience" id="workExperience" />
              <b className="editIcon">&#9998;</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LKAdmin;
