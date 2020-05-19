import React from 'react';
import styles from './Projects.module.css';
import Project from './project/Project';
import HeaderTitles from '../HeaderTitles';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        < HeaderTitles name={'Мои работы'}/>
        <div className={styles.containerProjects}>
          <Project />
          <Project />
        </div>
      </div>
    </div>

  );
}

export default Projects;
