import React from 'react';
import styles from './HeaderTitles.module.css';

function HeaderTitles(props) {
  return (
        <div className={styles.headerTitle}>
          <div className={styles.title}>{props.name}</div>
          <div className={styles.line}></div>
        </div>
  );
}

export default HeaderTitles;
