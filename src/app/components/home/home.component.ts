import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  public userRole: string | null

    constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.authService.getRole();
  }


}
