import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
