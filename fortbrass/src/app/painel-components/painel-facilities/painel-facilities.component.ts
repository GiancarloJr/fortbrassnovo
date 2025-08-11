import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-facilities',
  templateUrl: './painel-facilities.component.html',
  styleUrls: ['../painel-scss/painel-facilities.component.scss']
})
export class PainelFacilitiesComponent {

    listaFacilities: ServicoItem[] = [
    { icon: `https://cdn-icons-png.flaticon.com/512/7182/7182253.png`,   label: 'Suporte Administrativo' },
    { icon: `https://cdn-icons-png.flaticon.com/512/845/845022.png`,     label: 'Limpeza e Conservação' },
    { icon: `https://cdn-icons-png.flaticon.com/512/10417/10417040.png`,label: 'Portaria e Recepção' },
    { icon: `https://cdn-icons-png.flaticon.com/512/4288/4288754.png`,   label: 'Manutenção de Áreas Verdes' },
    { icon: `https://cdn-icons-png.flaticon.com/512/7636/7636532.png`,   label: 'Motorista' },
    { icon: `https://cdn-icons-png.flaticon.com/512/7385/7385626.png`,   label: 'Bombeiro Ind e Civil' },
    { icon: `https://cdn-icons-png.flaticon.com/512/542/542340.png`,     label: 'Manutenção Predial' },
    { icon: `https://cdn-icons-png.flaticon.com/512/1799/1799888.png`,   label: 'Manutenção Elétrica' },
    { icon: `https://cdn-icons-png.flaticon.com/512/1518/1518610.png`,   label: 'Manutenção Hidráulica' }
  ];
}

interface ServicoItem {
  icon: string; // SVG HTML
  label: string;
}
