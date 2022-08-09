import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from './../../model/property';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/iPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs!: TabsetComponent;
  addPropertyForm!: FormGroup;
  nextClicked!: boolean;
  property= new Property();

  bhkType: Array<string>=['1','2','3','4'];
  propertyTypes: Array<string>=['House','Apartment', 'Duplex'];
  furnishTypes: Array<string>=['Fully','Semi', 'Unfurnished'];
  mainEntrance: Array<string>=['East','West', 'South', 'North'];
  cityList!:any[];
  propertyView: IPropertyBase=
  {
    Id:0,
    Name: '',
    Price: 0,
    SellRent: 0,
    PType: '',
    FType: '',
    BHK:0,
    BuiltArea: 0,
    City: '',
    RTM: 0,
    Image:'',
  };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private housingService: HousingService,
    private alertify: AlertyfyService
    ) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
    this.housingService.getAllCities().subscribe(data=>{
      this.cityList=data;
      console.log("City list:",data);
    })
  }

  CreateAddPropertyForm(){
    this.addPropertyForm=this.fb.group({
      BasicInfo: this.fb.group({
        SellRent:['1', Validators.required],
        BHK:[null, Validators.required],
        PType:[null, Validators.required],
        FType:[null, Validators.required],
        Name:[null, Validators.required],
        City:[null, Validators.required],
      }),
      PriceInfo:this.fb.group({
        Price:[null, Validators.required],
        BuiltArea:[null, Validators.required],
        CarpetArea:[null], 
        Security:[null],
        Maintenance:[null],
      }),
      AddressInfo:this.fb.group({
        FloorNo:[null],
        TotalFloor:[null],
        Address:[null, Validators.required],
        LandMark:[null],
      }),      
      OtherInfo:this.fb.group({
        RTM:[null, Validators.required],
        Possession:[null],
        AOP:[null],
        Gated:[null],
        MainEntrance:[null],
        Description:[null],
      })
    });
  }

  //#region <Getter Methods>
    get BasicInfo(){
      return this.addPropertyForm.get('BasicInfo') as FormGroup;
    }
    get PriceInfo(){
      return this.addPropertyForm.get('PriceInfo') as FormGroup;
    }
    get AddressInfo(){
      return this.addPropertyForm.get('AddressInfo') as FormGroup;
    }
    get OtherInfo(){
      return this.addPropertyForm.get('OtherInfo') as FormGroup;
    }
  //#endregion

  //#region <Form controls>
    get SellRent(){
      return this.BasicInfo.get('SellRent') as FormControl;
    }
    get BHK(){
      return this.BasicInfo.get('BHK') as FormControl;
    }
    get PType(){
      return this.BasicInfo.get('PType') as FormControl;
    }
    get FType(){
      return this.BasicInfo.get('FType') as FormControl;
    }
    get Name(){
      return this.BasicInfo.get('Name') as FormControl;
    }
    get City(){
      return this.BasicInfo.get('City') as FormControl;
    }
    get Price(){
      return this.PriceInfo.get('Price') as FormControl;
    }
    get Security(){
      return this.PriceInfo.get('Security') as FormControl;
    }
    get Maintenance(){
      return this.PriceInfo.get('Maintenance') as FormControl;
    }
    get BuiltArea(){
      return this.PriceInfo.get('BuiltArea') as FormControl;
    }
    get CarpetArea(){
      return this.PriceInfo.get('CarpetArea') as FormControl;
    }     
    get FloorNo(){
      return this.AddressInfo.get('FloorNo') as FormControl;
    }
    get TotalFloor(){
      return this.AddressInfo.get('TotalFloor') as FormControl;
    }
    get Address(){
      return this.AddressInfo.get('Address') as FormControl;
    }
    get LandMark(){
      return this.AddressInfo.get('LandMark') as FormControl;
    }
    get RTM(){
      return this.OtherInfo.get('RTM') as FormControl;
    }
    get Possession(){
      return this.OtherInfo.get('Possession') as FormControl;
    }
    get AOP(){
      return this.OtherInfo.get('AOP') as FormControl;
    }
    get Gated(){
      return this.OtherInfo.get('Gated') as FormControl;
    }
    get MainEntrance(){
      return this.OtherInfo.get('MainEntrance') as FormControl;
    }
    get Description(){
      return this.OtherInfo.get('Description') as FormControl;
    }
    //#endregion
  
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    this.nextClicked=true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success('All tabs properties are valid!');
      console.log(this.addPropertyForm);
      if (this.SellRent.value==='2') {
        this.router.navigate(['/rent-property'])
      }
      else{
        this.router.navigate(['/']);
      }
    }
    else{
      this.alertify.error('All tabs properties are not valid!');
    }   
  }
  mapProperty(): void{
    this.property.Id=this.housingService.newPropId();
    this.property.SellRent= +this.SellRent.value;
    this.property.BHK= this.BHK.value;
    this.property.PType= this.PType.value;
    this.property.FType= this.FType.value;
    this.property.Name= this.Name.value;
    this.property.City= this.City.value;
    this.property.Price= this.Price.value;
    this.property.Security= this.Security.value;
    this.property.Maintenance= this.Maintenance.value;
    this.property.BuiltArea= this.BuiltArea.value;
    this.property.CarpetArea= this.CarpetArea.value;
    this.property.FloorNo= this.FloorNo.value;
    this.property.TotalFloor= this.TotalFloor.value;
    this.property.Address= this.Address.value;
    this.property.Address2= this.LandMark.value;
    this.property.RTM= this.RTM.value;
    this.property.Possession= this.Possession.value;
    this.property.AOP= this.AOP.value;
    this.property.Gated= this.Gated.value;
    this.property.MainEntrance= this.MainEntrance.value;
    this.property.Description= this.Description.value;
    this.property.PostedOn=  new Date().toString();
  }

  allTabsValid():boolean{
    if (this.BasicInfo.invalid) {
      this.formTabs!.tabs[0].active = true;
      return false;
    }
    if (this.PriceInfo.invalid) {
      this.formTabs!.tabs[1].active = true;
      return false;
    }
    if (this.AddressInfo.invalid) {
      this.formTabs!.tabs[2].active = true;
      return false;
    }
    if (this.OtherInfo.invalid) {
      this.formTabs!.tabs[3].active = true;
      return false;
    }
    return true;
  }

  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.allTabsValid();
    console.log(this.addPropertyForm);
    this.nextClicked=true;
    if(IsCurrentTabValid){
        this.formTabs!.tabs[tabId].active = true;
    }
  }
}


