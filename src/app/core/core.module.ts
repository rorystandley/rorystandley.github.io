import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ScrollerService } from "./services/scroller.service";

@NgModule( {
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
	],
	providers: [
		ScrollerService
	],
	exports: []
} )
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
		if ( parentModule ) {
			throw new Error(
				'Core is already loaded. Import it in the AppModule only'
			);
		}
	}
}
