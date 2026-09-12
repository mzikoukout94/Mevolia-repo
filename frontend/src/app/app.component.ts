import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#main">Aller au contenu principal</a>
    <app-header />
    <main id="main"><router-outlet></router-outlet></main>
    <app-footer />
  `,
  styles: [`
    :host { display: flex; flex-direction: column; min-height: 100dvh; }
    main { flex: 1; }
    .skip-link {
      position: absolute; left: 16px; top: -60px; z-index: 200;
      background: var(--terracotta); color: #fff; padding: 10px 18px;
      border-radius: var(--r-pill); font-weight: 700; transition: top 0.2s ease;
    }
    .skip-link:focus { top: 12px; }
  `],
})
export class AppComponent {}
