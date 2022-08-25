export interface User{
    userName:string;
    email:string;
    mobile:number;
    password:string;    
}
export interface UserLogin{
    email:string;
    userName:string;
    password:string; 
    token:string;   
}