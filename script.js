const apiKey = "692874c5a1552c2e5344ef3b4d5ef012"
        const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block"
                document.querySelector(".weather").style.display = "none"
            }else{
                var data = await response.json();
                console.log(data)
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
                weatherIcon.src = data.weather[0].main === "Clouds" ? "images/clouds.png" :
                    data.weather[0].main === "Clear" ? "images/Clear.png" :
                        data.weather[0].main === "Rain" ? "images/rain.png" :
                            data.weather[0].main === "Drizzle" ? "images/drizzle.png" :
                                data.weather[0].main === "Mist" ? "images/mist.png" :
                                    "";

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value)
        })
