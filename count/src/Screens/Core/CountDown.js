import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./Css/style.css";
export default function CountDown() {
    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };
    return (
        <CountdownCircleTimer
            isPlaying
            duration={15}
            colors={['#00EC00', '##02F78E', '#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[15, 10, 7, 5, 2, 0]}
        >
            {({ color, remainingTime }) => (
                <span style={{ color, textAlign: 'center' }}>
                    {renderTime("作答時間", remainingTime)}
                </span>
            )}
        </CountdownCircleTimer>
    )
}