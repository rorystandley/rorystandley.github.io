import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TopContentComponent } from './components/top-content/top-content.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

@NgModule( {
	declarations: [ HomeComponent, TopContentComponent, AboutMeComponent, PortfolioComponent, BlogListComponent ],
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule
	]
} )
export class HomeModule {
}
