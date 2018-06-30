import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  getInfo: any[] = [];
  staticUrl: string = "http://piyalidas.in";

  constructor(private projectsData: ProjectsService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.projectsData.getProjects().
    subscribe(
      data => {
        this.getInfo=data.posts;
        console.log('Data:', this.getInfo)
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }  

}
