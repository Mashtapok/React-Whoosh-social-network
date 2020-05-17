import React, {useEffect} from "react";
import "../../App.css"
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {RememberMe, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div className={styles.loginForm__block}>
                <label>Введите email
                    <Field placeholder="example@gmail.com" name="email" component={Input} validate={[required]} type="email"/>
                </label>
            </div>
            <div className={styles.loginForm__block}>
                <label>Введите пароль
                    <Field placeholder="Пароль" name="password" component={Input} validate={[required]} type="password" />
                </label>
            </div>
            {error && <div className={styles.formErorr}>
                {error}
            </div>}
            <div className={styles.loginForm__block} >
                <Field component={RememberMe} name="rememberMe" type="checkbox" />
            </div>

        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    useEffect(() => {document.title = "Войти | Whoosh"},[]);

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={styles.loginContent + " content"}>
            <div className="container">
                <div className={styles.login__header}>Войдите в свой аккаунт</div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};
export default connect(mapStateToProps, {login})(Login);