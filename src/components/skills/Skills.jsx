import React from 'react';
import styles from './Skills.module.css';
import Skill from './skill/Skill';
import HeaderTitles from '../HeaderTitles';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        < HeaderTitles name={'Мои скилы'} />
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
