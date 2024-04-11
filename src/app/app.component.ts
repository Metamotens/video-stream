import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StreamApiService } from './core/services/stream-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  streamApi = inject(StreamApiService);

  constructor() {

    this.streamApi.getStreams().subscribe(data => {
      console.log(data);
    });



    // https://www.phind.com/search?cache=z30vid7o7318pw15bhs902tx
  }
}
