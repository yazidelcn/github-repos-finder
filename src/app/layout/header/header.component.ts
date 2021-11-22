import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { faHome, faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any;
  faHome = faHome;
  faGithub = faGithub;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;

  constructor(private auth:AuthService,
              private toastr:ToastrService,
              private router:Router) { 
                auth.getUser().subscribe(
                  (user) => {
                    this.email = user?.email;
                  }
                )
              }

  ngOnInit(): void {

  }

  async handleSignout(){
    try{
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Login Again if you wish to continue');
      this.email = null;
    }
    catch (error){
      this.toastr.error('Something went wrong');
    }
  }

}
