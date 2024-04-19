import { Component, OnInit, inject, signal } from '@angular/core';
import { StreamApiService } from '../core/services/stream-api.service';
import { StreamData, StreamResponse } from '../core/models/stream-response';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  streamService = inject(StreamApiService);

  streams = signal<StreamData[]>([])

  ngOnInit() {
    this.streamService.getStreams().subscribe(({ data }: StreamResponse) => {
      this.streams.set(data);
    });
  }
}
