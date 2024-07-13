import { LoginUseCase } from './../domain/usecases/LoginUseCase';
import { Container } from "inversify";
import { LoginRepo } from "../data/repositories/LoginRepo";
import { LoginRepoImpl } from "../data/repositories/LoginRepoImpl";

const container = new Container();
const loginRepo = new LoginRepoImpl();
container.bind<LoginRepo>('LoginRepo').toConstantValue(loginRepo);
container.bind<LoginUseCase>('LoginUseCase').toConstantValue(new LoginUseCase(loginRepo));

export default container;