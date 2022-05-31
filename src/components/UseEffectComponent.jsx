// import { Component } from 'react'

import { useState, useEffect } from 'react'

// useEffect can replace componentDidMount and componentDidUpdate
// class UseEffectComponent extends Component {
//   state = {
//     isLoading: true,
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false,
//       })
//     }, 2000)
//   }

//   render() {
//     return (
//       <div>
//         {this.state.isLoading ? (
//           <div>LOADING...</div>
//         ) : (
//           <div>DATA IS READY</div>
//         )}
//       </div>
//     )
//   }
// }

// export default UseEffectComponent

// RULES OF HOOKS
// 1) USE THEM IN FUNCTIONAL COMPONENTS
// 2) USE THEM AT THE TOP LEVEL OUTSIDE OF CONDITIONS, LOOP, FUNCTIONS, ETC.

const UseEffectComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [counter, setCounter] = useState(0)

  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    },
    [
      // this array is going to tell the useEffect HOW OFTEN to be RE-EXECUTED!
    ]
  )
  // because all the elements in the dependency array are a valid trigger to execute
  // the callback ONE MORE TIME, in order to mimic componentDidMount we have
  // to keep that array EMPTY! so we're not providing any condition to re-execute the callback

  //   useEffect(() => {
  //     console.log('useEffect triggered!')
  //   })
  // this effect is behaving like componentDidUpdate!
  // without an array of dependency, the callback will be executed upon EVERY update!
  // (so every time there's a change in the state or in the props of this component)

  //   useEffect(() => {
  //     console.log('just the counter updates!')
  //   }, [counter])
  // the console log this time will happen just when COUNTER changes!

  useEffect(() => {
    console.log('just the isLoading updates!')
  }, [isLoading])
  // the console log this time will happen just when ISLOADING changes!

  return (
    <>
      <div>{isLoading ? <div>LOADING...</div> : <div>DATA IS READY</div>}</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  )
}

export default UseEffectComponent
