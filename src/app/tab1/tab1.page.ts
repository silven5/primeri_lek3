import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  //поліморфний контейнер
  figure:Figure3D[];
  //максимальне значення
  max:number=0;
  constructor() {}
  //Генерація випадкових цілих чисел від 0 до макс
  //вхід - макс
 getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //функція проведення розрахунків
  //вхід - кількість елементів у поліморфному контейнері
ras(nn:string)
{
  //створюємо масив фігур
  this.figure=new Array();
  //отримуємо введене значення 
  let n=parseInt(nn);
//у циклі
  for(let i=0;i<2*n;i++)
  {
    //додаємо у контейнер Конус
    this.figure.push(new Conus("Конус",this.getRandomInt(10),this.getRandomInt(20)));
    //додажмо до контейнеру піраміду
    this.figure.push(new Piramid("Піраміда",this.getRandomInt(10),this.getRandomInt(20)));
  }
  this.max=0;
  //шукаємо фігуру з максимальною площею
  this.figure.forEach((element)=>{
   element.S();
    if (this.max<element.pl) this.max=element.pl;
  console.log(element.show())});
  console.log(this.max);
 
}
//функція для покраски максимального елементу у зелений
//вхід 
//el - поточний елемент
//max - максимальне значення
getColor(el:number,max:number)
{

  return (Math.abs(el-max)<0.01) ? "green" : "";
}
}
abstract class Figure3D {
  naz:string;
  h:number;
  pl:number;
  parameter:number;
  constructor() {}
  show()
  {
    return "Назва="+this.naz+" "+" Висота="+this.h.toFixed(2)+" Площа="+this.pl.toFixed(2);
  }
  abstract S();
}
 export class Conus extends Figure3D
{
   
  constructor(public naz:string,public h:number,public parametr:number)
  {
    super();
  }

  S()

  {
    let l;
    l=Math.sqrt(this.parametr*this.parametr+this.h*this.h);
    this.pl= Math.PI*this.parametr*l;

  }

}
class Piramid extends Figure3D
{

  constructor(public naz:string,public h:number,public parametr:number)
  {
    super();
  }

  S()

  {
    let s4,s0;
    s4=0.5*this.parametr*this.h;
    s0=this.parametr*this.parametr;
    this.pl= 4*s4+s0;

  }

}

