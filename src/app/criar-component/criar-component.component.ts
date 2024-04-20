import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-component',
  templateUrl: './criar-component.component.html',
  styleUrls: ['./criar-component.component.css']
})
export class CriarComponentComponent {
  url: string = '';

  enviarUrl() {
    console.log('URL enviada:', this.url);
  }
}
