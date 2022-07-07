import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';


@Injectable({
    providedIn: 'root'
})

export class AlertyfyService {
    constructor() { }

    success(message: string){
        alertify.scuccess(message);
    }
    warning(message: string){
        alertify.warning(message);
    }
    error(message: string){
        alertify.error(message);
    }
}