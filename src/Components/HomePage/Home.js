import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.textBody}>
            <div className={s.greeting}>
                <h1>Welcome to our Social Network!</h1>
                <p>To fully experience our website - sign in now!</p>
                <p>Alternatively, you can also use a guest account using login details found on the login page!</p>
            </div>
        </div>
    )
}

export default Home;