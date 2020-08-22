/*
    歌曲搜索接口
    请求地址：http://autunmnfish.cn/search
    请求方法：get
    请求参数：keywords(查询关键字)
    响应内容：歌曲搜索结果
*/

var app = new Vue({
  el: "#app",
  data: {
    query: "",
    musicList: [],
  },
  methods: {
    searchMusic: function () {
      axios.get("http://autunmnfish.cn/search?keywords=" + this.query).then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },
});
