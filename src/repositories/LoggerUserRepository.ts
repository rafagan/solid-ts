import IUserRepository from './IUserRepository'
import User from '../entities/User'

export default class LoggerUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    console.log(`LoggerUserRepository: procurando usuário por e-mail ${email}`)
    return null
  }

  async save(user: User): Promise<void> {
    console.log(`LoggerUserRepository: salvando usuário: ${JSON.stringify(user)}`)
  }
}