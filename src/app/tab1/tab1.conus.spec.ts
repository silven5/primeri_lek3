import { exception } from "console";

import { Tab1Page, Conus } from './tab1.page';
//обгортка

describe('Conus Testing', () => {
    let conus:Conus;
    //Перед виконанням усіх тестів створимо екземляр класу конус
    beforeEach(()=>
    {
        conus=new Conus("Conus",10,5);
    }
    )
    //тестуємо чи створили екземпляр класу
    it("Створення екземляру класу",()=>{
        
      expect(conus).toBeTruthy();
 
    })
    //тестуємо метод обрахунку площини
    it ("Розрахунок площини конуса з радіусом 10 та висотою 5",()=>{
       conus.S();
       let s=conus.pl;
       let p=Math.PI*Math.sqrt(5*5+10*10)*5;
       expect(s.toFixed(2)).toBe(p.toFixed(2));
    })

});