import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../services/service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {combineAll, Observable} from "rxjs";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  // @ts-ignore
  public cp:any=[];
  public donner= {};
  // @ts-ignore
  public listeOperation:any=  [];

  rechercheForm = new FormGroup({

    codeCompte: new FormControl('', [Validators.required,Validators.maxLength(20)]),

  });




  constructor(public serviceService: ServiceService) {

  }

  ngOnInit(): void {

    //this.getListeOperation();
     this.getAll();
  //  this.getAllClient();

  }


 getAll(){
    this.serviceService.getAll().subscribe(res=>{
      console.log("listes des comptes", res)
    }),(err: any) => console.log(err)
  }
  getCodeCompte(){
    // @ts-ignore
    return this.rechercheForm.get('codeCompte').value;
  }
  getAllClient(){

    this.serviceService.getAllClient().subscribe(res=>{
      console.log("listes client", res)
     //this.cp=res;
  //    console.log("this" , this.cp)
    }),(err: any) => console.log(err)
  }
  getListeOperation() {

    this.serviceService.getListeOperation().subscribe(res=>{
      console.log("listes operations", res)
       this.listeOperation=res;
    }),(err: any) => console.log(err)
  }


  rechercher() {

    const donner= {
        //codeCompte:this.code.value,
       codeCompte:this.getCodeCompte(),
      }
     var codeCompte=this.getCodeCompte();
    //  this.donner=donner;
    this.serviceService.consulter(donner).subscribe(res => {

         this.cp = donner;
        console.log("ress" , res)
        console.log("ress" , this.cp)

    }), (err: any) => console.log(err)}


}
