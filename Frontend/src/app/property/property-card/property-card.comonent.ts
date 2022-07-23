import { Component, Input } from "@angular/core";
import { IPropertyBase } from "src/app/model/iPropertyBase";

@Component(
  {
    selector:'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css'],
  }
)
export class PropertyCardComponent{
  @Input() property!: IPropertyBase;
  @Input() hideIcons!:boolean;
}
