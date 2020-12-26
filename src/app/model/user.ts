export class User {
    public id:number;
    public role:string;
    public username:string;
    public password:string;

    constructor(){}

    public set $id(x:number){
        this.$id=x;
    }
    public set $role(x:string){
        this.$role=x;
    }
    public set $username(x:string){
        this.$username=x;
    }
    public set $password(x:string){
        this.$password=x;
    }
    
    


    
}
