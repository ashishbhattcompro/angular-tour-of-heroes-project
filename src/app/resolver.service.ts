import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): boolean{
    let val = route.paramMap.get('id');
    
    return true;
  }
}

