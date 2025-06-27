import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuLinks = [
    { label: 'Empresa', url: '#' },
    { label: 'Serviços', url: '#' },
    { label: 'Segmentos', url: '#' },
    { label: 'Portal do Colaborador', url: '#' },
    { label: 'Contato', url: '#' }
  ];

  socialLinks = [
    { icon: 'linkedin.svg', alt: 'LinkedIn', url: '#' },
    { icon: 'facebook.svg', alt: 'Facebook', url: '#' },
    { icon: 'instagram.svg', alt: 'Instagram', url: '#' },
    { icon: 'youtube.svg', alt: 'YouTube', url: '#' },
    { icon: 'email.svg', alt: 'E-mail', url: '#' }
  ];

}
