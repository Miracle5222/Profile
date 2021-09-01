import React,{useState,useEffect} from 'react';
import './home.scss';
import axios from 'axios';

function Home() {

    const [quotes, setQuotes] = useState('');
    
    useEffect(() => {
        fetchAdvice();
    },[]);
    const handleClick = () => {
        fetchAdvice();
    }
    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
          .then((response) => {
            const quotes = response.data.slip;
              
              setQuotes(quotes);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    return (
        <div className='home'>
            <div className='home__quotes'>
                <span>{quotes.advice}</span>
                <button onClick={handleClick}>Generate Quotes</button>
            </div>
        </div>
    )
}

export default Home
