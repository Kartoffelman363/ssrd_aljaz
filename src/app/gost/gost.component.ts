import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gost',
  templateUrl: './gost.component.html',
  styleUrls: ['./gost.component.css']
})
export class GostComponent {
  vnos = new FormGroup({
    ime:      new FormControl('', [Validators.required]),
    priimek:  new FormControl('', [Validators.required]),
    naslov :  new FormControl('', [Validators.required]),
    opis :    new FormControl('', [Validators.required])
  }, [Validators.required]);

  novVnos() {
    const vnos = document.getElementById('vnos');
    const potrditev = document.getElementById('potrditev');

    this.vnos.setValue({
      ime: '',
      priimek: '',
      naslov: '',
      opis: ''
    });

    vnos!.style.display = 'block';
    potrditev!.style.display = 'none';
  }

  dataSave() {
    const vnos = document.getElementById('vnos');
    const potrditev = document.getElementById('potrditev');
    const uuid = crypto.randomUUID();

    var dela = [];
    if(sessionStorage.getItem('dela') !== null)
      dela = JSON.parse(sessionStorage.getItem('dela')!);
    dela.push({
      'ime': this.vnos.controls.ime.value,
      'priimek': this.vnos.controls.priimek.value,
      'naslov': this.vnos.controls.naslov.value,
      'opis': this.vnos.controls.opis.value,
      'ocena': null
    });

    console.log(dela.length);

    sessionStorage.setItem('dela', JSON.stringify(dela));

    vnos!.style.display = 'none';
    potrditev!.style.display = 'block';
  }
}
