import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home/home.service';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalForageModule } from 'ngx-localforage';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LocalForageModule
    ],
    providers: [
        HomeService,
        ApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}