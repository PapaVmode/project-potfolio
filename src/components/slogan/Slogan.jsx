import React from 'react';
import styles from './Slogan.module.css';
import HeaderTitles from '../HeaderTitles';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        < HeaderTitles name={'Рассматриваю вариант удаленной работы'}/>
        <input type="button" value="Нанять меня" />
      </div>
    </div>
  );
}

export default Slogan;
