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
}
