import React from "react";
import { Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

import "./Feedback.css"


function FeedbackApp(){

    return <FeedbackProvider>

        <Header />
        <div className="feedback-container">
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <FeedbackForm />
                            <FeedbackStat />
                            <FeedbackList />
                        </>
                    } />
                <Route path='/about' element={<AboutPage /> } />
            </Routes>
            <AboutIconLink />
        </div>
    </FeedbackProvider>
}

export default FeedbackApp;
