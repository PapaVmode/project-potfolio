import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.mySkills}><b>Мои Скиллы</b></div>
        <div className={styles.containerSkills}>
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>

  );
}

export default Skills;
