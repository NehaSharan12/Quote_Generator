import React, { useState, useEffect } from "react";
import './App.css'

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  
  useEffect(() => {
    fetchQuote();
  }, []);
  
  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setQuote(data);
        setBackgroundColor(getRandomColor());
      });
  };
  
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  return (
    <div className="quote" style={{ backgroundColor, height: "100vh"}}>
      <div className="content">
      <h2>{quote.content}</h2>
      <p>— {quote.author}</p>
      <button className="btn" onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default Quote;



