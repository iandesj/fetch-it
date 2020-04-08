import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-image',
  templateUrl: './fetch-image.component.html',
  styleUrls: ['./fetch-image.component.sass']
})
export class FetchImageComponent implements OnInit {
  imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  fetchImage() {
    fetch('https://picsum.photos/1000')
      .then(image => { this.imageUrl = image.url });
  }
}
