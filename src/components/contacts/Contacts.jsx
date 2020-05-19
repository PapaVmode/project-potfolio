import React from 'react';
import styles from './Contacts.module.css';
import HeaderTitles from '../HeaderTitles';

function Contacts() {
  return (
    <div className={styles.contacts}>
      
      <div className={styles.container}>
      < HeaderTitles name={'Контакты'}/>
        <form action="" >
          <div><input className={styles.input} type="text" placeholder="Имя"/></div>
          <div><input className={styles.input} type="text" placeholder="e-mail"/></div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Сообщение"></textarea>
        </form>
        <input type="button" value="Отправить"/>
      </div>
    </div>
  );
}

export default Contacts;
