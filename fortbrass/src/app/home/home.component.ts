import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  items = [
  {
    id: 1,
    title: 'Por Que a Presença Humana É Essencial para a Segurança em Condomínios?',
    imageUrl: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1200',
    link: 'https://exemplo.com/noticia-1',
  },
  {
    id: 2,
    title: 'Segurança Sem Preconceito: compromisso com o respeito dentro e fora da Veper',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200',
    link: 'https://exemplo.com/noticia-2',
  },
  {
    id: 3,
    title: 'Formação de Instrutores de Pilotagem de Drones Eleva a Segurança Patrimonial',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200',
    link: 'https://exemplo.com/noticia-3',
  },
  // pode ter mais de 3, o carrossel passa adiante
];
}
