import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div>Контакты</div>
        <form action="">
          <div><input className={styles.input} type="text"/></div>
          <div><input className={styles.input} type="text"/></div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        <input type="button" value="Отправить"/>
      </div>
    </div>
  );
}

export default Contacts;
