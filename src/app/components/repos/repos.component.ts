import { Component, Input, OnChanges, OnInit , ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {
  @Input() repoUrl?: string; 
  repos =[];
  constructor(private github:GithubService, 
    private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  } 

  ngOnChanges(): void{

  }
}
