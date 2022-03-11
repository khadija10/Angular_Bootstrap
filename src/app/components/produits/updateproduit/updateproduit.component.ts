import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  @Output() produitToUpdate:EventEmitter<any> = new EventEmitter();
  handleUpdate(myForm:NgForm): void{
    this.produitToUpdate.emit(myForm.value);
    myForm.reset();
  }

  @Input() modpro :any = {}

  constructor() { }



  ngOnInit(): void {
  }

}
