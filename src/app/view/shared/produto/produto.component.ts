import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  cadastroForm: FormGroup;
  porcentagem: number;
  total: number;
  custo: number;
  totalPorItem: number;

  constructor() { }

  ngOnInit(): void {
    this.formComponent();
  }

  formComponent() {
    this.cadastroForm = new FormGroup({
      material: new FormControl((''), [Validators.required]),
      maoObra: new FormControl((''), [Validators.required]),
      quantidade: new FormControl((''), [Validators.required]),
      porcentagem: new FormControl((''), [Validators.required]),
    });
  }

  numberOnly(event): boolean {
    return this.formatInputNumber(event);
  }

  formatInputNumber(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  calcular() {
    this.custo = Number(this.cadastroForm.controls.material.value) + Number(this.cadastroForm.controls.maoObra.value);
    this.porcentagem = this.custo * ((Number(this.cadastroForm.controls.porcentagem.value) / 100));
    this.total = this.custo + this.porcentagem;
    this.totalPorItem = this.total / Number(this.cadastroForm.controls.quantidade.value);
  }

}
