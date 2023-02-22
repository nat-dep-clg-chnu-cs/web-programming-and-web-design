import React from 'react';

const FeedbackStat = ({feedback}) => {
    let average = feedback.reduce((sum, cur) => sum + cur.rating, 0)/feedback.length
    average = average.toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} відгуків</h4>
            <h4>Сер. рейтинг: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
};

export default FeedbackStat;
