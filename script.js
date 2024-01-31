let searchInput = document.querySelector(".input_img input");
let searchBtn = document.querySelector(".input_img button");
let weatherIcon = document.querySelector(".sunIcon");


const apiKey = "018b633a67d9a6fe0af419b5b52fae97";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function weather(city){
    
    const connect = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(connect.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }
    else{
        try{
            var data = await connect.json();
            // console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
            document.querySelector(".humanity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
            
            if(data.weather[0].main=="Clouds"){
                weatherIcon.src = "/Images/cloudy.png";
            }
            if(data.weather[0].main=="Rain"){
                weatherIcon.src="/Images/rainy.png";
            }   
            if(data.weather[0].main=="Clear"){
                weatherIcon.src = "/Images/clear.png";
            }
            if(data.weather[0].main=="Mist"){
                weatherIcon.src = "/Images/mist.png"
            }
            if(data.weather[0].main="Drizzle"){
                weatherIcon.src = "/Images/duzzle.png";
            }
        
            document.querySelector(".wheather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        
            searchInput.value="";
            searchInput.focus();
            }
        
            catch{console.log("Error");}   
    }
}

searchBtn.addEventListener("click",()=>{
    weather(searchInput.value);
})
// weather();