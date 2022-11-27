"use strict";
/**
 * webpack でバンドルする時は、次をコメントアウト
 */
// import '../styles/index.css';


// ↓DOM構築終了後の、さらにimg等の読み込みまで終了した直後、というタイミングで実行する内容を書く。
window.onload = () => {
  console.log('onload event test');
};
