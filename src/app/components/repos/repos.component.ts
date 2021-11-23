import { Component, Input, OnChanges, OnInit , ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {
  @Input() repoUrl?: string; 
  repos =[];
  faFolder=faFolder;
  
  constructor(private github:GithubService, 
    private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  } 

  ngOnChanges(): void {
    if (this.repoUrl) {
      this.github.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;

          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
