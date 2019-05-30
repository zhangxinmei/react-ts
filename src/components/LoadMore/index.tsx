import * as React from 'react';
import * as styles from './index.module.less';

interface LoadMoreProps {
  hasMore?: boolean;
  loadRef: any;
  onLoadMore?: () => void;
}

const LoadMore: React.SFC<LoadMoreProps> = ({
  hasMore,
  onLoadMore,
  loadRef
}) => {
  const ref: any = React.useRef(null);
  const scrollLoad = () => {
    const top = (ref && ref.current.getBoundingClientRect().top) || 0;
    const windowHeight = window.screen.height;
    console.log(top, windowHeight);
    if (top && top < windowHeight) {
      hasMore && onLoadMore && onLoadMore();
    }
  };

  React.useEffect(() => {
    // const scrollContainer = document.querySelector(idName) || document;
    console.log(11)
    loadRef && loadRef.current.addEventListener('scroll', scrollLoad);

    return () => {
      window.removeEventListener('scroll', scrollLoad);
    };
  }, [hasMore]);

  return (
    <div id="loading" className={styles.loading} ref={ref}>
      {hasMore ? '加载中...' : ''}
    </div>
  );
};

export default LoadMore;
