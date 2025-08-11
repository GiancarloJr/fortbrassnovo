import { Component, HostListener, Input } from '@angular/core';

export interface NewsItem {
  id: string | number;
  title: string;
  imageUrl: string;
  link?: string;
  ctaLabel?: string; // ex: "Ler mais"
}

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent {
  @Input() items: NewsItem[] = [];
  @Input() autoSlideMs = 0;         // 0 = desativado, ex: 5000 para auto-slide
  @Input() visible = 3;              // quantos cards aparecem

  current = 0;
  private timer?: any;

  ngOnInit() {
    if (this.autoSlideMs && this.autoSlideMs > 0) {
      this.startAuto();
    }
  }

  ngOnDestroy() {
    this.stopAuto();
  }

  private startAuto() {
    this.stopAuto();
    this.timer = setInterval(() => this.next(), this.autoSlideMs);
  }
  private stopAuto() {
    if (this.timer) clearInterval(this.timer);
  }
  resetAuto() {
    if (this.autoSlideMs && this.autoSlideMs > 0) this.startAuto();
  }

  prev() {
    this.current = (this.current - 1 + this.items.length) % this.items.length;
    this.resetAuto();
  }

  next() {
    this.current = (this.current + 1) % this.items.length;
    this.resetAuto();
  }

  get visibleItems(): NewsItem[] {
    if (!this.items?.length) return [];
    const out: NewsItem[] = [];
    for (let i = 0; i < Math.min(this.visible, this.items.length); i++) {
      out.push(this.items[(this.current + i) % this.items.length]);
    }
    return out;
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }

  onCtaClick(item: NewsItem) {
    if (item.link) window.open(item.link, '_blank');
  }
}
