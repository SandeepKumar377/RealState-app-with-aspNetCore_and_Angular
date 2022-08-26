export interface UserRegister{
    userName:string;
    email:string;
    mobile?:number;
    password:string;
    confirmPassword:string;    
}
export interface UserLogin{
    email:string;
    userName:string;
    password:string; 
    token:string;   
}