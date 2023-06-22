// import logo from './logo.svg';
// import './App.css';

import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
export default function App() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}