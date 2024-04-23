import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SandboxComponent } from './sandbox/sandbox.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SandboxComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
