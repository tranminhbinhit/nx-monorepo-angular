import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenuComponent } from './layout/menu/menu.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent],
  selector: 'nx-monorepo-ang-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-monorepo-ang';
}
