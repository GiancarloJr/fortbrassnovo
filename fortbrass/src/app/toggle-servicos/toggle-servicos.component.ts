import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-servicos',
  templateUrl: './toggle-servicos.component.html',
  styleUrls: ['./toggle-servicos.component.scss']
})
export class ToggleServicosComponent {

 abaSelecionada: 'seguranca' | 'facilities' = 'seguranca';

}