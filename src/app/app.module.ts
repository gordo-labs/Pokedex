import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home/home.service';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import {NgForageModule, NgForageConfig} from 'ngforage';
import { MaterialModule } from './module/angular_material.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgForageModule.forRoot(),
        MaterialModule,
    ],
    providers: [
        HomeService,
        ApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule{
    public constructor(ngfConfig: NgForageConfig) {
      ngfConfig.configure({
        name: 'MyApp',
        driver: [ // defaults to indexedDB -> webSQL -> localStorage -> sessionStorage
          NgForageConfig.DRIVER_INDEXEDDB,
          NgForageConfig.DRIVER_LOCALSTORAGE
        ]
      });
    }
  }
