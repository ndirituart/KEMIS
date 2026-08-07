import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // FormsModule is required for [(ngModel)]
  templateUrl: './app.html',   // <-- MUST match your filename (e.g., ./app.html or ./app.html)
  styleUrl: './app.css'        // <-- MUST match your CSS filename
})
export class App {
  activeView: 'home' | 'add-learner' = 'home';

  section1Choice = 'no';
  section2Choice = 'no';
  section3Choice = 'no';

  setView(view: 'home' | 'add-learner') {
    this.activeView = view;
  }
}
