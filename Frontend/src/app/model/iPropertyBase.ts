export interface IPropertyBase {
    id: number;
    sellRent: number;
    name: string;
    propertyType: string;
    furnishingType: string;
    price: number;
    bhk: number;
    builtArea: number;
    cityName: string;
    readyToMove: number;
    image: string;
    estPossessionOn?:Date;
  }
  
  //f2 key change all the refrence properties