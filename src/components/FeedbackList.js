import React, {useContext} from "react";
import { motion } from "framer-motion"
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>Повідомлень немає</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
          <motion.div key={item.id}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}} >
        <FeedbackItem
            item={item}/>
          </motion.div>
      ))}
    </div>
  );
};

export default FeedbackList;
