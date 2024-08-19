const extractWeatherType = (code) => {
    if (code >= 90) return ['Thunderstorm', 'RainThunder'];
    else if (code >= 80) return ['Rainy', 'Rainy'];
    else if (code >= 70) return ['Snowy', 'Snowy'];
    else if (code >= 40) return ['Drizzles', 'Rainy'];
    else if (code >= 3) return ['Cloudy', 'PartlyCloudy'];
    else return ['Sunny', 'Sunny'];
};

export default extractWeatherType;
