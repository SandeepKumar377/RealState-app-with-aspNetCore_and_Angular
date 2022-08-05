import { Property } from './../../model/property';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!:number;
  property = new Property();
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor(
      private route:ActivatedRoute,
      private router: Router,
      private housingService: HousingService
    ) { }



  ngOnInit(): void {
    this.propertyId= +this.route.snapshot.params['id'];

    this.route.data.subscribe((data)=>{
        this.property=data['prp'];
      }
    );
    // this.route.params.subscribe(
    //   (params)=>{
    //     this.propertyId= +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data:any)=>{
    //         console.log(data)
    //         this.property=data;
    //       },error=>{
    //         this.router.navigate(['/']);
    //         console.log('httpError');
    //         console.log(error);
    //       }
    //     );
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '480px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/Images/HomeLibrary1.jpg',
        medium: 'assets/Images/HomeLibrary1.jpg',
        big: 'assets/Images/HomeLibrary1.jpg'
      },
      {
        small: 'assets/Images/HomeLibrary2.jpg',
        medium: 'assets/Images/HomeLibrary2.jpg',
        big: 'assets/Images/HomeLibrary2.jg'
      },
      {
        small: 'assets/Images/HomeLibrary3.jpg',
        medium: 'assets/Images/HomeLibrary3.jpg',
        big: 'assets/Images/HomeLibrary3.jpg'
      },
      {
        small: 'assets/Images/HomeLibrary4.jpg',
        medium: 'assets/Images/HomeLibrary4.jpg',
        big: 'assets/Images/HomeLibrary4.jpg'
      },
    ];

  }
}
