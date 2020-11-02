import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { NgwWowModule } from "ngx-wow";
import { CoreModule } from "./core/core.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		CoreModule,
		NgwWowModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
		ScullyLibModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
