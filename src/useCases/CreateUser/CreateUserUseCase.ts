import IUserRepository from '../../repositories/IUserRepository'
import ICreateUserDTO from './ICreateUserDTO'
import User from '../../entities/User'
import IMail from '../../mail/IMail'

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private mail: IMail
    ) {
    }

    async execute(data: ICreateUserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if(userAlreadyExists) {
            throw new Error('User already exists')
        }

        const user = new User(data)
        await this.userRepository.save(user)

        await this.mail.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Name',
                email: 'email@email.com'
            },
            subject: 'Subject',
            body: 'Body'
        })
    }
}