import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

// Import Pages
import { HomeComponent } from './pages/home/home.component';
import { WeatherDetailsComponent } from './pages/weather-details/weather-details.component';
import { CityWeatherComponent } from './shared/components/city-weather/city-weather.component';
import { CityForcastComponent } from './shared/components/city-forcast/city-forcast.component';
import { WeatherSymbolComponent } from './shared/components/weather-symbol/weather-symbol.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SectionLoaderComponent } from './shared/components/section-loader/section-loader.component';
import { CelsiusSymbolComponent } from './shared/components/celsius-symbol/celsius-symbol.component';
import { CitySeaLevelComponent } from './shared/components/city-sea-level/city-sea-level.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDetailsComponent,
    CityWeatherComponent,
    CityForcastComponent,
    WeatherSymbolComponent,
    HeaderComponent,
    SectionLoaderComponent,
    CelsiusSymbolComponent,
    CitySeaLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
