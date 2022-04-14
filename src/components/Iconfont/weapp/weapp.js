Component({
  properties: {
    // icon-resou | icon-gougou | icon-liwu- | icon-qiandaojinbixin | icon-yuedu | icon-shejiaotubiao-48 | icon-70BasicIcons-all-17 | icon-xuanzeti-C | icon-wendati | icon-wd_bianchengti | icon-shijian | icon-shijian1 | icon-shijian2 | icon-shijian3 | icon-shalou | icon-cuowu | icon-yanjing | icon-simi | icon-youjiantou | icon-youjiantou1 | icon-zhuti | icon-fenxiang | icon-jiarushoucang | icon-xia | icon-fenlei | icon-xinlixue | icon-chengxuyuan | icon-zhuanyefenlei | icon-xinrenkecheng | icon-qiuzhi | icon-jingjixue | icon-xuexiluxian | icon-shiyonggongju | icon-xuexiziyuan | icon-jinrongxue | icon-biaoqianlan_zhichang | icon-biaoqianlan_zhichang1 | icon-qiandao3 | icon-qiandao2 | icon-ruanjineng | icon-icon | icon-zhuanyejineng | icon-j-touzilicai | icon-meirijinju | icon-qianrushi | icon-gongzuoshilogo | icon-DEMO-dashujudashujukaifapingtai | icon-java | icon-Python | icon-wangluoanquan | icon-shipin | icon-weixin | icon-shouji | icon-weixin1 | icon-shezhi | icon-qiandao0101 | icon-shezhi1 | icon-xiaoxi | icon-faxian | icon-cuotiji | icon-wentifankui | icon-shoucang | icon-maichu | icon-settings | icon-sousuo | icon-womaidaode | icon-shuati | icon-shuati1 | icon-maichu1 | icon-qiandao | icon-xiaoxi1 | icon-wentifankui1 | icon-zanshanggongneng | icon-AApay | icon-shoucang1 | icon-shuatilianxi | icon-a-yijianfankuijibiji | icon-a-gongxiangwangluo
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 36,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 36 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
