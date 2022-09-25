import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { environment } from "../../environments/environment";
import { IKeyValuePair } from '../model/iKeyValuePair';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  baseURL=environment.baseURL;
  constructor(private http: HttpClient) { }

  getAllCities() : Observable<IKeyValuePair[]>{
    return this.http.get<IKeyValuePair[]>(this.baseURL+'/city/cities');
  }
  getAllPropertyType() : Observable<IKeyValuePair[]>{
    return this.http.get<IKeyValuePair[]>(this.baseURL+'/property/propertyTypes');
  }
  getAllFurnishingType() : Observable<IKeyValuePair[]>{
    return this.http.get<IKeyValuePair[]>(this.baseURL+'/property/FurnishingTypes');
  }

  getProperty(id:number){
    return this.http.get<string[]>(this.baseURL+'/property/details/'+id.toString())
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

  getPropertyAge(dateOfEstabilishment: Date):string{
    const today = new Date();
    const estDate = new Date(dateOfEstabilishment);
    let age =today.getFullYear() - estDate.getFullYear();
    const m= today.getMonth() - estDate.getMonth();
    if(m<0 || (m===0 && today.getDate() < estDate.getDate()))
    {
      age--;
    }
    if (today < estDate) {
      return '0';
    }
    if (age===0) {
      return 'Less then  a year';
    }
    return age.toString();
  }
}
