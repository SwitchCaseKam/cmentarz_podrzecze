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
    autumn: [
      {
        image: "assets/img/gallery/autumn/autumn-11.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-11.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-11.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-11.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-22.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-22.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-33.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-33.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-44.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-44.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-55.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-55.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-66.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-66.JPG"
      },
      {
        image: "assets/img/gallery/autumn/autumn-77.JPG",
        thumbImage: "assets/img/gallery/autumn/autumn-77.JPG"
      }
    ],
    winter: [
      {
        image: "assets/img/gallery/winter/winter-11.JPG",
        thumbImage: "assets/img/gallery/winter/winter-11.JPG"
      },
      {
        image: "assets/img/gallery/winter/winter-22.JPG",
        thumbImage: "assets/img/gallery/winter/winter-22.JPG"
      },
      {
        image: "assets/img/gallery/winter/winter-33.JPG",
        thumbImage: "assets/img/gallery/winter/winter-33.JPG"
      },
      {
        image: "assets/img/gallery/winter/winter-44.JPG",
        thumbImage: "assets/img/gallery/winter/winter-44.JPG"
      }, 
      {
        image: "assets/img/gallery/winter/winter-55.JPG",
        thumbImage: "assets/img/gallery/winter/winter-55.JPG"
      },
      {
        image: "assets/img/gallery/winter/winter-66.JPG",
        thumbImage: "assets/img/gallery/winter/winter-66.JPG"
      },
      {
        image: "assets/img/gallery/winter/winter-77.JPG",
        thumbImage: "assets/img/gallery/winter/winter-77.JPG"
      },
      {
        image: "assets/img/gallery/winter/winter-88.JPG",
        thumbImage: "assets/img/gallery/winter/winter-88.JPG"
      },
    ]
  }

  constructor() { }

  public ngOnInit(): void {
  }

}