import IAddress from './IAddress'

export default interface IMessage {
    to: IAddress
    from: IAddress
    subject: string
    body: string
}