import { UpdatePessoaComponent } from '../update-pessoa/update-pessoa.component';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaServiceService } from 'src/app/service/pessoaService/pessoa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss'],
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Pessoa[] | undefined;
  birthdate: Date = new Date(2021, 2, 23);

  constructor(
    private pessoaService: PessoaServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  private getPessoas() {
    this.pessoaService.getPessoasList().subscribe((data) => {
      this.pessoas = data;
    });
  }

  pessoaDetails(pessoa_id: number) {
    this.router.navigate(['pessoa-details', pessoa_id]);
  }

  updatePessoa(pessoa_id: number) {
    this.router.navigate(['update-pessoa', pessoa_id]);
  }

  deletePessoa(pessoa_id: number) {
    this.pessoaService.deletePessoa(pessoa_id).subscribe((data) => {
      console.log(data);
      this.getPessoas();
    });
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function getPessoas() {
  throw new Error('Function not implemented.');
}

function pessoaDetails(pessoa_id: any, number: any) {
  throw new Error('Function not implemented.');
}

function updatePessoa(pessoa_id: any, number: any) {
  throw new Error('Function not implemented.');
}

function deletePessoa(pessoa_id: any, number: any) {
  throw new Error('Function not implemented.');
}
