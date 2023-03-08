import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {


  return (
      <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
          <Routes>
              <Route path='/' element={<>
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
              </>}/>
              <Route path='/about' element={<AboutPage />}/>
          </Routes>


        <AboutIconLink />
      </div>
    </Router>
      </FeedbackProvider>
  );
}

export default App;
