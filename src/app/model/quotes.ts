export class Quotes {
  constructor(public id:number, public submitter:string, public author:string, 
    public quote: string, public postdate: Date, public upvote: number, public downvote: number){}

}
