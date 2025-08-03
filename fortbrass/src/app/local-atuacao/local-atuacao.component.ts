import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-local-atuacao',
  templateUrl: './local-atuacao.component.html',
  styleUrls: ['./local-atuacao.component.scss']
})
export class LocalAtuacaoComponent {
      @Input() imagemMapa: string = 'assets/mapa.png';

}
