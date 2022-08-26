import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AlertyfyService } from "./alertyfy.service";

@Injectable({
    providedIn: 'root'
})

export class HttpErrorIntercepterService implements HttpInterceptor{
    constructor(private alertyfy:AlertyfyService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Http Request started');
        return next.handle(request)
        .pipe(
            catchError((error:HttpErrorResponse)=>{
                const errorMesssage=this.setError(error);
                console.log(error);
                this.alertyfy.error(errorMesssage);
                return throwError(errorMesssage);
            })
        );
    }

    setError(error: HttpErrorResponse):string{
        let errorMesssage='Unknown error occured!';
        if (error.error instanceof ErrorEvent) {
            //client side error
            errorMesssage=error.error.message;
        }
        else{
            if (error.status!==0) {
                //client side error
                errorMesssage=error.error.errorMesssage;
            }
        }
        return errorMesssage;
    }
}