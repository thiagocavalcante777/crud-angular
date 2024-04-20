import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-component',
  templateUrl: './listar-component.component.html',
  styleUrls: ['./listar-component.component.css']
})
export class ListarComponentComponent {
  // Exemplo de lista de itens
  itens: any[] = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' }
  ];
}
