import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { layoutService } from '../../layout/layout.service';

@Injectable()
export class ContatoResolve implements Resolve<any> {


  constructor(private router: Router, private layoutService: layoutService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = 1;
console.log('sdfs');
    return new Observable(observer => {
      this.layoutService.getContato(id).subscribe(data => {
        observer.next(data);
        observer.complete();
      }, error => {
        observer.error(error);
        this.router.navigate(['']);
        alert('Error ao realizar consulta');
      });
    });
  }
}