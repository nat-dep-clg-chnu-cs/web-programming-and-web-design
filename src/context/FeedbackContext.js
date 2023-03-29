import {createContext, useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import getDataFromGoogleApp from "../data/Utils";

const FeedbackContext = createContext()


const googleUrl = 'https://script.google.com/macros/s/AKfycbzOYFCkfqI1431Kb_qD4suZiiVRRjE4hmmAwZfh60aUDa3Bq2RSRx6Y17tl-Vai0v8S/exec'
export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsloading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async () => {

        getDataFromGoogleApp(`${googleUrl}?action=GET`).then(data => {
            setFeedback(data.feedback)
            setIsloading(false)

        })
        // const response = await fetch(`${googleUrl}?action=GET`)
        // const data = await response.json()


    }
    const addFeedback = async (newFeedback) => {

        newFeedback.id = uuidv4()
        getDataFromGoogleApp(`${googleUrl}?action=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then(data => {
            setFeedback(data.feedback)
        })


    }
    const deleteFeedback = async (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            getDataFromGoogleApp(`${googleUrl}?action=DELETE&id=${id}`).then(data => {
                setFeedback(data.feedback)
            })


        }

    }


    const updateFeedback = async (id, updItem) => {
        getDataFromGoogleApp(`${googleUrl}?action=PUT&id=${id}&rating=${updItem.rating}&text=${updItem.text}`).then(data => {
            setFeedback(data.feedback.reverse())
            setFeedbackEdit({
                item: {},
                edit: false,
        })

    })
    }
    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
