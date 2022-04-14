import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  pages: [
    'pages/index/index',
    'pages/home/discover',
    'pages/Interview/view',
    'pages/share/share',
    'pages/message/message',
    'pages/mine/mine',
    'pages/messageDetail/messageDetail',
    'pages/goodsDetails/goodsDetail',
    'pages/Login/login',
    'pages/Setting/setting',
    'pages/search/search',
    'pages/article/article',
    'pages/signIn/sign',
    'pages/videoDetail/videoDetail',
    'pages/Interview/Exercise/exercise',
    'pages/Interview/TestResult/testResult',
    'pages/Interview/ShowExplain/testExplain',
    'pages/home/ShowList/showList',
    'pages/home/BookCateList/cateList',
    'pages/home/BookDesc/bookDesc',
    'pages/home/LearnRoute/learnRoute',
    'pages/share/WritePubForm/publishForm',
  ],
  tabBar: {
    color: '#999',
    selectedColor: '#FD7109',
    backgroundColor: '#eee',
    borderStyle: 'white',
    list: [
      {
        text: '发现',
        pagePath: 'pages/home/discover',
        iconPath: './static/icon/disco.png',
        selectedIconPath: './static/icon/disco_selected.png',
      },
      {
        text: '刷题',
        pagePath: 'pages/Interview/view',
        iconPath: './static/icon/exam.png',
        selectedIconPath: './static/icon/exam_selected.png',
      },
      {
        text: '共享',
        pagePath: 'pages/share/share',
        iconPath: './static/icon/share.png',
        selectedIconPath: './static/icon/share_selected.png',
      },
      {
        text: '消息',
        pagePath: 'pages/message/message',
        iconPath: './static/icon/message.png',
        selectedIconPath: './static/icon/message_selected.png',
      },
      {
        text: '我的',
        pagePath: 'pages/mine/mine',
        iconPath: './static/icon/mine.png',
        selectedIconPath: './static/icon/mine_selected.png',
      },
    ]
  },
  usingComponents: Object.assign(useGlobalIconFont()),
  window: {
    navigationStyle: 'default',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
