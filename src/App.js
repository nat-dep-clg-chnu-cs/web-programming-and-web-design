import React from "react";

import Header from "./components/Header";

function App() {
  const body = "Body";
  const feedbacks = [
    {
      id: 1,
      text: "Comment one",
    },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];
  const loading = false;
  const showComment = true;

  if (loading) return "Loading...";

  return (
    <>
      <Header />
      <p>{body}</p>
      <div>
        {showComment && (
          <>
            <h3>Коментарі ({feedbacks.length})</h3>
            <ul>
              {feedbacks.map((feedback) => (
                <li key={feedback.id}>{feedback.text}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default App;
