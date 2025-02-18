import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['SpiderMan','SheHulk','IronMan','Hulk','Thor'];
  public deletedHero?: string;
  removeLastHero():void{
    //this.heroNames.shift();//elimina el primer elemento
    this.deletedHero = this.heroNames.pop();//elimina el último elemento
    //console.log({deletedHero});
  }
}
