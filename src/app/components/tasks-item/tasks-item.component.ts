import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task
  // faTimes = faTimes;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task) {
    // 
    this.onDeleteTask.emit(task)
  }

}
