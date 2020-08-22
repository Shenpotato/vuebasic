/*
        请求地址：http://wthrcdn.etouch.cn/weather_mini
        请求方法：get
        请求参数：city(城市名)
        响应内容：天气信息
      */

var app = new Vue({
  el: "#app",
  data: {
    city: "",
    weatherList: [],
  },
  methods: {
    searchWeather: function () {
      var that = this;
      //   console.log(this.city);
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(
        function (response) {
          //   console.log(response.data.data.forecast);
          that.weatherList = response.data.data.forecast;
        },
        function (err) {
          console.log(err);
        }
      );
      console.log(this.weatherList);
    },
    changeCity: function (city) {
      this.city = city;
      this.searchWeather();
    },
  },
});
