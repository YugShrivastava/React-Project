import { useEffect, useState } from "react";
// import apiKey from "../assets/apiKey.js";

const useWeatherInfo = (city) => {

    const apiKey = process.env.OPENWEATHERMAP_API_KEY

    const [weatherData, setWeatherData] = useState(false)

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    setWeatherData(false)
                    throw new Error("Invalid City");
                }
            })
            .then((cityWeather) => {
                setWeatherData(cityWeather)
            })
            .catch((msg) => console.error(msg));
    }, [city]);

    return weatherData
};

export default useWeatherInfo;
