import React from 'react';
import Card from "../shared/Card";
import {Link} from "react-router-dom";
const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>Про цей додаток</h1>
                <p>Зворотній зв'язок</p>
                <p>Версія: 0.0.1</p>
                <Link to="/feedbackapp">На домашню сторінку</Link>
            </div>
        </Card>
    );
};

export default AboutPage;
