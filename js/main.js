var press = document.getElementById('press');
var count = 0; 

function changeQuote() {
    count++;

    if (count == 1) {
        press.innerHTML = "So many books, so little time.";
    } else if (count == 2) {
        press.innerHTML = "Be yourself; everyone else is already taken.";
    } else {
        press.innerHTML = "A room without books is like a body without a soul.";
        count = 0;
    }
}
// -----------------------------------------------------------------------------------------
// ============================== حل اخر =============================================
// var quoteElement = document.getElementById('press');

// var quotes = [
//     "“Be yourself; everyone else is already taken.”",
//     "“So many books, so little time.”",
//     "“A room without books is like a body without a soul.”"
// ];

// var count = 0;

// function changeQuote() {
//     quoteElement.innerHTML = quotes[count];
//     count++;
//     if (count >= quotes.length) {
//         count = 0;
//     }
// }
