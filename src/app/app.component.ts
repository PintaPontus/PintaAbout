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

	WASMTime = "";
	JSTime = "";
	goal = 0;

	ngOnInit(){
		this.oxidizedService.WASMTime.subscribe(t => this.WASMTime = t);
		this.oxidizedService.JSTime.subscribe(t => this.JSTime = t);
		this.goal = this.oxidizedService.goal;
	}

	async greetUser(){
		this.oxidizedService.greetUser("Matteo");
	}

	async startRace() {
		await this.oxidizedService.raceFibonacci();
	}
}
