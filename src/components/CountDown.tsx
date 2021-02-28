import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export default function CountDown() {
  const {
    hasFinished,
    isActive,
    minutes,
    resetCountDown,
    seconds,
    startCountDown
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>

      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button  
          className={styles.countDownButton}
          disabled
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? 
            (
              <button 
                type='button' 
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountDown}
              >
                {!isActive ? 'Iniciar um ciclo' : 'Abandonar ciclo'}
              </button>
            ) : (
              <button 
                type='button' 
                className={styles.countDownButton}
                onClick={startCountDown}
              >
                {!isActive ? 'Iniciar um ciclo' : 'Abandonar ciclo'}
              </button>
            )}
        </>
      )}
      </div>

  )
}