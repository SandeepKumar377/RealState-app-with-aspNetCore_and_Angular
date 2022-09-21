import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, concatMap, retry, retryWhen } from "rxjs/operators";
import { ErrorCode } from "../enums/enums";
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
            retryWhen(error=> this.retryRequest(error,10)),
            catchError((error:HttpErrorResponse)=>{
                const errorMesssage=this.setError(error);
                console.log(error);
                this.alertyfy.error(errorMesssage);
                return throwError(errorMesssage);
            })
        );
    }

    retryRequest(error: Observable<any>, retryCount: number): Observable<any>
    {
        return error.pipe(
            concatMap((checkErr:HttpErrorResponse, count:number)=>{
                if (count<=retryCount) {
                    switch (checkErr.status) {
                        case ErrorCode.serverDown:
                            return of(checkErr);
                            case ErrorCode.unauthorized:
                            return of(checkErr);
                    }
                }
                return throwError(checkErr);
            })
        );
    }
    //retry the request in case of error 
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