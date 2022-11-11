import { Injectable } from '@angular/core';
import * as OX from "../wasm/oxidized/pkg/oxidized";

@Injectable({
	providedIn: 'root'
})
export class OxidizedService {

	constructor() { }

	public startCanvas(){
		OX.start();
	}

}
