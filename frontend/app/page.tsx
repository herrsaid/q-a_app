"use client"

import { useState } from 'react';
import Question from './_component/question';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handlePostQuestion = () => {
    if (newQuestion.trim() !== '') {
      setNewQuestion('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Questions</h1>
      <Question content="hello, this is a hard coded Question?" likesNumbers={55}></Question>
      <Question content="hello, this is a hard coded Question again?" likesNumbers={76}></Question>
      <div className="mt-4">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Type your question here"
          className="w-full p-2 border rounded-md resize-none"
        />
        <button
          onClick={handlePostQuestion}
          className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Post Question
        </button>
      </div>
    </div>
  );
}
