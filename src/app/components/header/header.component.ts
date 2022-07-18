import { Component, OnInit } from '@angular/core';
import { UiServiceService } from '../../services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'crash-course-tasks';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value
    })
  }

  ngOnInit(): void {
  }

  toggleToAddTask() {
    // console.log(123)
    this.uiService.toggleAddTask()
  }
}
