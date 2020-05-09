import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TopContentComponent } from './components/top-content/top-content.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule( {
	declarations: [ HomeComponent, TopContentComponent, AboutMeComponent ],
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule,
	]
} )
export class HomeModule {
}
