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
            const quotes = response.data.slip.advice;
              
              setQuotes(quotes);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    return (
        <div className='home'>
            <div className='home__quotes'>
                <span>{quotes}</span>
                <button onClick={handleClick}>Advice Me</button>
            </div>

            <div className='home__sm'>
                <a href ="https://github.com/" target="_blank"><div className='home__sm_github home__sm_media'></div></a>
                <a href ="https://www.facebook.com" target="_blank"><div className='home__sm_ffacebook home__sm_media'></div></a>
                <a href ="https://www.instagram.com" target="_blank"> <div className='home__sm_iinstagram home__sm_media'></div></a>
                <a href ="https://www.linkedin.com" target="_blank"><div className='home__sm_llinkedin home__sm_media'></div></a>
            </div>

            
           
                
            
        </div>
      
        
    )
}

export default Home
