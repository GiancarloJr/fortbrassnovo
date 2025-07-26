import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-seguranca',
  templateUrl: './painel-seguranca.component.html',
  styleUrls: ['../painel-scss/painel-facilities.component.scss']
})
export class PainelSegurancaComponent {

    listaSeguranca: ServicoItem[] = [
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3L3 6v6c0 5.5 3.6 10.7 9 13 5.4-2.3 9-7.5 9-13V6l-9-3Z"/><path d="M12 11v4"/><path d="M12 15h.01"/></svg>`, label: 'Segurança Pessoal' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><path d="M3 11L12 2l9 9"/><path d="M9 22V12h6v10"/><path d="M21 22H3"/></svg>`, label: 'Segurança Residencial' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`, label: 'Segurança Eletrônica' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21v-2c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5v2"/><circle cx="12" cy="7" r="4"/></svg>`, label: 'Segurança Portuária' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21c-3.9-1.5-8-5.7-8-10.5V7l8-4 8 4v3.5c0 4.8-4.1 9-8 10.5z"/></svg>`, label: 'Segurança Florestal' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M2 12h20"/><path d="M7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/></svg>`, label: 'Segurança em Condomínios' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v16"/></svg>`, label: 'Segurança em Shoppings' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M2 14h20"/><path d="M9 7V3h6v4"/></svg>`, label: 'Segurança Industrial' },
    { icon: `<svg width="26" height="26" fill="none" stroke="#b8191c" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="13" width="20" height="7" rx="2"/><circle cx="8" cy="16.5" r="1.5"/><circle cx="16" cy="16.5" r="1.5"/></svg>`, label: 'Escolta Armada' }
  ];

}

interface ServicoItem {
  icon: string; // SVG como string
  label: string;
}
