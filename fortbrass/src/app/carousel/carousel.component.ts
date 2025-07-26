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

  visibleItems = [...this.items]; // começa com todos
  currentIndex = 0;
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
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * (100 / 4)}%)`; // 4 itens por vez
  }

  moveRight() {
    this.resetAutoSlide();
    this.transitionStyle = 'transform 0.5s ease-in-out';
    this.currentIndex++;

    setTimeout(() => {
      if (this.currentIndex > 0) {
        this.transitionStyle = 'none';
        const first = this.visibleItems.shift();
        if (first) this.visibleItems.push(first);
        this.currentIndex = 0;
      }
    }, 500);
  }

  moveLeft() {
    this.resetAutoSlide();
    this.transitionStyle = 'transform 0.5s ease-in-out';
    this.currentIndex--;

    setTimeout(() => {
      if (this.currentIndex < 0) {
        this.transitionStyle = 'none';
        const last = this.visibleItems.pop();
        if (last) this.visibleItems.unshift(last);
        this.currentIndex = 0;
      }
    }, 500);
  }


  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.moveLeft(), this.autoSlideDelay);
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide(); // reinicia com 5s
  }
}
