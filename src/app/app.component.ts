import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  projectTitle="Untitled Project";
  defaultRate="0";
  currencies=['$', '£', '¥', '£', '₹'];
  totalEstimate = 0;
  isViewForm = false;

  estimationCurrency = '$';
  isEdit = false;

  onChange(deviceValue) {
    this.estimationCurrency = deviceValue;

}

onProjectTitleChange (value) {
  this. projectTitle=value;
}

onProjectEstimationChange (value){
  this. defaultRate=value;
}

  tasks=[{
      description: 'Design',
      hours: 0,
      rate: 0,
      estimateFee: 0
      },
      {
        description: 'Development',
        hours: 0,
        rate: 0,
        estimateFee: 0
        },
        {
          description: 'Testing ',
          hours: 0,
          rate: 0,
          estimateFee: 0
          }];

  addTask() {
      this.tasks.push({
        description: '',
        hours: 0,
        rate: 0,
        estimateFee: 0
        });
  }

  deleteTask(i) {
    this.tasks.splice(i , 1);
  }

  resetForm() {
    this.projectTitle = '';
    this.defaultRate = '';
    for(var i = 0; i < this.tasks.length; i++){
      this.tasks[i].description = '';
      this.tasks[i].hours = 0;
      this.tasks[i].rate = 0;
      this.tasks[i].estimateFee = 0;

    }
  }

  viewEstimate() {
    this.isViewForm = !this.isViewForm;
  
  }

  calculateEstimate(task) {

    if(task.hours && task.rate) {
      task.estimateFee = task.hours * task.rate;
    }

    this.totalEstimate = 0;
    for(var i = 0; i < this.tasks.length; i++){
      this.totalEstimate = this.totalEstimate + this.tasks[i].estimateFee;
    }
}


}
