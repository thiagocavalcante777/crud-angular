import { Component } from '@angular/core';
import {UrlService} from "../url.service";

@Component({
  selector: 'app-listar-component',
  templateUrl: './listar-component.component.html',
  styleUrls: ['./listar-component.component.css']
})
export class ListarComponentComponent {
  urls: any[] | undefined;

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getUrls().subscribe(data => {
      this.urls = data;
    });
  }
}
