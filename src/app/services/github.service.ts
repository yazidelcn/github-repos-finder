import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  //https://api.github.com/users/yazidelcn
  constructor(private http:HttpClient) { }

  getUserDetails(userName:string){
    return this.http.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(reposUrl:string){
    return this.http.get(reposUrl);
  }
}
