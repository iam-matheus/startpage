function updateWeather() {
    $.ajax({
        url: "3fd6ae3a926242a4b9255952222407", //get your free url from weathapi.com
        type: "GET",
        success: function(result) {
            const temperature = toDecimal(result.current.temp_c) + "°C";
            const weatherText = result.current.condition.text;
            $("#hero-weather-temperature").text(temperature);
            $("#hero-weather-text").text(weatherText);
        }
    });
}

updateWeather();
setInterval(updateWeather, 300000);