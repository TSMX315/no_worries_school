import { Component } from 'react'
import 'taro-ui/dist/style/index.scss'
import './app.less'

class App extends Component {
  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App
