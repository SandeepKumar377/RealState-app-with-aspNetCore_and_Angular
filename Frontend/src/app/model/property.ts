import { IPropertyBase } from './iPropertyBase';

export class Property implements IPropertyBase{
    Id!: number;
    SellRent!: number;
    Name!: string;
    PType!: string;
    FType!: string;
    Price!: number;
    BHK!: number;
    BuiltArea!: number;
    City!: string;
    RTM!: number;
    Image!: string;
    CarpetArea?:number;
    FloorNo?:number;
    TotalFloor?:number;
    Address?: string;
    Address2?: string;
    Security?:number;
    Maintenance?:number;
    AOP?:string;
    Possession?:string;
    Gated?:string;
    MainEntrance?:string;
    Description?: string;
    PostedOn?: string;
    PostedBy?: number;
}