import React, {useEffect} from "react";
import "../../App.css"
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {RememberMe, Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../Redux/authorization/auth-reducer";
import {Redirect} from "react-router-dom";
const maxLength30 = maxLengthCreator(30);
const maxLength10 = maxLengthCreator(10);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.loginForm__block}>
                <label>Введите email
                    <Field placeholder="example@gmail.com" name="email" component={Input} validate={[required, maxLength30]} type="email"/>
                </label>
            </div>
            <div className={styles.loginForm__block}>
                <label>Введите пароль
                    <Field placeholder="Пароль" name="password" component={Input} validate={[required, maxLength30]} type="password" />
                </label>
            </div>

            {error && <div className={styles.formErorr}>
                {error}
            </div>}

            {captchaUrl && <div className={styles.loginForm__block}><img className={styles.captchaImage} src={captchaUrl} alt="captcha"/></div>}
            {captchaUrl &&
            <div className={styles.loginForm__block}>
                <label>Введите символы с картинки
                    <Field placeholder="Символы" name="captcha" component={Input} validate={[required, maxLength10]} />
                </label>
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={styles.loginContent + " content"}>
            <div className="container">
                <div className={styles.login__header}>Войдите в свой аккаунт</div>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};
export default connect(mapStateToProps, {login, getCaptchaUrl})(Login);