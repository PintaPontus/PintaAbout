import {Injectable} from '@angular/core';
import init, { greet } from "../wasm/oxidized/pkg/oxidized.js";

@Injectable({
	providedIn: 'root'
})
export class OxidizedService {

	constructor() {
	}

	greetUser() {
		init().then(() => {
			greet(prompt("Inserisci il tuo nome")||"Nome non valido");
		});
	}
}
