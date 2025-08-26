import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escudos-saibamais',
  templateUrl: './escudos-saibamais.component.html',
  styleUrls: ['./escudos-saibamais.component.scss']
})
export class EscudosSaibamaisComponent {
  @Input() title = 'SOLUÇÕES COMPLETAS EM SEGURANÇA';
  @Input() subtitle = 'E SERVIÇOS PARA TODOS OS SETORES';
  @Input() footer = 'TERCEIRIZAÇÃO';

  @Input() photoUrl = 'assets/seguranca.png'
  @Input() photoAlt = 'Profissional de segurança';

  @Input() items: ShieldItem[] = [
    { label: 'FACILITIES',  accent: '#C1121F', outline: '#241B45', ctaOnHover: true, ctaLabel: 'Saiba mais' },
    { label: 'SEGURANÇA',   accent: '#C1121F', outline: '#241B45', ctaOnHover: true, ctaLabel: 'Saiba mais' },
    { label: 'TECNOLOGIA',  accent: '#3C67A7', outline: '#241B45', ctaOnHover: true, ctaLabel: 'Saiba mais' }
  ];

  onItemClick(item: ShieldItem) {
    if (item.click) { item.click(); return; }
    if (item.route) { window.location.href = item.route; }
  }
}

type ShieldItem = {
  label: string;
  accent: string;        // cor de preenchimento no hover
  outline?: string;      // cor do contorno do brasão
  textColor?: string;    // NOVO: cor do texto (antes do hover)
  ctaOnHover?: boolean;
  ctaLabel?: string;
  route?: string;
  click?: () => void;
};