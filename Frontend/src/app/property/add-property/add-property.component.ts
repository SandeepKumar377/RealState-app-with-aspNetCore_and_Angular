import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/iPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent | undefined;

  bhkType: Array<number>=[1,2,3,4];
  propertyTypes: Array<string>=['House','Apartment', 'Duplex']
  furnishTypes: Array<string>=['Fully','Semi', 'Unfurnished']
  propertyView: IPropertyBase={
    Id: 0,
    Name: '',
    PType: '',
    Image: '',
    SellRent: 0,
    Price: 0,
    FType: '',
    BHK: 0,
    BuiltArea: '',
    City: '',
    RTM: 0,
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form is submit");
    console.log("Form details",this.addPropertyForm);
    console.log("Sell rent",this.addPropertyForm.value.BasicInfo.SellRent);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }


}


