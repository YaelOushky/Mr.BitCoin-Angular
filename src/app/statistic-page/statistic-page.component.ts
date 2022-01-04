import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadUser } from '../services/UserService';
import { BitcoinService } from '../services/BitcoinService';

interface DateFormat {
  year: '2-digit'
  month: '2-digit'
  day: '2-digit'
}


@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent implements OnInit {
  user;
  newMarketData: Array<Array<any>>;
  marketTableTitle: string;
  newTransactionsData: Array<Array<any>>;
  transactionsTableTitle: string;
  constructor(private router: Router, private BitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.user = loadUser();
    if (!this.user.name) {
      this.router.navigateByUrl('login');
      return;
    }
    this.BitcoinService.getMarketPrice().subscribe((result) =>
      this.filterMarketData(result)
    );
    this.BitcoinService.getConfirmedTransactions().subscribe((result) =>
      this.filterTransactionsData(result)
    );
  }
  filterMarketData(result): void {
    this.newMarketData = this._filterData(result);
    this.marketTableTitle = result.name + ' - ' + result.description;
  }

  filterTransactionsData(result): void {
    this.newTransactionsData = this._filterData(result);
    this.transactionsTableTitle = result.name + ' - ' + result.description;
  }

  _filterData(result) {
    return result.values.map(value => {
      const options = { year: '2-digit', month: '2-digit', day: '2-digit' } as DateFormat;
      let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
      let bitCoinRate = value.y;
      return [date, bitCoinRate];
    })
  }
}
