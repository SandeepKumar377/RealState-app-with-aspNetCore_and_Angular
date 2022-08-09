import { IProperty } from './../model/iProperty';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/iPropertyBase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllCities() : Observable<any>{
    return this.http.get('http://localhost:27779/api/city');
  }

  getProperty(id:number){
    return this.getAllProperties().pipe(
      map(propertiesArray =>{
        // throw new Error('Custom Error');
        return propertiesArray.find(p=>p.Id===id);
      })
    ); 
  }

  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.http.get<Property[]>('data/properties.json')
    .pipe(
      map(data=>{
        const propertiesArray: Array<Property> = [];
        const localProperties= JSON.parse(localStorage.getItem('newProp')!);
        if (localProperties) {
          for(const id in localProperties){
            if (SellRent) {              
              if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent===SellRent){
                propertiesArray.push(localProperties[id]);
              }
            }else{
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for(const id in data){
          if (SellRent) {            
            if(data.hasOwnProperty(id) && data[id].SellRent===SellRent){
              propertiesArray.push(data[id]);
            }
          }else{
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
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
