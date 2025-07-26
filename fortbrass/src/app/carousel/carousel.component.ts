import { Component, OnInit, OnDestroy } from '@angular/core';

interface CarouselItem {
  image: string;
  title: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface TagItem {
  icon: string;
  text: string;
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  items: CarouselItem[] = [
    { image: 'assets/shopping.jpg', title: 'Portos' },
    { image: 'assets/shopping.jpg', title: 'Grandes corporações' },
    { image: 'assets/shopping.jpg', title: 'Condomínios' },
    { image: 'assets/shopping.jpg', title: 'Residências' },
    { image: 'assets/shopping.jpg', title: 'Shoppings' },
    { image: 'assets/shopping.jpg', title: 'Hospitais' }
  ];

  visibleItems: CarouselItem[] = [];
  currentIndex = 6;
  autoSlideInterval: any;
  transitionStyle = 'transform 0.5s ease-in-out';
  autoSlideDelay = 5000;

  stats: StatItem[] = [
    { value: '+2.000', label: 'Clientes' },
    { value: '+6.000', label: 'Colaboradores' },
    { value: '+60', label: 'Anos de História' },
    { value: '+27', label: 'Anos de Experiência' }
  ];

  tagsList: TagItem[] = [
    { icon: '🛡️', text: 'Qualidade Veper' },
    { icon: '👁️', text: 'Visão 360°' },
    { icon: '💻', text: 'Método 247' },
    { icon: '📱', text: 'Tecnologia e Inovação' },
    { icon: '📄', text: 'Análise de Risco' },
    { icon: '🤝', text: 'Inovação e Pessoas' },
    { icon: '🏆', text: 'Certificações' },
    { icon: '🌍', text: 'Inclusão e Diversidade' },
    { icon: '📑', text: 'Consultoria Especializada' }
  ];


  ngOnInit() {
    // Cria carrossel infinito duplicando lista
    this.visibleItems = [...this.items, ...this.items, ...this.items];
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }



  get transformStyle() {
    return `translateX(-${this.currentIndex * (100 / 4)}%)`; // 4 itens visíveis
  }

  moveRight() {
    this.resetAutoSlide();
    this.currentIndex++;
    this.checkIndex();
  }

  moveLeft() {
    this.resetAutoSlide();
    this.currentIndex--;
    this.checkIndex();
  }

  checkIndex() {
    // Chegou no final, volta pro meio sem animação
    setTimeout(() => {
      if (this.currentIndex >= this.items.length * 2) {
        this.transitionStyle = 'none';
        this.currentIndex = this.items.length;
      }
      if (this.currentIndex <= this.items.length - 4) {
        this.transitionStyle = 'none';
        this.currentIndex = this.items.length;
      }
      // Reativa animação depois do ajuste
      setTimeout(() => this.transitionStyle = 'transform 0.5s ease-in-out', 50);
    }, 500);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.moveRight(), this.autoSlideDelay);
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }
}
