import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-error-pers',
  templateUrl: './error-pers.component.html',
  styleUrls: ['./error-pers.component.css']
})
export class ErrorPersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volverHome(){

    this.router.navigate(['']);

  }

}
