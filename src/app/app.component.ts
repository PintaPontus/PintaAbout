import {Component} from '@angular/core';
import {FirebaseStorageService} from "./services/firebase-storage.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// public logoUrl: string | undefined;

	ngOnInit() {
		// this.loadLogo();
	}

	constructor(private firebaseStorageService: FirebaseStorageService) {
	}

	// async loadLogo(){
	// 	console.log('START REQUEST');
	// 	this.logoUrl = await this.firebaseStorageService.getUrl('gs://pinta-about.appspot.com/B 2.0.png');
	// 	console.log('LOGO URL: ', this.logoUrl);
	// }
}
