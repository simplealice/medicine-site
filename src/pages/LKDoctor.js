import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/lkStyle.css'
import axios from 'axios';
import EditField from "../modals/EditField";

function LKDoctor() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const getDoctors = () => {
    try {
      axios.get('https://telesfor-noauth.herokuapp.com/api/users/current')
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

  // function btnclk() {
  //   // if (!name.contentEditable) {
  //   //   return name.contentEditable = true
  //   // };
  //   // if (name.contentEditable == "false")
  //   //     {
  //   //       name.contentEditable = "true";
  //   //       // content_div.style.display = "inline";
  //   //       // textarea.innerHTML = div.innerHTML;
  //   //       // button.value = "Редактировать";
  //   //     }
  //   // name.disabled = true;
  //   setBtnClicked(true)
  // };
  function foo() {
    // RETURN the promise
    return axios.get("https://telesfor-noauth.herokuapp.com/api/users/doctors").then(function (response) {
      return response;
    });
  }

  var item = [];
  var res = foo().then(function (response) {
    item.push(response.data[1]);
  });
  console.log(item);

  // function changeText () {
  //   var editBtn = document.getElementById('editBtn');
  //   var editable = document.getElementById('title');
  //   // var editables = document.querySelectorAll('#title, #author, #content')

  //   editBtn.addEventListener('click', function(e) {
  //     if (editable.isContentEditable) {
  //       console.log(false)
  //       editable.contentEditable = 'false'
  //       editBtn.innerHTML = 'Enable Editing';
  //       editBtn.style.backgroundColor = '#F96';
  //     } else {
  //       editable.contentEditable = 'true'
  //       editBtn.innerHTML = 'Save Changes';
  //       editBtn.style.backgroundColor = '#6F9';
  //     }
  //     // if (!editables[0].isContentEditable) {
  //     //   console.log(editables[0].contentEditable)
  //     //   editables[0].contentEditable = 'true';
  //     //   editables[1].contentEditable = 'true';
  //     //   editables[2].contentEditable = 'true';
  //     //   editBtn.innerHTML = 'Save Changes';
  //     //   editBtn.style.backgroundColor = '#6F9';
  //     // } else {
  //     //   // выключаем режим редактирования
  //     //   console.log(editables[0].contentEditable)
  //     //   editables[0].contentEditable = 'false';
  //     //   editables[1].contentEditable = 'false';
  //     //   editables[2].contentEditable = 'false';
  //     //   // изменяем текст и цвет кнопки
  //     //   editBtn.innerHTML = 'Enable Editing';
  //     //   editBtn.style.backgroundColor = '#F96';
  //     //   // сохраняем данные в localStorage 
  //     //   for (var i = 0; i < editables.length; i++) {
  //     //     localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
  //     //   }
  //     // }
  //   });
  // }

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
              <input defaultValue="Мишуткин" className="lastName" id="lastName" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="firstNameShell">
              <p className="firstNameTitle" id="firstNameTitle">Имя: </p>
              <input defaultValue="Лев" className="firstName" id="firstName" />
              <b className="editIcon" onClick={() => setModal(true)}>&#9745;</b>
            </div>
            <div className="patronymicShell">
              <p className="patronymicTitle" id="patronymicTitle">Отчество: </p>
              <input defaultValue="Евгеньевич" className="patronymic" id="patronymic" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="educationShell">
              <p className="educationTitle" id="educationTitle">Образование: </p>
              <input defaultValue="РНИМУ им. Н.И. Пирогова: 2000-2006" className="education" id="education" />
              <b className="editIcon">&#9745;</b>
            </div>
            <div className="workExperienceShell">
              <p className="workExperienceTitle" id="workExperienceTitle">Опыт работы: </p>
              <input defaultValue="8 лет" className="workExperience" id="workExperience" />
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
