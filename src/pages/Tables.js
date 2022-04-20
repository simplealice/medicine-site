import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/tablesStyle.css'
import AuthService from "../routs/AuthService";
import axios from "axios";

function Tables() {

  const [personsResults, setPersonsResults] = useState([]);
  const [persons, setPersons] = useState([]);

  const currentUser = AuthService.getCurrentUser();

  const doc = 'Bearer ' + currentUser.accessToken;

  const getPersonsResults = () => {
    try {
      var config = {
        method: 'get',
        url: 'https://telesfor-noauth.herokuapp.com/api/questionnaire/patients-all',
        headers: {
          'Authorization': doc,
          'Content-Type': 'application/json'
        }
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          setPersonsResults(response.data);
        });
      //setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getPersons = () => {
    try {
      var config = {
        method: 'get',
        url: 'https://telesfor-noauth.herokuapp.com/api/users/patients',
        headers: {
          'Authorization': doc,
          'Content-Type': 'application/json'
        }
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          setPersons(response.data);
        });
      //setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };


  // const getPersons = () => {
  //   axios.get('https://telesfor-noauth.herokuapp.com/api/users/patients')
  //     .then((response) => {
  //       console.log(response.data);
  //       setPersons(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    getPersons();
    getPersonsResults();
  }, []);

  return (
    <div className="Login">
      <div id="headShell">
        <h1 id="title">Telesfor</h1>
      </div>
      <div className="exit"><a href="/">выход</a></div>
      <nav>
        <ul className="topmenu">
          <li><a href="lkdoctor">Личный кабинет</a></li>
          <li><a href="patients">Мои пациенты</a></li>
          <li><a href="tables" className="active">Опросник</a></li>
        </ul>
      </nav>
      <div id="avatarShell">
        <h2 id="textOnPage">Опросники</h2>
        <section id="tableShll">
          <table className="pers">
            <thead>
              <tr>
                <th>id пациента</th>
                <th>фамилия</th>
                <th>имя</th>
                <th>отчество</th>
              </tr>
            </thead>
            <tbody>
              {
                persons.map((person) =>
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.lastName}</td>
                    <td>{person.firstName}</td>
                    <td>{person.patronymic}</td>
                  </tr>)
              }
            </tbody>
          </table>


          <table className="pers">
            <thead>
              <tr>
                <th>id</th>
                <th>id пациента</th>
                {/* <th>firstName</th>
                  <th>lastName</th>
                  <th>patronymic</th> */}
                <th>самочувствие</th>
                <th>настроение</th>
                <th>активность</th>
                <th>дата</th>
              </tr>
            </thead>
            <tbody>
              {
                //persons.map((person) =>
                personsResults.map((result) =>
                  <tr key={result.rowId}>
                    <td><a href="patientres">{result.rowId}</a></td>
                    <td>{result.patientId}</td>
                    {/* <td>{person.id==result.rowId?person.firstName:""}</td>
                    <td>{person.lastName}</td>
                    <td>{person.patronymic}</td> */}
                    <td>{result.wellBeing}</td>
                    <td>{result.mood}</td>
                    <td>{result.activity}</td>
                    <td>{result.date}</td>
                  </tr>)
                //)
              }
            </tbody>
          </table>
          {/* <table className="questionnaire">
              <thead>
                <tr>
                  <th>id</th>
                  <th>wellBeing</th>
                  <th>mood</th>
                  <th>activity</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                {
                  personsResults.map((result) =>
                  <tr key={result.rowId}>
                    <td><a href="https://telesfor.herokuapp.com/api/questionnaire/patient?id=1">{result.rowId}</a></td>
                    <td>{result.wellBeing}</td>
                    <td>{result.mood}</td>
                    <td>{result.activity}</td>
                    <td>{result.date}</td>
                  </tr>)
                }
              </tbody>
            </table> */}
        </section>
      </div>
    </div>
  );
}

export default Tables;