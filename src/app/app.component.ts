import {Component} from '@angular/core';
import {FirebaseStorageService} from "./services/firebase-storage.service";
import {OxidizedService} from "./services/oxidized.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private firebaseStorageService: FirebaseStorageService,
				private oxidizedService: OxidizedService) {
	}

	async greetUser(){
		this.oxidizedService.greetUser("Matteo");
	}
}
