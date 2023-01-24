import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css']
})
export class CarinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public CarrinhoService: CarrinhoService,
    private notificaoCompra: NotificacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.CarrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce ((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  RemoverItem(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId );
    this.CarrinhoService.RemoverItem(produtoId);
    this.calcularTotal()
  }

  comprar() {
    this.notificaoCompra.notificar("Compra efetuada com sucesso");
    this.CarrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])
  }

}
