import { Component, input } from '@angular/core';

declare const Twitch: any; // Declara Twitch para evitar errores de TypeSc

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [],
  templateUrl: './stream.component.html'
})
export class StreamComponent {
  id = input.required<string>();

  ngAfterViewInit() {
    new Twitch.Player('twitch-embed', {
      width: 854,
      height: 480,
      channel: this.id()
    });
  }
}
