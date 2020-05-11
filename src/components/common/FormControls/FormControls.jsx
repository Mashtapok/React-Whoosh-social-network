import React from "react";
import styles from "./FormControls.module.css";

export const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {children}
            {hasError && <i className={styles.error_icon + " fas fa-exclamation-circle"}></i>}
        </div>
    );
};

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl_dContents + " " + (hasError ? styles.error : "")}>
            <textarea {...input} {...props} />
            {hasError && <span className={styles.error_message}>{error}</span>}
        </div>
    );
};

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input {...input} {...props} className={styles.Input}/>
            {hasError && <i className={styles.error_icon + " fas fa-exclamation-circle"}></i>}
        </div>
    );
};

export const RememberMe = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.checkboxBlock + " " + (hasError ? styles.error : "")}>
            <div className={styles.checkboxBlock__left}>
                <label className={styles.checkboxBlock__label}>
                    <input type="checkbox" {...input} {...props} className={styles.checkbox}/>
                    запомнить меня</label>
            </div>
            <div className={styles.checkboxBlock__right}>
                <button className={styles.submitButton}>Войти</button>
            </div>
        </div>
    );
};