import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/lkStyle.css'
import EditField from "../modals/EditField";
import AuthService from "../routs/AuthService";
import axios from "axios";

function LKDoctor() {

  const [doctorInfo, setDoctorInfo] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const currentUser = AuthService.getCurrentUser();

  const doc = 'Bearer ' + currentUser.accessToken;

  var res;

  const getDoctorInfo = () => {
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
          setDoctorInfo(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
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
          <li><a href="lkdoctor" className="active">Личный кабинет</a></li>
          <li><a href="patients">Мои пациенты</a></li>
          <li><a href="tables">Опросник</a></li>
        </ul>
      </nav>
      <div id="avatarShell">
        <h2 id="textOnPage">Личный кабинет</h2>
        <div className="obsh">
          <div className="photoShell">
            <div><img className="avatar" src={image}></img></div>
            <EditField toggle={toggle} modal={modal} />
            <div><button id="editBtn" onClick={onOpenFileDialog} className="editBtn" type="button">Сменить фото</button></div>

            <a href="#">
              <input
                type="file"
                onChange={onProcessFile}
                ref={fileInput}
                hidden={true}
              />
            </a>
          </div>
          {/* <img className="avatar" src="https://womenstalk.ru/wp-content/uploads/plus/2017/11/2-87.jpg"></img>
              <button id="editBtn" className="editBtn" type="button">Edit Document</button> */}
          {/* <div contentEditable="false" id="nameField">Name: </div> */}
          {/* <div id="nameField">Name: </div> */}
          {/* <h2 className="note__title"> Text title </h2>
              <p className="note__body"> Text body </p>
              <button id="nameField" disabled={btnClicked ? false : true}>Name: </button>
              <button id="btnEditName" onClick={() => btnclk}><b className="editIcon">&#9998;</b></button> */}

          {/* <button id="editBtn" type="button" onClick={() => changeText()}>Edit Document</button> */}

          {/* <div className="firstNameShell">
                    <p className="firstNameTitle" id="firstNameTitle">Имя: </p>
                    <input defaultValue={item.at(1)} className="firstName" id="firstName">{item.at(1)}</input>
                    <b className="editIcon">&#9998;</b>
                  </div> */}


          {/* { 
              doctors.map(doctor => <div> */}
          <div className="editor" id="editor">
            <div className="lastNameShell">
              <p className="lastNameTitle" id="lastNameTitle">Фамилия: </p>
              <input defaultValue={doctorInfo.lastName} className="lastName" id="lastName" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="firstNameShell">
              <p className="firstNameTitle" id="firstNameTitle">Имя: </p>
              <input defaultValue={doctorInfo.firstName} className="firstName" id="firstName" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="patronymicShell">
              <p className="patronymicTitle" id="patronymicTitle">Отчество: </p>
              <input defaultValue={doctorInfo.patronymic} className="patronymic" id="patronymic" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="educationShell">
              <p className="educationTitle" id="educationTitle">Образование: </p>
              <input defaultValue={doctorInfo.education} className="education" id="education" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="workExperienceShell">
              <p className="workExperienceTitle" id="workExperienceTitle">Опыт работы: </p>
              <input defaultValue={doctorInfo.workExperience} className="workExperience" id="workExperience" />
              <b className="editIcon">&#9745;</b>
            </div>
          </div>
          {/* </div>)
            } */}
        </div>
      </div>
    </div>
  );
}

export default LKDoctor;
