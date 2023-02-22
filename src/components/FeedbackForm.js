import React, {useState} from 'react';
import Card from "../shared/Card";
import Button from "../shared/Button";

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const handleTextChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <Card>
        <form>
            <h2>Дайте оцінку нашому курсу</h2>
            {}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder={'Напишіть відгук'}/>
                <Button type="submit" isDisabled={btnDisabled}>Надіслати</Button>
            </div>
        </form>
        </Card>
    );
};

export default FeedbackForm;
