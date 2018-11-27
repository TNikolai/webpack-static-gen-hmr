import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export default function render(locals) {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={context}>
      <App />
    </StaticRouter>
  );

  return Promise.resolve(`
  <!doctype html>
  <head></head>
  <body>
    <div id="app">${html}</div>
    <script src="bundle.js"></script>
  </body>
  `);
}
