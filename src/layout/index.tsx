import React from "react";
import Cookies from 'js-cookie';
import Sidebar from "./Sidebar";
import * as styles from './index.module.less';
import Header from '../components/Header';

const BasicLayout = (props: any) => {
  const userName = Cookies.get('userNmaeCheck') || '';
  const handelLogout = () => {
    Cookies.remove('TOKENCHECKIN');
    props.history.replace('/login');
  }
  return <div className={styles.wrapper}>
    <Header userName={userName} onClick={handelLogout} />
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <section className={styles.container}>
      <div className={styles.content}>
        {props.children}
      </div>
    </section>
  </div>
}

export default BasicLayout;