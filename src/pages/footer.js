import { Typography } from '@material-ui/core'
import React from 'react'
import './footer.css';

export default function footer() {
    return (
        <div>
            <footer>
                <div className='container'>
                    <div className='contacts'>
                        <a href='https://outlook.live.com/owa/' target="_blank">Roneilgungobbansas@hotmail.com</a>
                        <p>09589565625</p>
                    </div>
                    <div className='sm'>
                        <ul>
                            <li><a href='#'>facebook</a></li>
                            <li><a href='#'>Instagram</a></li>
                            <li><a href='#'>Reddit</a></li>
                            <li><a href='#'>Twitch</a></li>
                        </ul>
                    </div>
                    <div className='copyright'>
                        <span>@Copyright 2020-2021</span>
                    </div>
                </div>


            </footer>
        </div>
    )
}
