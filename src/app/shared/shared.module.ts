import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SocialIconComponent } from './components/social-icon/social-icon.component';

@NgModule( {
	declarations: [
		HeaderComponent,
		FooterComponent,
		SocialIconComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		SocialIconComponent
	]
} )
export class SharedModule {
}
