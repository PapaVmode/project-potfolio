import React from 'react';
import styles from './Project.module.css';

function Project() {
  return (
    <div className={styles.columnProject}>
      <div className={styles.contentImg}>
        <div className={styles.img}>
          <img src="" alt="" />
          <span>Картинка</span>
          <input type="button" value="Кнопка" />
        </div>
        <div className={styles.nameProject}>
          <div>Название проекта</div>
          <div>Краткое описание:</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
