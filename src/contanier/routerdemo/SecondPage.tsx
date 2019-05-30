import React from 'react';
import * as styles from './index.module.less';
import classnames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';

const SecondPage: React.SFC<RouteComponentProps> = () => {
  React.useEffect(() => {
    document.title = '测试';
  }, []);
  return (
    <>
      <div className={classnames(styles.container)}>页面二</div>
    </>
  );
};

export default withRouter(SecondPage);
