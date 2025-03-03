import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaServiceService } from 'src/app/service/pessoaService/pessoa-service.service';

@Component({
  selector: 'app-components-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.scss'],
})
export class CreatePessoaComponent {
  pessoa: Pessoa = new Pessoa();
  constructor(private pessoaService: PessoaServiceService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.pessoa);
  }
}
