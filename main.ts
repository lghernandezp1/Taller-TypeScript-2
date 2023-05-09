import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('SeriesData')!;
let SeriesCardsInf: HTMLElement = document.getElementById("Cards")!;
const averageSeasonInf: HTMLElement = document.getElementById("AverageData")!;


renderSeriesInTable(series);

averageSeasonInf.innerHTML = `Seasons Average: ${AverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {

  series.forEach((serie) => {
    let tr = document.createElement("tr");
    tr.innerHTML = 
                          `<th scope="row">${serie.number}</th>
                           <td class="seriesname">${serie.title}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(tr);
  });
}

function AverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => {totalSeasons = totalSeasons + serie.seasons});
  return totalSeasons/series.length;
}

//taller 2
function showSeries(serie: Serie): void {
 SeriesCardsInf.innerHTML = `<div class="card" style="width: 20rem;">
                            <div class="card-body">
                              <h5 class="card-title">${serie.title}</h5>
                              <p class="card-text">${serie.description}</p>
                            </div>
                            <div class="card-body">
                              <a href="${serie.link}" class="card-link" target="_blank">${serie.link}</a>
                            </div>
                          </div>`;
}