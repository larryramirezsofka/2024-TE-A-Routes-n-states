import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StateFactory } from "./factory.state";

@Injectable({
    providedIn: 'root'
})
export class UsernameState {
    private username$: BehaviorSubject<string> = new BehaviorSubject('');

    constructor(private readonly factory: StateFactory){}

    store() {
        return {
            username: this.factory.state(this.username$)
        }
    }
}