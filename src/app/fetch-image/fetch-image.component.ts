import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-image',
  templateUrl: './fetch-image.component.html',
  styleUrls: ['./fetch-image.component.sass']
})
export class FetchImageComponent implements OnInit {
  imageUrl: string;
  isLoading: boolean = false;
  isErrored: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  fetchImage() {
    this.isLoading = true;
    this.isErrored = false;
    fetch('https://picsum.photos/1000')
      .then(image => {
        this.randomlyTriggerError();

        this.imageUrl = image.url
      })
      .catch(error => {
        this.isErrored = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  private randomlyTriggerError() {
    const random = Math.floor(Math.random() * 10);

    if (random <= 1) {
      throw new Error('An error occured in your fetch for an image');
    }
  }

}
