import React from 'react';
import * as styles from './index.module.less';
import classnames from 'classnames';
import Iframe from '../../components/iframe'
const DemoTest: React.SFC = () => {
  React.useEffect(() => {
    document.title = '测试';
  }, []);
  return (
    <>
      <div className={classnames(styles.container)}>测试</div>
      <Iframe url="https://www.baidu.com/" />
    </>
  );
};

export default DemoTest;
