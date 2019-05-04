import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'H. Jackson Brown', 'The Best Preparation for Tomorrow is doing your Best Today.', 'Admin', new Date(2019, 5, 4)),
    new Quote(2, 'Brian Tracy', 'There is No Limit to What we can Accomplish, Except the Limits you place on Your Own Thinking.', 'Admin', new Date(2019, 4, 12)),
    new Quote(3, 'Annonymous', 'Work hard in silence, Let your Success be Your Noise.', 'Admin', new Date(2019, 5, 3)),

  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}
