import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-internal-header',
  templateUrl: './internal-header.component.html',
  styleUrls: ['./internal-header.component.scss']
})
export class InternalHeaderComponent implements OnInit {
  userId: number;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.authService.getLoggedInUser().userId
  }
  logout() {
    this.authService.loggOutUser()
    this.router.navigateByUrl('/login')
  }
}
