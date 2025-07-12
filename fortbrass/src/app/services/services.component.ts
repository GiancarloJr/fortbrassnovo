import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

    listaServicos: string[] = [
    'Vigilância Armada', 'Segurança Pessoal VSPP', 'Vigilante Desarmado',
    'Operador de Monitoramento', 'Recepção e Atendimento', 'Manutenção',
    'Limpeza e Conservação', 'Jardinagem', 'Eletricistas'
  ];

}
