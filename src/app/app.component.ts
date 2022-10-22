import { Component, Input, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherServeService } from './services/weather-serve.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(private WeatherServeService:WeatherServeService) {
      
    }
    cityName:string ="wellington";
    weatherData?:weatherData;
    ngOnInit(): void {
      this.getWeatherData(this.cityName);
      this.cityName='';

     
    }

    onSubmit(){
      this.getWeatherData(this.cityName);
      this.cityName='';
      

    }

    private getWeatherData(cityName:string) {
      this.WeatherServeService.getWeatherData(cityName)
      .subscribe({

        next:(response)=>{
          this.weatherData=response
             console.log(response)
        }
      })

    }

  
}
