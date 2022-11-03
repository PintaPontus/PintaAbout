import {Injectable} from '@angular/core';
import {initializeApp, FirebaseApp} from "firebase/app";
import {getStorage, FirebaseStorage, ref, getDownloadURL} from "firebase/storage";
import {environment} from "../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class FirebaseStorageService {

	private app: FirebaseApp;
	private fireStorage: FirebaseStorage;

	constructor() {
		this.app = initializeApp(environment.firebaseConfig);
		this.fireStorage = getStorage(this.app, 'gs://pinta-about.appspot.com');
	}

	getUrl(file: string) {
		return getDownloadURL(ref(this.fireStorage, file));
	}

}
