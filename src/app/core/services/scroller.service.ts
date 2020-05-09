import { Injectable } from '@angular/core';

@Injectable( {
	providedIn: 'root'
} )
export class ScrollerService {

	constructor() {
	}

	scroll( id: string ) {
		const elementList = document.querySelectorAll( id );
		const element = elementList[ 0 ] as HTMLElement;
		element.scrollIntoView( { behavior: 'smooth' } );
	}
}
