import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  myForm: FormGroup;
  ufs: string[] = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  isPrestadoraSim = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nome: [''],
      profissao: [''],
      descricao: [''],
      endereco: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],
      prestadora: ['sim'],
      servicos: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.onPrestadoraChange({ target: { value: 'sim' } });
  }

  get servicos(): FormArray {
    return this.myForm.get('servicos') as FormArray;
  }

  addServico() {
    this.servicos.push(this.fb.control(''));
  }
  
  removeServico(index: number) {
    this.servicos.removeAt(index);
  }

  onPrestadoraChange(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    this.isPrestadoraSim = selectElement.value === 'sim';

    if (!this.isPrestadoraSim) {
      while (this.servicos.length) {
        this.servicos.removeAt(0);
      }
    }
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
