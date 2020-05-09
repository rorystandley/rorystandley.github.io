import { Component, OnInit } from '@angular/core';
import { ScrollerService } from "../../../core/services/scroller.service";

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit {

	constructor( private scrollerService: ScrollerService ) {
	}

	ngOnInit() {
	}

}
