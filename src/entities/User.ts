import { v4 } from 'uuid'

export default class User {
    // @ts-ignore
    public readonly id: string

    // @ts-ignore
    public name: string
    // @ts-ignore
    public email: string
    // @ts-ignore
    public password: string

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) this.id = v4()
    }
}