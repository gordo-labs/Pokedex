import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../module/angular_material.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/search.pipe';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [HomeComponent, FilterPipe]
})
export class HomeModule {}
