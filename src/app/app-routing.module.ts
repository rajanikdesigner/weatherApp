import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Pages Components
import { HomeComponent } from 'src/app/pages/home/home.component';
import { WeatherDetailsComponent } from 'src/app/pages/weather-details/weather-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, data: { title : "Homepage"}},
  { path: 'weatherDetails/:id', component: WeatherDetailsComponent, data: { title : "Weather Details"}},
  { path: '**', redirectTo: 'home', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
