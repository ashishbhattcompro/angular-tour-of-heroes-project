import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let val = route.paramMap.get('id');
    if(val != null && parseInt(val)%2 == 0){
      return true;
    }
    else{
      // this.router.navigateByUrl('/guard');
      return false;
    }
    throw new Error('Method not implemented.');
  }
}
