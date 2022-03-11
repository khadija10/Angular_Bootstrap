import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IProduit } from './Iproduit.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url: string = 'http://localhost:3000/produits';

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  getAll(){
    return this.http.get<IProduit[]>(this.url).pipe(
      map(data => data),
      catchError(erro => this.error(erro))
    );
    window.location.reload();
  }
  addProduit(a:IProduit){
    return this.http.post<IProduit>(this.url,a).pipe(
      map(data => data),
      catchError(erro => this.error(erro))
    );
  }
  getById(id: number){
    return this.http.get<IProduit>(`${this.url}/${id}`);
  }
  
  updateProduit(a:IProduit, id: number){
    return this.http.put<IProduit>(this.url+'/'+id,a).pipe(
      map(data => data),
      catchError(erro => this.error(erro))
    );
  }

  deleteProduit(id: number){
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      map(data => data),
      catchError(erro => this.error(erro))
    );
  }  
  error(e: any){
    this.showConfirm('ERRO!!!!!', 'impossible', 'toaster-err');
    return EMPTY;
  }

  showConfirm(titre: string, message: string, type: string){
    this.toastr.show(message, titre, { closeButton: true, progressBar: true}, type);
  }
  
}
