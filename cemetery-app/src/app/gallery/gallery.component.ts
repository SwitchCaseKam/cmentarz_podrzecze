import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images = {
    spring: [
      {
        image: "assets/img/gallery/spring/cem1.jpg",
        thumbImage: "assets/img/gallery/spring/cem1.jpg"
      },
      {
        image: "assets/img/gallery/spring/cem2.jpg",
        thumbImage: "assets/img/gallery/spring/cem2.jpg"
      },
      {
        image: "assets/img/gallery/spring/cem3.jpg",
        thumbImage: "assets/img/gallery/spring/cem3.jpg"
      }
    ],
    summer: [
      {
        image: "assets/img/gallery/summer/summer-11.JPG",
        thumbImage: "assets/img/gallery/summer/summer-11.JPG"
      },
      {
        image: "assets/img/gallery/summer/summer-22.JPG",
        thumbImage: "assets/img/gallery/summer/summer-22.JPG"
      },
      {
        image: "assets/img/gallery/summer/summer-33.JPG",
        thumbImage: "assets/img/gallery/summer/summer-33.JPG"
      },
      {
        image: "assets/img/gallery/summer/summer-44.JPG",
        thumbImage: "assets/img/gallery/summer/summer-44.JPG"
      },
      {
        image: "assets/img/gallery/summer/summer-55.JPG",
        thumbImage: "assets/img/gallery/summer/summer-55.JPG"
      },
      {
        image: "assets/img/gallery/summer/summer-66.JPG",
        thumbImage: "assets/img/gallery/summer/summer-66.JPG"
      },
    ],
    autumn: [],
    winter: [
      {
        image: "assets/img/gallery/winter/winter-1.jpg",
        thumbImage: "assets/img/gallery/winter/winter-1.jpg"
      },
      {
        image: "assets/img/gallery/winter/winter-2.jpg",
        thumbImage: "assets/img/gallery/winter/winter-2.jpg"
      },
      {
        image: "assets/img/gallery/winter/winter-3.jpg",
        thumbImage: "assets/img/gallery/winter/winter-3.jpg"
      },
      {
        image: "assets/img/gallery/winter/winter-4.jpg",
        thumbImage: "assets/img/gallery/winter/winter-4.jpg"
      }, 
      {
        image: "assets/img/gallery/winter/winter-5.jpg",
        thumbImage: "assets/img/gallery/winter/winter-5.jpg"
      },
      {
        image: "assets/img/gallery/winter/winter-6.jpg",
        thumbImage: "assets/img/gallery/winter/winter-6.jpg"
      },
      {
        image: "assets/img/gallery/winter/winter-7.jpg",
        thumbImage: "assets/img/gallery/winter/winter-7.jpg"
      },
      {
        image: "assets/img/gallery/winter/winter-8.jpg",
        thumbImage: "assets/img/gallery/winter/winter-8.jpg"
      },
    ]
  }

  constructor() { }

  public ngOnInit(): void {
  }

}