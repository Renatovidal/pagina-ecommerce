"use strict";(self.webpackChunkpagina_ecommerce=self.webpackChunkpagina_ecommerce||[]).push([[304],{4304:(b,s,i)=>{i.r(s),i.d(s,{ProdutosModule:()=>C});var a=i(6895),u=i(9541),o=i(1571),g=i(6684);let l=(()=>{class t{constructor(){this.produtos=g.X}getAll(){return this.produtos}getOne(n){return this.produtos.find(e=>e.id===n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=i(269),m=i(5087),c=i(433);let _=(()=>{class t{constructor(n,e,d,p){this.produtosService=n,this.route=e,this.notificacaoService=d,this.carrinhoService=p,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(e)}adicionarAoCarrinho(){this.notificacaoService.notificar("o produto foi adicionado ao carrinho");const n={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(n)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l),o.Y36(u.gz),o.Y36(h.r),o.Y36(m.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhes-produto"]],decls:19,vars:5,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],["type","button",3,"click"],[1,"fa-sharp","fa-solid","fa-cart-shopping"]],template:function(n,e){1&n&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.qZA(),o.TgZ(8,"p"),o._uU(9,"Estoque disponivel:"),o.qZA(),o.TgZ(10,"label"),o._uU(11," Quantidade: "),o.TgZ(12,"input",6),o.NdJ("ngModelChange",function(p){return e.quantidade=p}),o.qZA(),o._uU(13," unidade (s) "),o.qZA(),o.TgZ(14,"p",7),o._uU(15),o.qZA(),o.TgZ(16,"button",8),o.NdJ("click",function(){return e.adicionarAoCarrinho()}),o._uU(17,"Adicionar ao carinho "),o._UZ(18,"i",9),o.qZA()()()),2&n&&(o.xp6(2),o.Q6J("src",null==e.produto?null:e.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==e.produto?null:e.produto.descricao),o.xp6(2),o.hij("R$ ",null==e.produto?null:e.produto.preco,""),o.xp6(5),o.Q6J("ngModel",e.quantidade),o.xp6(3),o.hij(" ",null==e.produto?null:e.produto.quantidadeEstoque," unidade (s) em Estoque"))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;transition:.3 all;margin:20px 0;cursor:pointer;width:280px;height:50px;border-radius:10px}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),t})();function f(t,r){if(1&t&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.qZA(),o.TgZ(7,"p",7),o._uU(8),o.qZA(),o.TgZ(9,"button",8),o._uU(10,"Comprar"),o.qZA()()()),2&t){const n=r.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",n.id,""),o.xp6(1),o.Q6J("src",n.imagem,o.LSH),o.xp6(2),o.hij(" ",n.descricao," "),o.xp6(2),o.hij(" R$ ",n.preco," "),o.xp6(2),o.hij(" ",n.descricaoPreco," ")}}const P=[{path:"",component:(()=>{class t{constructor(n,e){this.ProdutoService=n,this.route=e}ngOnInit(){const n=this.ProdutoService.getAll();this.route.queryParamMap.subscribe(e=>{const d=e.get("descricao")?.toLowerCase();this.produtos=d?n.filter(p=>p.descricao.toLowerCase().includes(d)):n})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(l),o.Y36(u.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(n,e){1&n&&(o.TgZ(0,"section",0),o.YNc(1,f,11,5,"div",1),o.qZA()),2&n&&(o.xp6(1),o.Q6J("ngForOf",e.produtos))},dependencies:[a.sg,u.yS],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{border-radius:7px;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),t})()},{path:":id",component:_}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(P),u.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.ez,x,c.u5]}),t})()}}]);