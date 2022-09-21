import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  baseURL=environment.baseURL;
  constructor(private http: HttpClient) { }

  getAllCities() : Observable<any>{
    return this.http.get(this.baseURL+'/city/cities');
  }

  getProperty(id:number){
    return this.getAllProperties(1).pipe(
      map(propertiesArray =>{
        return propertiesArray.find(p=>p.id===id);
      })
    ); 
  }
  
  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.http.get<Property[]>(this.baseURL+'/Property/list/'+SellRent?.toString())
  }

  addProperty(property: Property){
    let newProp = [property];
    //Add new property in Array if newProp already exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp=[property, ...JSON.parse(localStorage.getItem('newProp')!)];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));    
  }

  newPropId(){
    if (localStorage.getItem('Prop_Id')) {
      // localStorage.setItem('PropId',String(+localStorage.getItem('Prop_Id')!+1));
      return +localStorage.getItem('Prop_Id')!+1;
    }else{
      localStorage.setItem('Prop_Id','101');
      return 101;
    }
  }
}
