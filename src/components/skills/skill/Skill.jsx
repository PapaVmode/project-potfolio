import React from 'react';
import styles from './Skill.module.css';

function Skill() {
  return (
    <div className={styles.containerSkill}>
      <div className={styles.skill}>
        <div className={styles.testImg}><img src="" alt="" /></div>
        <div>React</div>
      </div>
      <div className={styles.descriptionSkill}>
        Подробное описание навыка
      </div>
    </div>
  );
}

export default Skill;
