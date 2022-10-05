import IMail from './IMail'
import IMessage from './IMessage'

export default class LoggerMail implements IMail {
  async sendMail(message: IMessage): Promise<void> {
    console.log(`LoggerMail: Enviando e-mail: ${JSON.stringify(message)}`)
  }
}