class Order {
  ascArray (arr) {
    return arr.sort((a, b) => {
      return a.votes - b.votes
    })
  }
  descArray (arr) {
    return arr.sort((a, b) => {
      return b.votes - a.votes
    })
  }
}
const order = new Order()
export default order
