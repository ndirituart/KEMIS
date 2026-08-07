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
  activeView: 'landing' | 'home' | 'add-learner' = 'landing';

  section1Choice = 'no';
  section2Choice = 'no';
  section3Choice = 'no';

  setView(view: 'landing' | 'home' | 'add-learner') {
    this.activeView = view;
  }
}
