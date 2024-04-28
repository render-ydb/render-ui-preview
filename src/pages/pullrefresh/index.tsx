import PullRefresh from '@x.render/render-pullrefresh';
import View from '@x.render/render-view';
const App = () => {
  return (
    <PullRefresh
      onRefresh={() => {
        console.log('刷新');
      }}
      renderRefresh={() => {
        return (
          <View style={{ color: 'pink', textAlign: 'center' }}>
            释放立即刷新
          </View>
        );
      }}
    >
      <View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
      </View>
    </PullRefresh>
  );
};

export default App;
