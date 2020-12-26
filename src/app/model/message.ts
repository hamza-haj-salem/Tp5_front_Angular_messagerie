import { User } from "./user";

export class Message {
    public id:number;
    public sujet:string;
    public contenu:string;
    public userSend:User;
    public userReceive:User;


    constructor(){}

    public set $userSend(x:User){
        this.$userSend=x;
    }

    public set $userReceive(x:User){
        this.$userReceive=x;
    }

}
