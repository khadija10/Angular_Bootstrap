import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduit } from 'src/app/Iproduit.model';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {

  produits: Array<IProduit>= [];
  produitsRecherche: Array<IProduit> = [];
  recherche: boolean =false;
  

  detaille: any = {};
  mode: any = {};
  del: any = {};

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getAll().subscribe(data =>this.produits = data);
  }
  detailler(index: number){
    this.detaille = this.produits[index];
  }

  updateproduit(produit:IProduit){
    this.produitService.updateProduit(produit, this.mode.id).subscribe(() =>
        this.updateproduit(produit)
    );

    window.location.reload();
  }
  modif(index: number){
    this.mode = this.produits[index];
  }
  dell(index: number){
    this.del = this.produits[index];
  }

  handleSearch(myForm:NgForm){
    this.produitsRecherche = [];
    
    for(var i = 0; i < this.produits.length; i++){
      if(this.produits[i].nom == myForm.value.nom) 
        this.produitsRecherche.push(this.produits[i]);
    }

    if(this.produitsRecherche.length==0){
      alert('Aucun produit trouvé pour ce nom');
      this.recherche = false;
    }else{
      this.rechercherProduit(1);
    }
    
  
  }
  rechercherProduit(indice: number){
    indice == 1 ? this.recherche = true : this.recherche = false;
  }
  
  delete(id: number) {
    this.produitService.deleteProduit(id).subscribe(() =>{
        this.produitService.showConfirm('Produit', 'supprimer avec succes', 'Action');
    }
    );
    window.location.reload();
  }

}