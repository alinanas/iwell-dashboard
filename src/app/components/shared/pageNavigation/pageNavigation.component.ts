import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: 'pageNavigation.component.html',
  standalone: true,
})
export class PageNavigationComponent {
  @Output() refreshData = new EventEmitter();
}
