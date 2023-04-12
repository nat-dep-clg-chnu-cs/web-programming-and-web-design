import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import FeedbackApp from "./FeedbackApp/FeedbackApp";
import MainPage from "./MainPage/MainPage";
import NavBar from "./components/shared/NavBar";
import {AuthProvider} from "./Auth/context/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <Router>

                <NavBar/>

                <Routes>
                    <Route path='*' element={<MainPage /> } />
                    <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
                </Routes>

            </Router>
        </AuthProvider>
    );
};

export default App;
