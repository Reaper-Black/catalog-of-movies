export class User {
    _id?: number
    email: String;
    nickname: String;
    password: String;
    rol: String;

    constructor(email: string, nickname: string, password: string, rol: string){
        this.email = email
        this.nickname = nickname
        this.password = password
        this.rol = rol
    }
}