import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduit } from 'src/app/Iproduit.model';
import { ProduitService } from 'src/app/produit.service';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  produits: IProduit = {
    id: 0,
    nom: '',
    prix: 0,
    details: ''
  };
  addProduit(): void{
    this.produitService.addProduit(this.produits).subscribe(
      res => {
        this.produits = res;
      },
       err => {
         return console.log(err);
       }
     );
     this.router.navigate(['/produits']);
  }
  constructor(private produitService:ProduitService, private router: Router) { }
  ngOnInit(): void {
  }

}
