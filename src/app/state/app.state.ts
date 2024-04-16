import { Injectable } from "@angular/core";
import { UsernameState } from "./username.state";

@Injectable({
    providedIn: 'root'
})
export class AppState {
    
    constructor(
        private readonly usernameState: UsernameState
    ){}

    get username() {
        return this.usernameState.store();
    }
}