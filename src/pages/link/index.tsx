import Link from '@x.render/render-link';
import Text from '@x.render/render-text';

const App = () => {
  return (
    <Link
      href={'https://www.taobao.com'}
      onClick={(e) => {
        console.log(e);
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: 'red',
        }}
      >
        点击跳转
      </Text>
    </Link>
  );
};
export default App;
