import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KbqCommonModule } from '@koobiq/components/core';
import { ApiService } from './api.service';

@Component({
  standalone: true,
  imports: [ RouterModule, KbqCommonModule, ],
  selector: 'pt-start-ui-task-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private apiService: ApiService) {

  }
}
