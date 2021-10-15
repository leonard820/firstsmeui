import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.page.html',
  styleUrls: ['./documentation.page.scss'],
})
export class DocumentationPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  BackButton2(){
    console.log("button is clicked");
    this.router.navigate(['tabs'])
  }
}
