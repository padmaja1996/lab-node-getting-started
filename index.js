class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(x) {
    this.items.push(x)

    this.items.sort((a,b)=>a-b)

    this.length = this.items.length
  }
  get(i) {
    if (this.items.indexOf(i) == -1) {
      throw new Error('OutOfBounds')
    }
    else {
      return(this.items.indexOf(i))
    }
  }
  max() {
    if(this.items.length>0)
    {
      return (Math.max(...this.items))
    }
    else{
      throw new Error("EmptySortedList ")
    }
  }
  min() {
    if (this.items.length > 0) {
      return (Math.min(...this.items))
    }
    else {
      throw new Error("EmptySortedList ")
    }
  }
  avg() {
    if (this.items.length > 0) {
      let sum = this.items.reduce((acc, val) =>acc= acc + val)
      return sum/this.items.length
      }
    else {
      throw new Error("EmptySortedList ")
    }
  }

  sum() {
    if (this.items.length > 0) {
     return this.items.reduce((acc, val) =>  acc + val)
    }
    else{
      return 0
    }
  }
  
};

module.exports = SortedList;