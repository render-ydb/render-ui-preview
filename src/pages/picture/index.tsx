import View from '@x.render/render-view';
import Picture from '@x.render/render-picture';
import styles from './index.module.css';

const App = () => {
  return (
    <View className={styles.container}>
      <Picture className={styles.img} src={'/images/picture1.jpg'} />
      <Picture className={styles.img} src={'/images/picture2.jpg'} />
      <Picture className={styles.img} lazyload src={'/images/picture3.jpg'} />
    </View>
  );
};
export default App;
