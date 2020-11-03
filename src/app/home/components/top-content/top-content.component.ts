import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";

@Component( {
	selector: 'app-top-content',
	templateUrl: './top-content.component.html',
	styleUrls: ['./top-content.component.scss']
} )
export class TopContentComponent implements OnInit {

	environment = environment

	constructor() {
	}

	ngOnInit() {
	}

}
