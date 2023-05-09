import { series } from './data.js';

var seriesTbody = document.getElementById('SeriesData');

var averageSeasonInf = document.getElementById("AverageData");
var SeriesCardsInf= document.getElementById("Cards");
renderSeriesInTable(series);

function renderSeriesInTable(series) {
    
    
    
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<th scope=\"row\">".concat(serie.number, 
            "</th>\n <td class=\"seriesname\">").concat(serie.title, "</td>\n <td>").concat(serie.channel, "</td>\n   <td>").concat(serie.seasons, "</td>");
        tr.addEventListener("click", function () { showSeriesCard(serie); });
            seriesTbody.appendChild(tr);
    });


}
function AverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
    
}
averageSeasonInf.innerHTML = "Seasons Average: ".concat(AverageSeasons(series));


//taller 2 cards
function showSeriesCard(serie) {
    
    SeriesCardsInf.innerHTML = "<div class=\"card\" style=\"width: 20rem;\">\n                <div class=\"card-body\">\n                              <h5 class=\"card-title\">".concat(serie.title, "</h5>\n                              <p class=\"card-text\">").concat(serie.description, "</p>\n                            </div>\n                            <div class=\"card-body\">\n                              <a href=\"").concat(serie.link, "\" class=\"card-link\" target=\"_blank\">").concat(serie.link, "</a>\n                            </div>\n                          </div>");
}
