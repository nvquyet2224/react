import { LoginResponse } from "../../domain/models/LoginResponse";
import { LoginApiClient } from "../api/LoginApiClient";
import { LoginRepo } from "./LoginRepo";

export class LoginRepoImpl implements LoginRepo {
    login(email: string, password: string): Promise<LoginResponse> {
        let loginApi = new LoginApiClient();
        return loginApi.login();
    }
}