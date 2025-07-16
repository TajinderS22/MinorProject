import React from "react";

const WeatherTile=(weatherData)=>{
    
    weatherData=weatherData.weatherData;
    // console.log(weatherData)


    function dateToWord(date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
      
        let dayWithSuffix;
        if (day === 1 || day === 21 || day === 31) {
          dayWithSuffix = day + "st";
        } else if (day === 2 || day === 22) {
          dayWithSuffix = day + "nd";
        } else if (day === 3 || day === 23) {
          dayWithSuffix = day + "rd";
        } else {
          dayWithSuffix = day + "th";
        }
      
        return `${month} ${dayWithSuffix}, ${year}`;
      }
      
        //   const today = new Date();
    //   const dateString = dateToWord(today);
    //   console.log(dateString);


    return(
        <div>
            
            <div className="weather-tile mx-[16px] my-2 p-2 " >

                <div className="font-medium">
                    {dateToWord(new Date(weatherData?.date))}
                </div>
                
                <div className="flex justify-between">
                <div className='text-left'  >
                    <p className="text-2xl font-bold">
                        {weatherData?.day?.maxtemp_c} °C
                    </p>
                    <p className="text-xl">
                        {weatherData?.day?.maxwind_kph} Km/h
                    </p>
                    <p className="font-medium">
                        rain: {weatherData?.day?.daily_will_it_rain} %
                    </p>
                </div>

                <div>
                    <div className="text-lg font-medium text-rightflex flex-col justify-end items-end  ">
                        <img className='h-[58px] text-right' src={weatherData?.day?.condition?.icon} alt="" />
                        <p>{weatherData?.day?.condition?.text}</p>
                    </div>
                </div>
                </div>

            </div>

        </div>
    )
}

export default WeatherTile;
