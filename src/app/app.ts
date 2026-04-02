import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'client';
  
  // Tab Management
  tabs = ['About', 'Experience', 'Projects', 'Skills'];
  activeTab = signal('About');

  setTab(tab: string) {
    this.activeTab.set(tab);
  }
}
