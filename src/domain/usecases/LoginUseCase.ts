import { LoginRepo } from "../../data/repositories/LoginRepo";

export class LoginUseCase {
    private loginRepo: LoginRepo;
    constructor(loginRepos: LoginRepo){
        this.loginRepo = loginRepos;
    }
    login() {}
}