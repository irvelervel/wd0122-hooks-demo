// I want to have a counter that can increment/decrement clicking the buttons
// in a class component you'll create a state object for this:

import { useState } from 'react'

// import { Component } from 'react'

// class UseStateComponent extends Component {
//   state = {
//      counter: 0,
//   }

//   render() {
//     return (
//       <div>
//         <h1>CLASS DEMO!</h1>
//         <button
//           onClick={() =>
//             this.setState({
//               counter: this.state.counter + 1,
//             })
//           }
//         >
//           +
//         </button>
//         <p>{this.state.counter}</p>
//         <button
//           onClick={() =>
//             this.setState({
//               counter: this.state.counter - 1,
//             })
//           }
//         >
//           -
//         </button>
//       </div>
//     )
//   }
// }

// RULES OF HOOKS:
// 1) JUST USE HOOKS IN REACT FUNCTIONAL COMPONENTS!
// 2) USE REACT HOOKS ALWAYS AT THE TOP LEVEL OF YOUR COMPONENT,
// OUTSIDE OF CONDITIONS, LOOPS, OTHER FUNCTIONS...

const UseStateComponent = () => {
  // let's create a counter state property!

  const [counter, setCounter] = useState(0)

  const [person, setPerson] = useState({
    name: 'Stefano',
    age: 18,
  })

  // counter is the state variable
  // setCounter is the ONLY FUNCTION capable of changing the value of the state variable
  // you can assign an initial value to the state variable passing an argument to useState()

  return (
    <div>
      <h1>USESTATE DEMO!</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <div>
        <p
          onClick={() =>
            setPerson({
              // these setter functions ASSIGN new values, they don't merge an object like this.setState
              name: 'Simon',
              age: 19,
            })
          }
        >
          {person.name}
        </p>
        <p>{person.age}</p>
      </div>
    </div>
  )
}

export default UseStateComponent
