"use strict";(self.webpackChunkpagina_ecommerce=self.webpackChunkpagina_ecommerce||[]).push([[618],{2618:(b,h,a)=>{a.r(h),a.d(h,{CarinhoModule:()=>v});var l=a(6895),s=a(9541),t=a(1571),d=a(5087),g=a(269),c=a(433);function m(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"label"),t._uU(7," Quantidade: "),t.TgZ(8,"input",7),t.NdJ("ngModelChange",function(r){const u=t.CHM(n).$implicit;return t.KtG(u.quantidade=r)})("change",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.calcularTotal())}),t.qZA()(),t.TgZ(9,"button",8),t.NdJ("click",function(){const p=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.RemoverItem(p.id))}),t._UZ(10,"i",9),t.qZA()()}if(2&o){const n=i.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.Oqu(n.descricao),t.xp6(2),t.hij("Pre\xe7o: R$ ",n.preco,""),t.xp6(3),t.Q6J("ngModel",n.quantidade)}}function C(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,m,11,4,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.comprar())}),t._uU(6,"Comprar"),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij("total: R$ ",n.total,"")}}function f(o,i){1&o&&(t.TgZ(0,"div",10)(1,"div",11)(2,"h1"),t._uU(3,"voce ainda n\xe3o adcionou nem um produto ao carrinho"),t.qZA(),t.TgZ(4,"a",12)(5,"button",13),t._uU(6,"PRODUTOS"),t.qZA()()()())}const _=[{path:"",component:(()=>{class o{constructor(n,e,r){this.CarrinhoService=n,this.notificaoCompra=e,this.router=r,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.CarrinhoService.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((n,e)=>n+e.preco*e.quantidade,0)}RemoverItem(n){this.itensCarrinho=this.itensCarrinho.filter(e=>e.id!==n),this.CarrinhoService.RemoverItem(n),this.calcularTotal()}comprar(){this.notificaoCompra.notificar("Compra efetuada com sucesso"),this.CarrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.e),t.Y36(g.r),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-carinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],["alt","",3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"],[1,"container"],["id","semProduto"],["href","http://localhost:4200/produtos"],[1,"produto"]],template:function(n,e){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"carrinho"),t.qZA(),t.YNc(2,C,7,2,"div",1),t.YNc(3,f,7,0,"ng-template",null,2,t.W1O)),2&n){const r=t.MAs(4);t.xp6(2),t.Q6J("ngIf",e.itensCarrinho.length>0)("ngIfElse",r)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}#semProduto[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;display:flex;text-align:center;align-items:center;justify-content:center;flex-direction:column;width:650px;height:100px;font-weight:700;color:#ffa600;border-radius:20px;background-color:#001affe1}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.produto[_ngcontent-%COMP%]{background-color:#ffa600;border:none;width:100px;height:20px;font-weight:700;color:#fff;border-radius:7px;cursor:pointer}"]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(_),s.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,x,c.u5]}),o})()}}]);