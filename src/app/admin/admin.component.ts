import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, RadioControlValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{
  el = [
    {ime: '', priimek: '', naslov: '', opis: '', ocena: 0},
    {ime: '', priimek: '', naslov: '', opis: '', ocena: 0},
    {ime: '', priimek: '', naslov: '', opis: '', ocena: 0},
    {ime: '', priimek: '', naslov: '', opis: '', ocena: 0},
    {ime: '', priimek: '', naslov: '', opis: '', ocena: 0}
  ];
  ocenaGroup1 = new FormGroup({
    ocena : new FormControl('', [Validators.required])
  });
  ocenaGroup2 = new FormGroup({
    ocena : new FormControl('', [Validators.required])
  });
  ocenaGroup3 = new FormGroup({
    ocena : new FormControl('', [Validators.required])
  });
  ocenaGroup4 = new FormGroup({
    ocena : new FormControl('', [Validators.required])
  });
  ocenaGroup5 = new FormGroup({
    ocena : new FormControl('', [Validators.required])
  });
  stran:number = 0;

  posodobi(premik:number) {
    var dela;
    if (sessionStorage.getItem('dela') !== null)
      dela = JSON.parse(sessionStorage.getItem('dela')!);
    else
      dela = [];

    if(!(this.stran + premik < 0 || this.stran + premik > (dela.length-1)/5))
      this.stran += premik;

    //Paginacija
    var i:number;
    for(i = 0; i < 5 && i < dela.length - (this.stran*5); i+=1) {      
      this.el[i] = dela[i + (this.stran * 5)];
      document.getElementById(`blok${i+1}`)!.style.display = 'block';
      var dok = (document.getElementById(`ocena${i+1}`) as HTMLInputElement);
      if(dela[i + (this.stran * 5)].ocena !== null){
        dok.value = dela[i + (this.stran * 5)].ocena;
      } else {
        dok.value = '';
      }
    }

    //Skrije odvečne elemente
    for(; i < 5; i++) {
      document.getElementById(`blok${i+1}`)!.style.display = 'none';
    }
  }

  shraniOceno1() {
    var dela = JSON.parse(sessionStorage.getItem('dela')!);
    dela[this.stran*5].ocena = this.ocenaGroup1.controls.ocena.value;
    sessionStorage.setItem('dela', JSON.stringify(dela));
    (document.getElementById(`submit1`) as HTMLInputElement).disabled = true;
  }

  shraniOceno2() {
    var dela = JSON.parse(sessionStorage.getItem('dela')!);
    dela[(this.stran*5)+1].ocena = this.ocenaGroup2.controls.ocena.value;
    sessionStorage.setItem('dela', JSON.stringify(dela));
    (document.getElementById(`submit2`) as HTMLInputElement).disabled = true;
  }
  
  shraniOceno3() {
    var dela = JSON.parse(sessionStorage.getItem('dela')!);
    dela[(this.stran*5)+2].ocena = this.ocenaGroup3.controls.ocena.value;
    sessionStorage.setItem('dela', JSON.stringify(dela));
    (document.getElementById(`submit3`) as HTMLInputElement).disabled = true;
  }

  shraniOceno4() {
    var dela = JSON.parse(sessionStorage.getItem('dela')!);
    dela[(this.stran*5)+3].ocena = this.ocenaGroup4.controls.ocena.value;
    sessionStorage.setItem('dela', JSON.stringify(dela));
    (document.getElementById(`submit4`) as HTMLInputElement).disabled = true;
  }

  shraniOceno5() {
    var dela = JSON.parse(sessionStorage.getItem('dela')!);
    dela[(this.stran*5)+4].ocena = this.ocenaGroup5.controls.ocena.value;
    sessionStorage.setItem('dela', JSON.stringify(dela));
    (document.getElementById(`submit5`) as HTMLInputElement).disabled = true;
  }

  ngOnInit(): void {
    this.posodobi(0);
  }
}
