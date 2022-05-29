import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public imageObject = [
    {
      image: "assets/img/cem1.jpg",
      thumbImage: "assets/img/cem1.jpg"
    },
    {
      image: "assets/img/cem2.jpg",
      thumbImage: "assets/img/cem2.jpg"
    },
    {
      image: "assets/img/cem3.jpg",
      thumbImage: "assets/img/cem3.jpg"
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}