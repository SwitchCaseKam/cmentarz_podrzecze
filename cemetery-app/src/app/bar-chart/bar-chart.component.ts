import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public barChartLabels = ['1943','1944','1945','1946','1947','1948','1949',
  '1950','1951','1952','1953','1954','1955','1956','1957','1958','1959',
  '1960','1961','1962','1963','1964','1965','1966','1967','1968','1969',
  '1970','1971','1972','1973','1974','1975','1976','1977','1978','1979',
  '1980','1981','1982','1983','1984','1985','1986','1987','1988','1989',
  '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999',
  '2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
  '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: ['1','0','0','0','0','0','0',
    '0','0','1','0','0','1','0','0','0','1',
    '1','0','1','0','0','0','0','1','1','2',
    '1','1','2','1','3','2','1','2','1','2',
    '2','2','4','3','2','3','9','11','9','7',
    '5','6','4','6','11','7','4','10','7','5',
    '7','12','8','9','8','11','9','9','13','5',
    '8','11','15','10','12','11','8','6','10','11'], label: 'Liczba zmarłych w danym roku'}
  ];

  constructor() { }

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(33, 18, 78, .5)',
      borderColor: 'rgba(0, 0, 0, .7)',
      borderWidth: 2,
    }
  ];
  ngOnInit() {
  }

}
