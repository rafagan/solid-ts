import LoggerMail from '../../mail/LoggerMail'
import LoggerUserRepository from '../../repositories/LoggerUserRepository'
import {CreateUserUseCase} from './CreateUserUseCase'
import {CreateUserController} from './CreateUserController'

export default new CreateUserController(
    new CreateUserUseCase(
        new LoggerUserRepository(),
        new LoggerMail()
    )
)