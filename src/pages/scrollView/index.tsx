import { useRef } from 'react';
// import ScrollView from '@x.render/render-scrollview';
import dynamic from 'next/dynamic';
import { ScrollViewRefObject } from '@x.render/render-scrollview/build/lib/types';
// import styles from './index.module.css';
// import logopng from './logo.jpeg';

const ScrollView = dynamic(() => import('@x.render/render-scrollview'), {
  ssr: false,
});
const App = () => {
  const scrollViewRef = useRef<ScrollViewRefObject>(null);
  const handleViewScroll = () => {
    console.log(scrollViewRef.current);
  };
  const handleResetScroll = () => {
    // @ts-ignore
    scrollViewRef.current._nativeNode.scrollTop = 0;
  };
  const handleOnScroll = (e: any) => {
    console.log(e);
  };
  const handleOnEndReached = () => {
    console.log('触底了');
  };
  const handlePositionScroll = () => {
    // @ts-ignore
    scrollViewRef.current.scrollIntoView({ id: 'password' });
  };
  return (
    <>
      <div>
        <span onClick={handleViewScroll}>查看滚动</span>
        <span onClick={handleResetScroll}>恢复滚动</span>
        <span onClick={handlePositionScroll}>指定滚动到的元素</span>
      </div>
      <ScrollView
        scrollEventThrottle={200}
        onScroll={handleOnScroll}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={50}
        ref={scrollViewRef}
        style={{
          height: '50vh',
        }}
      >
        {/* <div className={styles.container}>
          <img className={styles.image} src={logopng} />
          <p className={styles.text}>
            <span className={styles.letter}>Powered</span>
            <span className={styles.letter}>&nbsp;</span>
            <span className={styles.letter}>by</span>
            <span className={styles.letter}>&nbsp;</span>
            <span className={styles.letter}>render</span>
            <span className={styles.letter}>&nbsp;</span>
          </p>
        </div> */}
      </ScrollView>
    </>
  );
};
export default App;
