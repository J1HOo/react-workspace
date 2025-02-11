import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChapUseState from "./Chapter/ChapUseState";
import PracticeUseState from "./Practice/PracticeUseState";
import PracticeProps from "./Practice/PracticeProps";
import ChapArrowFunction from "./Chapter/ChapArrowFunction";
import ChapNomalFunction from "./Chapter/ChapNormalFunction";
import ChapProps from "./Chapter/ChapProps/ChapProps";
import ChapComponent from "./Chapter/ChapComponent";
import PracticePropsFunction from "./Practice/PracticePropsFunction";
import ChapPropsDefault from "./Chapter/ChapProps/ChapPropsDefault";
import PracticePropsDefault from "./Practice/PracticePropsDefault";
import ChapPropsArray from "./Chapter/ChapProps/ChapPropsArray";
import PracticePropsArray from "./Practice/PracticePropsArray";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App /> */}
      {/*<ChapUseState />*/}
      {/* <PracticeUseState/>*/}
      {/*<ChapComponent/>*/}
      {/*<ChapArrowFunction/>*/}
      {/*<ChapNormalFunction/>*/}
      {/*<ChapProps/>*/}
      {/*<PracticeProps/>*/}
      {/*<ChapPropsFunction/>*/}
      {/*<PracticePropsFunction/>*/}
      {/*<ChapPropsDefault/>*/}
      {/*<PracticePropsDefault/>*/}
      {/*<ChapPropsArray/>*/}
        <PracticePropsArray/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
