import { LoginResponse } from "../../domain/models/LoginResponse";

export class LoginApiClient {
    async login(): Promise<LoginResponse> {
        return {
            'username': 'quyetnguyen',
            'token': '424sdas3wds'
        };
    }
}