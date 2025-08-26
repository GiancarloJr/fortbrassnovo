import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-seguranca',
  templateUrl: './painel-seguranca.component.html',
  styleUrls: ['../painel-scss/painel-facilities.component.scss']
})
export class PainelSegurancaComponent {

    listaSeguranca: ServicoItem[] = [
    { icon: `https://cdn-icons-png.flaticon.com/512/7182/7182253.png`,   label: 'Segurança Pessoal' },
    { icon: `https://cdn-icons-png.flaticon.com/512/845/845022.png`,     label: 'Segurança Residencial' },
    { icon: `https://cdn-icons-png.flaticon.com/512/10417/10417040.png`, label: 'Segurança Eletrônica' },
    { icon: `https://cdn-icons-png.flaticon.com/512/4288/4288754.png`,   label: 'Segurança Portuária' },
    { icon: `https://cdn-icons-png.flaticon.com/512/7636/7636532.png`,   label: 'Segurança Florestal' },
    { icon: `https://cdn-icons-png.flaticon.com/512/7385/7385626.png`,   label: 'Segurança em Condomínios' },
    { icon: `https://cdn-icons-png.flaticon.com/512/542/542340.png`,     label: 'Segurança em Shoppings' },
    { icon: `https://cdn-icons-png.flaticon.com/512/1799/1799888.png`,   label: 'Segurança Industrial' },
    { icon: `https://cdn-icons-png.flaticon.com/512/1518/1518610.png`,   label: 'Escolta Armada' }
  ];

}

interface ServicoItem {
  icon: string; 
  label: string;
}
