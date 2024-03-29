import React, { Component, lazy } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { compose } from 'redux';
import withRouter from './Components/Profile/WithRouter';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './Components/common/Preloader/preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/suspence';


const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainerWithSuspense = withSuspense(DialogsContainer);
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainerWithSuspense />} />
            <Route path="/profile/:userId?*" element={<ProfileContainerWithSuspense />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

let SocialNetwork = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SocialNetwork;