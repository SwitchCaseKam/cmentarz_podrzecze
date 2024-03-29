import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()
  public numberOfAllMen: number;
  @Input()
  public numberOfAllWomen: number;

  public pieChartLabels = ['Kobiety', 'Mężczyźni'];
  public pieChartData: number[];
  public pieChartType = 'pie';

  constructor() { }

  public ngOnInit(): void {
    this.pieChartData = [this.numberOfAllWomen, this.numberOfAllMen];
  }

}

// The ISC License (ISC)

// Copyright (c) 2015-2017 Dmitriy Shekhovtsov <valorkin@gmail.com>
// Copyright (c) 2015-2017 Valor Software

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
// SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
// RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
// NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE
// USE OR PERFORMANCE OF THIS SOFTWARE.
