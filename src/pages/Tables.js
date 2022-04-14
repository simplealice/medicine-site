import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/tablesStyle.css'
import axios from "axios";

function Tables() {

  const [personsResults, setPersonsResults] = useState([]);
  const [persons, setPersons] = useState([]);

  const getPersonsResults = () => {
    axios.get('https://telesfor-noauth.herokuapp.com/api/questionnaire/patients-all')
    .then((response) => {
      console.log(response.data);
      setPersonsResults(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  
  const getPersons = () => {
    axios.get('https://telesfor-noauth.herokuapp.com/api/users/patients')
    .then((response) => {
      console.log(response.data);
      setPersons(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getPersons();
    getPersonsResults();
  }, []);

  return (
    <div className="Login">
      <div id="headShell">
            <h1 id="title">Telesfor</h1>
        </div>
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
                  <th>id</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>patronymic</th>
                  <th>wellBeing</th>
                  <th>mood</th>
                  <th>activity</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                {
                  persons.map((person) =>
                  personsResults.map((result) =>
                  <tr key={result.rowId}>
                    <td><a href="patient">{result.rowId}</a></td>
                    <td>{person.id==result.rowId?person.firstName:""}</td>
                    <td>{person.lastName}</td>
                    <td>{person.patronymic}</td>
                    <td>{result.wellBeing}</td>
                    <td>{result.mood}</td>
                    <td>{result.activity}</td>
                    <td>{result.date}</td>
                  </tr>))
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