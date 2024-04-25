import View from '@x.render/render-view';
import { useEffect, useRef } from 'react';

const App = () => {
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(domRef.current);
  }, []);
  return (
    <View
      ref={domRef}
      style={{
        height: '120vh',
      }}
      onClick={() => {
        alert('container was clicked!');
      }}
    >
      <View
        onAppear={() => {
          alert('我出现了');
        }}
        onDisappear={() => {
          alert('我消失了');
        }}
        style={{
          height: 80,
          backgroundColor: '#369',
        }}
        onClick={(e) => {
          e.stopPropagation();
          alert('red was clicked');
        }}
      />
      <View
        onFirstAppear={() => {
          alert('触发一次');
        }}
        style={{
          flex: 1,
          backgroundColor: '#368',
        }}
      />
    </View>
  );
};
export default App;
