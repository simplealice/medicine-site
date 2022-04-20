import React, { useRef, useEffect, useState } from "react";
import '../styles/loginStyle.css'
import AuthService from "../routs/AuthService";

function LoginAdmin() {
    const userRef = useRef();
    const errRef = useRef();

    const loginRegex = /^[a-zA-Z0-9]{4,11}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^+=]{4,}$/;
    //const login_api = 'https://telesfor.herokuapp.com/login';
    //const login_api = 'https://telesfor-noauth.herokuapp.com/api/auth/login';
    //const login_api = 'https://atk.onpoz.ru/react';
    //var token = '';

    const [login, setLogin] = useState('')
    const [validLogin, setValidLogin] = useState(false)
    const [loginFocus, setLoginFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')
   // const [success, setSuccess] = useState(false)

    /*Setting a focus when the component loads*/
    useEffect(() => {
        userRef.current.focus();
    }, [])

    /*Phone validation*/
    useEffect(() => {
        const result = loginRegex.test(login);
        console.log(result);
        console.log(login);
        setValidLogin(result);
    }, [login])

    /*Password*/
    useEffect(() => {
        const result = passwordRegex.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(password);
    }, [password])

    useEffect(() => {
        setErrorMessage('');
    }, [login, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = loginRegex.test(login);
        const v2 = passwordRegex.test(password);
        if (!v1 || !v2) {
            setErrorMessage("Неверный логин или пароль");
            return;
        }
        try {
            const loginFormData = new FormData();
            loginFormData.append("username", login)
            loginFormData.append("password", password)

            try {

                // var data = JSON.stringify({ "login": login, "password": password });

                // var config = {
                //     method: 'post',
                //     url: login_api,
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     data: data
                // };

                // axios(config)
                //     .then(function (response) {
                //         console.log(JSON.stringify(response.data));
                //         //console.log(JSON.stringify(response.data.accessToken));
                //         token = JSON.stringify(response.data.accessToken);
                //         console.log("TOKEN: " + token);
                //         if (token.length != 0) {
                //             window.location = "/lkadmin"
                //             setSuccess(true);
                //         } else {
                //             setErrorMessage('Неверный логин или пароль')
                //         }
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });


                AuthService.login(login, password).then(
                    () => {
                        window.location = "/lkadmin"
                    },
                    error => {
                        setErrorMessage('Неверный логин или пароль')
                    }
                );
            } catch (error) {
                console.log(error)
            }
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
        <div className="Login">
            <div className="container">
                <form className="ui-form" name="a" onSubmit={(e) => handleSubmit(e)}>
                    <p ref={errRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                    <h3>Вход</h3>
                    <div className="form-group">
                        <input type="text" id="login" ref={userRef} autoComplete="off"
                            onChange={(e) => setLogin(e.target.value)} required
                            aria-invalid={validLogin ? "false" : "true"} aria-describedby="uidnote"
                            onFocus={() => setLoginFocus(true)} />
                        <label htmlFor="login">Логин</label>
                        {loginFocus && login && !validLogin && (
                            <p id="uidnote">
                                Поле должно содержать от 4 до 11 символов<br />
                                Допустимые символы: A-Z, a-z, 0-9<br />
                            </p>
                        )}
                    </div>
                    <div className="form-group">
                        <input type="password" id="password"
                            onChange={(e) => setPassword(e.target.value)} required
                            aria-invalid={validPassword ? "false" : "true"} />
                        <label htmlFor="password">Пароль</label>
                    </div>
                    <a className="forget" href="/">Я врач</a>
                    <p>
                        <input type="submit" id="submit" disabled={!validLogin || !validPassword ? true : false}
                            value="Войти" />
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
