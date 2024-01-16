export default class Airport {
  capacity = 5
  planes = []
  
  land(plane){
    if(this.isAtFullCapacity()) return 
    if(this.planes.find(p => p === plane)) return 
    this.planes.push(plane)
  }

  takeOff(plane){
    const index = this.planes.indexOf(plane)
    if (index === -1) return
    this.planes.splice(index, 1)
  }

  isAtFullCapacity(){
    return this.planes.length === this.capacity
  }

  getCapacity(){
    return this.capacity
  }

  modifyCapacity(newLimit){
    if (newLimit < 0 || newLimit < this.planes.length) return
    this.capacity = newLimit
  }
}