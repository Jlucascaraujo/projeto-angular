import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Sidenavbar } from './sidenavbar/sidenavbar';
import { Mainpgbody } from "./mainpgbody/mainpgbody";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidenavbar, Footer, Mainpgbody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-angular');

  productList:IProduct [] = [
{
    productShotName: "Console PS5",
    longName: "Console PlayStation 5 Core - 825GB SSD",
    categoryName: "Consoles",
    description: "Experimente o carregamento extremamente rápido do SSD de ultra-alta velocidade e uma imersão mais profunda com suporte para feedback tátil.",
    sku: "PS5-CORE-001",
    price: 4499.90,
    thumbnailImage: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400",
    isInStock: true
  },
  {
    productShotName: "Mouse Gamer RGB",
    longName: "Mouse Gamer Logitech G502 Hero High Performance",
    categoryName: "Periféricos",
    description: "Sensor HERO de última geração com rastreamento de até 25.600 DPI e 11 botões programáveis.",
    sku: "LOGI-G502-RGB",
    price: 350.00,
    thumbnailImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400",
    isInStock: true
  },
  {
    productShotName: "Elden Ring",
    longName: "Elden Ring: Shadow of the Erdtree Edition - PC",
    categoryName: "Jogos",
    description: "Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
    sku: "GAME-ER-PC-02",
    price: 299.00,
    thumbnailImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400",
    isInStock: true
  },
  {
    productShotName: "Teclado Mecânico",
    longName: "Teclado Mecânico Gamer Razer BlackWidow V4",
    categoryName: "Periféricos",
    description: "Sinta a diferença com o teclado mecânico que iniciou tudo, agora com switches amarelos lineares e silenciosos.",
    sku: "RAZER-BW-V4",
    price: 899.90,
    thumbnailImage: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400",
    isInStock: false
  },
  {
    productShotName: "Nintendo Switch",
    longName: "Console Nintendo Switch OLED - Branco",
    categoryName: "Consoles",
    description: "Nova tela OLED de 7 polegadas, suporte ajustável amplo e áudio aprimorado para jogar onde quiser.",
    sku: "NINT-SW-OLED",
    price: 2100.00,
    thumbnailImage: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=400",
    isInStock: true
  }
];

}

export interface IProduct {
  productShotName: string;
  longName: string;
  categoryName: string;
  description: string;
  sku: string;
  price: number;
  thumbnailImage: string;
  isInStock: boolean;
}

