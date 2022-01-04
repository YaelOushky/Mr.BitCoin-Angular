import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storageService } from "./storageService";
const tradeVolumeKEY ='trade-volume'

@Injectable({
  providedIn: 'root'
})

export class BitcoinService{

  constructor(private http : HttpClient) {}

  getBitcoin(){    
    const data = this.http.get("https://blockchain.info/tobtc?currency=USD&value=1")
    return data
  }
  getMarketPrice() {
    return this.http.get<any>(`https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true`);
  }

  getConfirmedTransactions() {
    return this.http.get<any>(`https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true`);
  }
    //  getConfirmedTransactions() {
    //   let data = storageService.load('market-price');
      
    //   if (!data.length) {
    //     const chartData =  this.http.get(
    //       `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
    //       );
    //       console.log('from API');
    //       // data = chartData.data;
    //       storageService.store('market-price', data);
    //     }
    //     else data = JSON.parse(data)
        
    //     console.log('from STORE', data);
    //     return data;
    //   }
      
    //     getMarketPrice() {
    //     let data = storageService.load(tradeVolumeKEY);
        
    //     if (!data.length) {
    //       const chartData =  this.http.get(
    //         `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    //         );
    //         console.log('from API');
    //         // data = chartData.data;
    //         storageService.store(tradeVolumeKEY, data);
    //       }
    //       else data = JSON.parse(data)
          
    //       console.log('from STORE', data);
    //       return data;
    //     }
        
      }