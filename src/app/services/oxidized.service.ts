import { Injectable } from '@angular/core'
import {BehaviorSubject, Subject} from "rxjs";
import * as OX from "../wasm/oxidized/pkg/oxidized";

@Injectable({
	providedIn: 'root'
})
export class OxidizedService {

	// This is just to let components know when WASM is ready
	public ready = new BehaviorSubject<boolean>(false);

	public WASMTime = new Subject<string>();
	public JSTime = new Subject<string>();

	public goal = 45;

	ngOnInit(){
		this.WASMTime.next("0");
		this.JSTime.next("0");
	}
	constructor() { }

	public greetUser(username: string){
		OX.greet(username);
	}

	public async raceFibonacci(){
		let startTime = new Date().getTime();
		this.wasmFibonacci(this.goal)
			.then(t => this.WASMTime.next(String(t-startTime)));
		this.jsFibonacci(this.goal)
			.then(t => this.JSTime.next(String(t-startTime)));
	}

	public async wasmFibonacci(n: number){
		OX.fibonacci(n);
		return new Date().getTime();
	}

	public async jsFibonacci(n: number){
		this.calcFibonacci(n);
		return new Date().getTime();
	}

	private calcFibonacci(n: number): number{
		if (n < 2) { return n; }
		return (this.calcFibonacci(n-1) + this.calcFibonacci(n-2));
	}

}
