import React, { useRef, useEffect, useState } from "react";
import '../styles/loginStyle.css';
import { Navigate } from 'react-router-dom';
import AuthService from "../routs/AuthService";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  //const phoneRegex = /^((7)+([0-9]){10})$/;
  const passwordRegex = /^[a-zA-Z0-9!@#$%^+=]{4,}$/;

  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone] = useState(false)
  const [phoneFocus, setPhoneFocus] = useState(false)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  /*Setting a focus when the component loads*/
  useEffect(() => {
    userRef.current.focus();
  }, [])

  /*Phone validation*/
  useEffect(() => {
    //const result = phoneRegex.test(phone);
    //console.log(result);
    console.log(phone);
    //setValidPhone(result);
    setValidPhone(true);
  }, [phone])

  /*Password*/
  useEffect(() => {
    const result = passwordRegex.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(password);
  }, [password])

  useEffect(() => {
    setErrorMessage('');
  }, [phone, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const v1 = phoneRegex.test(phone);
    const v2 = passwordRegex.test(password);
    if (!v2) {
    //if (!v1 || !v2) {
      setErrorMessage("Invalid Entry");
      return;
    }
    try {

      AuthService.login(phone, password).then(
        () => {
          window.location = "/lkdoctor"
        },
        error => {
          setErrorMessage('Неверный логин или пароль')
        }
      );
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrorMessage('No server response');
      } else {
        setErrorMessage('Sign in failed')
      }
    }
  }

  return (
    <>
      {
        success ? (
          <Navigate to="/lkdoctor" />
        ) : (
          <div className="Login">
            <div className="container">
              <form className="ui-form" name="a" onSubmit={(e) => handleSubmit(e)}>
                <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                <h3>Вход</h3>
                <div className="form-group">
                  <input type="text" id="phone" ref={userRef} autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)} required
                    aria-invalid={validPhone ? "false" : "true"} aria-describedby="uidnote"
                    onFocus={() => setPhoneFocus(true)} />
                  <label htmlFor="phone">Номер телефона</label>
                  {phoneFocus && phone && !validPhone && (
                    <p id="uidnote">
                      Допустимые символы: 0-9<br />
                      Формат ввода: 7XXXXXXXXXX<br />
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <input type="password" id="password"
                    onChange={(e) => setPassword(e.target.value)} required
                    aria-invalid={validPassword ? "false" : "true"} />
                  <label htmlFor="password">Пароль</label>
                </div>
                {/* <a className="forget" href="https://google.com/search">Забыли пароль?</a> */}
                <a className="forget" href="/loginadmin">Я администратор</a>
                <p>
                  <input type="submit" id="submit" disabled={!validPhone || !validPassword ? true : false}
                    value="Войти" />
                </p>
              </form>
            </div>
          </div>
        )}
    </>
  );
}

export default Login;
