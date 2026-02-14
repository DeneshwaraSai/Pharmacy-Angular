import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppService],
})
export class AppComponent {
  title = 'angular-practice';

  jsonHolderInfo: any[] = [];
  id: number = 1;

  constructor(private appService: AppService) {
    this.id = 1;
    this.getAPIData(this.id);
  }

  getById() {
    this.getAPIData(this.id);
  }

  getAPIData(id: number = 0) {
    this.appService.getAPIData(id).subscribe({
      next: (data) => {
        if (data) {
          this.jsonHolderInfo = [data];
        } else {
          this.jsonHolderInfo = [];
        }
      },
      error: (error) => {},
    });
  }
}
