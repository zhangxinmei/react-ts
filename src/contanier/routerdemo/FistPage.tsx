import React from 'react';
import * as styles from './index.module.less';
import { Button } from 'antd-mobile';
import * as qs from 'query-string';
import classnames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';

const FirstPage: React.SFC<RouteComponentProps> = (props) => {
  React.useEffect(() => {
    document.title = '测试';
  }, []);
  const handleClick = () => {
    props.history.replace(`/secondpage?token=${qs.parse(props.location.search).token}`);
  }
  return (
    <>
      <div className={classnames(styles.container)}>页面一</div>
      <Button type="primary" onClick={handleClick}>进入第二页</Button>
    </>
  );
};

export default withRouter(FirstPage);
