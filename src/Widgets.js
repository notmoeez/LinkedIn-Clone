import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets-article'>
            <div className='widgets-articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets-articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets-header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("PAPA React is back","Top news - 1,012 readers")}
            {newsArticle("Pakistan beats India","Sport news - 10,902 readers")}
            {newsArticle("Chelsea sack Tuchel","Sport news - 5,302 readers")}
            {newsArticle("Honda HRV to launch in Pakistan","Automobile Industry news - 3,302 readers")}
            {newsArticle("5th semester to start from 3rd Oct","UMT news - 6,969 readers")}
        </div>
    )
}

export default Widgets