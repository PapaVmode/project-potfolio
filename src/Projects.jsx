import React from 'react';
import styles from './Projects.module.css';
import Project from './Project';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.myProjects}><b>Мои работы</b></div>
        <div className={styles.containerProjects}>
          <Project />
          <Project />
        </div>
      </div>
    </div>

  );
}

export default Projects;
