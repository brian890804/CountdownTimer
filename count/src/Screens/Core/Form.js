import React, { useEffect, useContext, createContext, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CountDownRedux from './Redux/CountDownRedux'
import * as actions from './Redux/CountDownAction'
import Button from '@mui/material/Button';
import "./Css/style.css";

const content = createContext('');
const { Provider } = content;
function Prompt() {
    const { example, total, setInit } = useContext(content);
    const [correctAmount, setCorrectAmount] = useState(0);
    const [showButton, setShowButton] = useState();
    const onChoice = (choice) => {
        setInit(0)
        setShowButton(true)
        setTimeout(() => setShowButton(false), 2200)
        if (choice === example.correct_answer) {
            setCorrectAmount((pre) => pre + 1)
        }
    }
    return (
        <>
            <div className="row text-white  text-center align-content-center "
                style={{
                    width: '80vw',
                    height: '5vw',
                    fontSize: '2rem',
                    backgroundColor: "RGB(47,40,60)",
                }}>
                <div className="col-6">
                    <div className="col-12">
                        總題數
                    </div >
                    <div className="col-12">
                        {total}
                    </div >
                </div>
                <div className="col-6">
                    <div className="col-12">
                        正確題數
                    </div >
                    <div className="col-12">
                        {correctAmount}
                    </div >
                </div>
            </div>
            <div className="col-12  text-white  p-2"
                style={{
                    backgroundColor: 'gray',
                    textAlign: 'center',
                    minHeight: '10vh',
                    width: '80vw',
                    fontSize: '2rem',
                }}>
                <div className="col-12">
                    Question:
                </div >
                <div className="col-12">
                    {example.question}
                </div >
            </div>
            <div className="row  mb-5 text-white fs-4 p-2"
                style={{
                    backgroundColor: 'gray',
                    textAlign: 'center',
                    width: '80vw'
                }}>
                <div className="col-6 ">
                    <Button
                        variant="contained"
                        color="success"
                        disabled={showButton}
                        onClick={() => onChoice("True")}
                        sx={{ width: '100%' }}>Y</Button>
                </div >
                <div className="col-6 ">
                    <Button
                        variant="contained"
                        color="error"
                        disabled={showButton}
                        onClick={() => onChoice("False")}
                        sx={{ width: '100%' }}>N</Button>
                </div >
            </div>
        </>
    )
}
function CountDown() {
    const { Api, example, initTimmer, setInit } = useContext(content);
    const [show, setShow] = useState(false);
    const [refresh, setRefresh] = useState(0);

    const renderAnswer = (sec) => {
        if (sec === 0) {
            setShow(true);
            setTimeout(() => (Api.getExampleData(), setShow(false)), 2000)
            setTimeout(() => (setInit(15)), 2000)
            setTimeout(() => setRefresh(pre => pre + 1), 2000)
        }
    }

    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
                {show && <div>正確答案:{example.correct_answer}</div>}
            </div>
        );
    };
    return (
        <div style={{ position: 'fixed', bottom: '5vh', right: '5vw' }}>
            <CountdownCircleTimer
                key={refresh}
                isPlaying
                duration={initTimmer}
                colors={['#2f283c', '#00EC00', '#02F78E', '#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[15, 12, 10, 7, 5, 2, 0]}
                onComplete={() => (({ shouldRepeat: true, delay: 2.5 }))}
                onUpdate={renderAnswer}
            >
                {({ color, remainingTime }) => (
                    <span style={{ color, textAlign: 'center' }}>
                        {renderTime("作答時間", remainingTime)}
                    </span>
                )}
            </CountdownCircleTimer>
        </div>
    )
}
export default function Form() {
    const { example, setExample } = CountDownRedux();
    const [total, setTotal] = useState(0);
    const [initTimmer, setInit] = useState(15);

    const Api = {
        getExampleData: () => {
            setTotal(pre => pre + 1)
            actions.getExampleData(setExample)
        }
    }
    useEffect(() => {
        return (() => Api.getExampleData())
    }, [])
    return (
        <Provider value={{ Api, example, total, initTimmer, setInit }}>
            <Prompt />
            <CountDown />
        </Provider>
    )
}