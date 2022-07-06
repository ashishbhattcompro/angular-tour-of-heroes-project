import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang("en");
    this.translateService.use(localStorage.getItem('lang') || "en");
  }
  // title = 'tour of heroes';
}