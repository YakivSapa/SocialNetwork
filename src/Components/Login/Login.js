import { reduxForm } from "redux-form"
import { createField, Input } from "../common/FormsControls/FormsControls"
import { required } from "../utils/validators/validators"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer.ts"
import { Navigate } from "react-router-dom"
import style from "./../common/FormsControls/FormsControls.module.css"
import s from "./Login.module.css";
import TestAccountInfo from "./TestAccountInfo"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div className={s.form}>
            <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, { type: "password" })}
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Remember Me")}

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && createField(null, "captcha", [required], Input, {})}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button className={s.button}>Login</button>
                </div>
            </form>
            <TestAccountInfo />
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h1 className={s.loginText}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);