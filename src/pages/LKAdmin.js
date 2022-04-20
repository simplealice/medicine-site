import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/listsStyle.css'
import AuthService from "../routs/AuthService";
import axios from 'axios';

function LKAdmin() {

  const currentUser = AuthService.getCurrentUser();

  const doc = 'Bearer ' + currentUser.accessToken;

  var res;

  const [admin, setAdmin] = useState([]);

  const getAdmin = () => {
    try {
      var config = {
        method: 'get',
        url: 'https://telesfor-noauth.herokuapp.com/api/users/current',
        headers: {
          'Authorization': doc,
          'Content-Type': 'application/json'
        }
      };

      axios(config)
        .then((response) => {
          res = response.data;
          console.log(response.data);
          setAdmin(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
    setImage('https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg')
  }, []);

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
      <div className="exit"><a href="/">выход</a></div>
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
            <div className="lastNameShell">
              <p className="lastNameTitle" id="lastNameTitle">Фамилия: </p>
              <input defaultValue={admin.lastName} className="lastName" id="lastName" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="firstNameShell">
              <p className="firstNameTitle" id="firstNameTitle">Имя: </p>
              <input defaultValue={admin.firstName} className="firstName" id="firstName" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="patronymicShell">
              <p className="patronymicTitle" id="patronymicTitle">Отчество: </p>
              <input defaultValue={admin.patronymic} className="patronymic" id="patronymic" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="educationShell">
              <p className="educationTitle" id="educationTitle">Образование: </p>
              <input defaultValue={admin.education} className="education" id="education" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="workExperienceShell">
              <p className="workExperienceTitle" id="workExperienceTitle">Опыт работы: </p>
              <input defaultValue={admin.workExperience} className="workExperience" id="workExperience" />
              <b className="editIcon">&#9745;</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LKAdmin;
