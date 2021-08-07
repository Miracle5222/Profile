import { Home } from '@material-ui/icons';
import React from 'react';
import './home.scss';
import SocialMedia from './socialMedia';


export default function HomePage() {
    return (
        <div className='home'>
            <SocialMedia />
        </div>
    )
}
