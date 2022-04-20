import React, { useEffect, useState } from "react";
import '../styles/doctorStyle.css'
import '../styles/patientStyle.css'
import axios from "axios";
import AuthService from "../routs/AuthService";

function Patient() {

  const [personsResults, setPersonsResults] = useState([]);

  const currentUser = AuthService.getCurrentUser();

  const doc = 'Bearer ' + currentUser.accessToken;

  const getPersonsResults = () => {
    try {
      var config = {
        method: 'get',
        url: 'https://telesfor-noauth.herokuapp.com/api/questionnaire/patient?id=6',
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonsResults();
    console.log(personsResults.patientId)
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
      {
        personsResults.map((result) =>
          <div id="avatarShell">
            <h2 id="textOnPage">Ответы пациента {result.patientId}</h2>
            <div className="obshA">
              <ol key={result.patientId}>
                <li className="res" key={result.answerList[0].questionNr}>{result.answerList[0].value}</li>
                <li className="res" key={result.answerList[1].questionNr}>{result.answerList[1].value}</li>
                <li className="res" key={result.answerList[2].questionNr}>{result.answerList[2].value}</li>
                <li className="res" key={result.answerList[3].questionNr}>{result.answerList[3].value}</li>
                <li className="res" key={result.answerList[4].questionNr}>{result.answerList[4].value}</li>
                <li className="res" key={result.answerList[5].questionNr}>{result.answerList[5].value}</li>
                <li className="res" key={result.answerList[6].questionNr}>{result.answerList[6].value}</li>
                <li className="res" key={result.answerList[7].questionNr}>{result.answerList[7].value}</li>
                <li className="res" key={result.answerList[8].questionNr}>{result.answerList[8].value}</li>
                <li className="res" key={result.answerList[9].questionNr}>{result.answerList[9].value}</li>
                <li className="res" key={result.answerList[10].questionNr}>{result.answerList[10].value}</li>
                <li className="res" key={result.answerList[11].questionNr}>{result.answerList[11].value}</li>
                <li className="res" key={result.answerList[12].questionNr}>{result.answerList[12].value}</li>
                <li className="res" key={result.answerList[13].questionNr}>{result.answerList[13].value}</li>
                <li className="res" key={result.answerList[14].questionNr}>{result.answerList[14].value}</li>
                <li className="res" key={result.answerList[15].questionNr}>{result.answerList[15].value}</li>
                <li className="res" key={result.answerList[16].questionNr}>{result.answerList[16].value}</li>
                <li className="res" key={result.answerList[17].questionNr}>{result.answerList[17].value}</li>
                <li className="res" key={result.answerList[18].questionNr}>{result.answerList[18].value}</li>
                <li className="res" key={result.answerList[19].questionNr}>{result.answerList[19].value}</li>
                <li className="res" key={result.answerList[20].questionNr}>{result.answerList[20].value}</li>
                <li className="res" key={result.answerList[21].questionNr}>{result.answerList[21].value}</li>
                <li className="res" key={result.answerList[22].questionNr}>{result.answerList[22].value}</li>
                <li className="res" key={result.answerList[23].questionNr}>{result.answerList[23].value}</li>
                <li className="res" key={result.answerList[24].questionNr}>{result.answerList[24].value}</li>
                <li className="res" key={result.answerList[25].questionNr}>{result.answerList[25].value}</li>
                <li className="res" key={result.answerList[26].questionNr}>{result.answerList[26].value}</li>
                <li className="res" key={result.answerList[27].questionNr}>{result.answerList[27].value}</li>
                <li className="res" key={result.answerList[28].questionNr}>{result.answerList[28].value}</li>
                <li className="res" key={result.answerList[29].questionNr}>{result.answerList[29].value}</li>
              </ol>
            </div>
          </div>)
      }
    </div>
  );
}

export default Patient;