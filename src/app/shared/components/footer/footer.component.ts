import { Component, OnInit } from '@angular/core';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ScrollerService } from "../../../core/services/scroller.service";
import { environment } from "../../../../environments/environment";

@Component( {
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
} )
export class FooterComponent implements OnInit {

	chevron = faChevronUp
	environment = environment;

	constructor( public scrollerService: ScrollerService ) {
	}

	ngOnInit() {
	}

}
