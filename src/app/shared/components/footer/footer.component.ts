import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ScrollerService } from "../../../core/services/scroller.service";

@Component( {
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
} )
export class FooterComponent implements OnInit {

	twitter = faTwitter;
	linkedIn = faLinkedin;
	chevron = faChevronUp

	constructor( private scrollerService: ScrollerService ) {
	}

	ngOnInit() {
	}

}
