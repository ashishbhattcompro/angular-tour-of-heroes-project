import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  lang: string | undefined;
  constructor() { }

  ngOnInit(): void {
      this.lang = localStorage.getItem('lang') || "en-US";
  }

  changeLang(lang: string){
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
