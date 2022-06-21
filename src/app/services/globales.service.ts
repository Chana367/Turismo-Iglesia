import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {
  turismos: any = []; 
  favorito: any= ['rodeo','villa iglesia'];

  constructor(public storage: Storage) { 
      this.crear();
      //  this.clear();
  }

  
  async crear()
  {
    await this.storage.create();

  }
    
// set a key/value

async setString(key: string, value: any): Promise<any> {
    try {
    const result = await this.storage.set(key, value);
    console.log('set string in storage: ' + result);
    return true;
    } catch (reason) {
    console.log(reason);
    
    return false;
    
    }
}
  
  // to get a key/value pair
  
async getString(key: string): Promise<any> {
  try {
  const result = await this.storage.get(key);
  console.log('storageGET: ' + key + ': ' + result);
  if (result != null) {
  return result;
  }
  
  return null;
  } catch (reason) {
  
  console.log(reason);
  return null;
  
  }
}
  
  // set a key/value object
  
  async set(key: string, object: Object) {
    
    try {
    
      const result = await this.storage.set(key, JSON.stringify(object));
      console.log('set Object in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  
  // get a key/value object
  
  async get(key: string): Promise<any> {
     try {
      const result = await this.storage.get(key);
      if (result != null) {
      return JSON.parse(result);
    }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  
  // remove a single key value:
  
remove(key: string) {
  this.storage.remove(key);
}
  
  //  delete all data from your application:
  
clear() 
{
  this.storage.clear();
}
}
