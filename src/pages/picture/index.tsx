import View from '@x.render/render-view';
import Picture from '@x.render/render-picture';
import styles from './index.module.css';

const App = () => {
  return (
    <View className={styles.container}>
      <Picture
        className={styles.img}
        src="https://k.sinaimg.cn/n/sinacn10101/50/w640h1010/20200108/4311-imvsvyz6534073.jpg/w700d1q75cms.jpg"
      ></Picture>
      <Picture
        className={styles.img}
        src="https://gd-hbimg.huaban.com/32f1e7c97b1c9d56f9b49d92abe48b317a7caa7cb2cf-yXpHpy_fw658"
      ></Picture>
      <Picture
        className={styles.img}
        lazyload
        src="https://scpic.chinaz.net/Files/pic/pic9/201410/apic7268.jpg"
      ></Picture>
    </View>
  );
};
export default App;
