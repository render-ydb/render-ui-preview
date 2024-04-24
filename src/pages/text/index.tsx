
// import {Text,View} from '@x.render/render-ui'
import Text  from '@x.render/render-text'
import View  from '@x.render/render-view'


const styles = {
  root: {
    width: '100wh',
  },
  container: {
    padding: 20,
    borderStyle: "solid",
    borderColor: "#dddddd",
    borderWidth: 1,
    marginBottom: 10,
  },
  textBlock: {
    fontWeight: "500",
    color: "blue",
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
};
const App = () => {
  return (
    <View style={styles.root}>
      <View
        style={{
          ...styles.container,
          ...{
            flexDirection: "row",
            justifyContent: "flex-start",
          },
        }}
      >
        <Text>文字标签</Text>
        <Text
          style={{
            color: "#ff4200",
          }}
        >
          文字标签
        </Text>
      </View>

      <View style={styles.container}>
        <Text
          numberOfLines={1}
          style={{
            width: 300,
          }}
        >
          超出一行长度自动省略， 超出一行长度自动省略，
        </Text>

        <Text
          numberOfLines={2}
          style={{
            width: 300,
          }}
        >
         超出两行长度自动省略，超出两行长度自动省略，超出两行长度自动省略，超出两行长度自动省略，
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ textDecoration: "underline" }}>Text underline</Text>
        <Text style={{ textDecorationLine: "none" }}>no Underlined</Text>
        <Text style={{ textDecoration: "line-through" }}>
          Text strikethrough
        </Text>
      </View>
    
    </View>
  );
};
export default App;