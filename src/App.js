import {useState, useEffect} from "react"
import './App.css';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
    .then((res) =>res.json())
    .then((data) => {
      const randomQuote = data.quotes[Math.round(Math.random() * data.quotes.length)].quote;
      setQuotes(randomQuote);
    })
  }, [render]);

  return (
    <div>
      <div className="gradient-border">
      <h2>{quotes}</h2>
    </div>
    <button className="button" onClick={() => setRender(Math.random())}>New Quote</button>
    </div>
  );
}