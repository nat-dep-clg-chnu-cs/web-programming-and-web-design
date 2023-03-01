import React from 'react';
import Card from "../shared/Card";

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>Про цей додаток</h1>
                <p>Зворотній зв'язок</p>
                <p>Версія: 0.0.1</p>
                <a href="/">На домашню сторінку</a>
            </div>
        </Card>
    );
};

export default AboutPage;
