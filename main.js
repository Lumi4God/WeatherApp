let isClick = false;

$(".btn").click(() => {
  isClick = true;

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      $(".inp").val() +
      "&appid=3fee2c5d70b55a6704b6f388aee014a1&units=metric",
    (data) => {
      $(".tem").html(data.main.temp);
      $(".ct").html(data.name);
      $(".min").html(data.main.temp_min);
      $(".max").html(data.main.temp_max);
      $(".co").html(data.sys.country);
      $(".dis").html(data.weather[0].description);
      $(".im").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png"
      );
      $(".hum").html(data.main.humidity);
      $(".pre").html(data.main.pressure);
      $(".wind").html(data.wind.speed);
    }
  );
});


const good = (position) => {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=3fee2c5d70b55a6704b6f388aee014a1&units=metric",
    (data) => {
      $(".tem").html(data.main.temp);
      $(".ct").html(data.name);
      $(".min").html(data.main.temp_min);
      $(".max").html(data.main.temp_max);
      $(".co").html(data.sys.country);
      $(".dis").html(data.weather[0].description);
      $(".im").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png"
      );
      $(".hum").html(data.main.humidity);
      $(".pre").html(data.main.pressure);
      $(".wind").html(data.wind.speed);
    }
  );
};


const bad = (error) => {};

if (!isClick) {
  let lat = navigator.geolocation.getCurrentPosition(good, bad);
}