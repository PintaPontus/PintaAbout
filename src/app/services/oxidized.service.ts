import { Injectable } from '@angular/core'
import {BehaviorSubject} from "rxjs";
import * as OX from "../wasm/oxidized/pkg/oxidized";

@Injectable({
	providedIn: 'root'
})
export class OxidizedService {

	// This is just to let components know when WASM is ready
	public ready = new BehaviorSubject<boolean>(false);

	constructor() { }

	public greetUser(username: string){
		OX.greet(username);
	}

}
