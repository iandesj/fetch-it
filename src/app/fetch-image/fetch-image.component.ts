import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-image',
  templateUrl: './fetch-image.component.html',
  styleUrls: ['./fetch-image.component.sass']
})
export class FetchImageComponent implements OnInit {
  imageUrl: string;
  machine: any;
  initialState: string;
  fetchState: string;
  commands: any;
  buttonText: any;

  constructor() {
    this.machine = {
      idle: {
        CLICK: 'loading',
      },
      loading: {
        RESOLVE: 'fetch',
        REJECT: 'error',
      },
      fetch: {
        CLICK: 'loading',
      },
      error: {
        CLICK: 'loading',
      },
    };
    this.initialState = 'idle';
    this.fetchState = this.initialState;
    this.commands = {
      loading: this.fetchImage.bind(this),
    };
    this.buttonText = {
      idle: 'Fetch image',
      loading: 'Loading...',
      error: 'Fetch fail, retry?',
      fetch: 'Fetch another image'
    };
  }

  ngOnInit(): void {
  }

  fetchImage() {
    fetch('https://picsum.photos/1000')
      .then(image => {
        this.randomlyTriggerError();
        this.imageUrl = image.url
        this.transition('RESOLVE');
      })
      .catch(_ => this.transition('REJECT'));
  }

  private randomlyTriggerError() {
    const random = Math.floor(Math.random() * 10);

    if (random <= 1) {
      throw new Error('An error occured in your fetch for an image');
    }
  }

  transition(action: string) {
    const nextState = this.machine[this.fetchState][action];
    const command = this.commands[nextState];

    console.info({
      fetchState: this.fetchState,
      action,
      nextState,
      command,
    });

    this.fetchState = nextState;
    command && command();
  }

}
