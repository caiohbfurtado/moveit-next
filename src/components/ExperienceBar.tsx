import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextlevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextlevel}%`}} />

        {currentExperience !== 0 &&  <span className={styles.currentExperience} style={{ left: `${percentToNextlevel}%` }}>{currentExperience} xp</span>}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}