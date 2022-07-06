import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  currrencyCode = localStorage.getItem("lang") || "en-US";
  btnState:boolean=false;
  myForm: FormGroup;
  heroForm!: FormGroup<{ name: FormControl<string | null>; }>;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.myForm = this.fb.group({
      allheroes: this.fb.array([this.fb.control('')])
    })
  }

  get allheroes() {
    return this.myForm.controls['allheroes'] as FormArray;
  }

  ngOnInit(): void {
    this.getHero();
    if(this.hero != undefined){
      this.heroForm = new FormGroup({
        name: new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4)
        ])
      });
    }
  }

  get name() { 
    if(this.heroForm){
      return this.heroForm.get('name'); 
    }
    return null;
  }

  onInput(){
    if(this.hero != undefined && this.hero.name.length >= 4){
      let count = 0;
      for(let i = 0; i < this.hero.name.length; i++){
        if((this.hero.name.charAt(i) >= 'a' && this.hero.name.charAt(i) <= 'z') || (this.hero.name.charAt(i) >= 'A' && this.hero.name.charAt(i) <= 'Z')){
          count++;
        }
      }
      this.btnState = count >= 4 ? false : true;
    }
    else{
      this.btnState = true;
    }
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}