import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KbqCommonModule } from '@koobiq/components/core';

@Component({
  standalone: true,
  imports: [ RouterModule, KbqCommonModule],
  selector: 'pt-start-ui-task-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pt-start-ui-task';
}
