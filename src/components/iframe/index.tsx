import * as React from 'react';
import * as styles from './index.module.less';

interface IProps {
  url: string;
}

const LoadMore: React.SFC<IProps> = ({ url }) => {
  const contentRef = React.useRef<HTMLIFrameElement>(null);
  React.useEffect(() => {
    loadIframe();
  }, []);
  const loadIframe = () => {
    const iframe = contentRef.current!;
    iframe.src = url;
    const clientHeight =
      (document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
      150 - 90;
    iframe.style.height = `${clientHeight}px`;
  };

  return <iframe className={styles.iframe} ref={contentRef} />;
};

export default LoadMore;
