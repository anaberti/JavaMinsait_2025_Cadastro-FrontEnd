import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from 'src/app/service/pessoaService/pessoa-service.service';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-components-update-pessoa',
  templateUrl: './update-pessoa.component.html',
  styleUrls: ['./update-pessoa.component.scss'],
})
export class UpdatePessoaComponent implements OnInit {
  pessoa_id: number;
  pessoa: Pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pessoa_id = 0;
  }

  ngOnInit(): void {
    this.pessoa_id = this.route.snapshot.params['pessoa_id'];
    this.pessoaService.getPessoaById(this.pessoa_id).subscribe({
      next: (data) => {
        this.pessoa = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(): void {
    this.pessoaService.updatePessoa(this.pessoa_id, this.pessoa).subscribe({
      next: (data) => {
        this.goToPessoasList();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  goToPessoasList(): void {
    this.router.navigate(['/pessoas']);
  }
}
