import { Injectable } from '@angular/core'
import {BehaviorSubject} from "rxjs";
import {FirebaseStorageService} from "./firebase-storage.service";

@Injectable({
	providedIn: 'root'
})
export class OxidizedService {

	// This is just to let components know when WASM is ready
	public ready = new BehaviorSubject<boolean>(false);
	private importObject;

	constructor(private firebaseStorageService: FirebaseStorageService) {
		this.importObject = {
			imports: {
				greet(arg : string) {
					console.log(arg);
				},
				wbg: ()=>{},
			},

		};
		this.init().then(_ => {
			this.ready.next(true);
		});
	}

	private async init() {
		console.log(this.importObject);
		return WebAssembly.instantiateStreaming(
			fetch('./assets/oxidized.wasm'),
			this.importObject
		).then((res) => {
			console.log("WASM: ", res);
		}).catch(err => {
			console.error("WASM ERR: ", err);
		})
	}

	public greetUser(){
		alert("CIAO!");
	}

}
