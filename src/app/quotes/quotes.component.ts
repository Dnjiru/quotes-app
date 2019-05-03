import { Component, OnInit } from '@angular/core';
import { Quotes } from '../model/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // public id:number, public submitter:string, public author:string, public quote: string, public postdate: Date, public upvote: number, public downvote: number)
  submitquotes = [  
    new Quotes(1,"Daudi","Steve Jobs","When can only do Great Things when we do what we love!", new Date(1-5-2019), 124, 0),
    new Quotes(1,"Mwaniki","Chinua Achebe","When the Center is broken, Things fall apart", new Date(3-5-2019), 124, 0),
    new Quotes(1,"Munene","Bill Gates","We are changing the Worls with Technology!", new Date(23-4-2019), 5657, 0),

  ]

  addNewQuote(submitquote){
    let submitquoteLength = this.submitquotes.length;
    submitquote.id=submitquoteLength+1;
    submitquote.postDate = new Date(submitquote.postedDate)
    this.submitquotes.push(submitquote)
  }

  constructor() { }

  ngOnInit() {
  }

}
