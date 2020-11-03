import { Component, Input, OnInit } from '@angular/core';
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

@Component( {
	selector: 'app-social-icon',
	templateUrl: './social-icon.component.html',
	styleUrls: ['./social-icon.component.scss']
} )
export class SocialIconComponent implements OnInit {


	choice;
	twitter = faTwitter;
	linkedIn = faLinkedin;

	@Input() type;
	@Input() link: string;

	constructor() {
	}

	ngOnInit() {
		this.choice = this[ this.type ];
	}

}
