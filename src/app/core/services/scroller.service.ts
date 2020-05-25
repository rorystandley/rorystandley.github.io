import { Injectable } from '@angular/core';

@Injectable( {
	providedIn: 'root'
} )
export class ScrollerService {

	constructor() {
	}

	scroll( id: string ) {
		const element = document.querySelector( id );
		element.scrollIntoView( { behavior: 'smooth' } )
	}
}
