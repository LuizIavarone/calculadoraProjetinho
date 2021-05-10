import { Injectable } from '@angular/core';

export interface Item{
  id: number,
  nome: string,
  idade: number,
  email: string,
  senha1: string
}

const ITEMS_KEYS = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  
  //Funções CRUD

  //Create
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEYS).then((items: Item[]) => {
      if(items){
        items.push(item);
        return this.storage.set(ITEMS_KEYS, [item]);
      }else{
        return this.storage.set(ITEMS_KEYS, [item]);
      }
    });
  }

  //Read
  getItems(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEYS);
  }

  //Update
  updateItem(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEYS).then((items: Item[]) => {
     if(!items || items.length === 0){
       return null;
     }

     let newItems: Item[] = [];

     for(let i of items){
       if(i.id === item.id){
         newItems.push(item);
       }else{
        newItems.push(i);
       }
     }

    return this.storage.set(ITEMS_KEYS, newItems);
      
    });
  }

  //Delete
  deleteItem(id:number): Promise<Item>{
    return this.storage.get(ITEMS_KEYS).then((items: Item[]) => {
      if(!items || items.length === 0){
        return null;
      }
      
      let toKeep: Item[] = [];

      for(let i of items){
        if(i.id !== id){
          toKeep.push(i);
        }
      }

      return this.storage.set(ITEMS_KEYS, toKeep);
    });
  }


}
