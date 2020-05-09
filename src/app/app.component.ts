import { Component } from '@angular/core';
import { NgwWowService } from "ngx-wow";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component( {
	selector: 'app-root',
	styleUrls: [ './app.component.scss' ],
	template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
		<app-footer></app-footer>
	`
} )
export class AppComponent {

	constructor(
		private router: Router,
		private wowService: NgwWowService
	) {
		this.router.events.pipe(
			filter( event => event instanceof NavigationEnd )
		).subscribe( event => {
			// Reload WoW animations when done navigating to page,
			// but you are free to call it whenever/wherever you like
			this.wowService.init();
		} );
	}

}
