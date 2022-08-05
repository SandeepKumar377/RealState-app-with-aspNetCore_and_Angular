import { HousingService } from 'src/app/services/housing.service';
import { Property } from './../../model/property';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

constructor(private router: Router, private housingService : HousingService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any{
    const prop_Id=route.params['id'];
    // console.log(prop_Id)
    return this.housingService.getProperty(+prop_Id).pipe(
      catchError(error=>{
        this.router.navigate(['/']);
        // return of(null);
        return error;
      })
    );
}
}