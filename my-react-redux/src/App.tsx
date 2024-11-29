
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {increaseCounter,decreaseCounter} from "./action/actions"
import {useDispatch, useSelector } from 'react-redux'

import Home from './component/Home.jsx'

function App(props) {
//   const [count, setCount] = useState(0)
//   const newCount = useSelector( state => {return state.counter.count})
//   const dispatch = useDispatch()
//   //event handle 
//   const handleIncrease = () => {
//     //Dispatch() action
//      return dispatch(increaseCounter())
  
//   } 
//   const handleDecrease = () => {
//     return dispatch(decreaseCounter())
 
//  }




  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease() }>Increase Count</button>

      <button onClick={() => handleDecrease()}>Decrease Count</button> */}
      <Home/>
    </>
  )
}
// mapping state in store of redux into the props of react
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App

