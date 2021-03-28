import React from 'react';
import LoadingGif from '../../assets/icons/weather.gif';
import classes from './Loading.module.css';

const Loading = (props) => {
    return(
        <div className={classes.Loading}>
            <img src={LoadingGif} alt=""/>
        </div>
    )
};

export default Loading;
