import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "@/routers/index";
import "./index.scss";

ReactDOM.render(<HashRouter>{renderRoutes(routes)}</HashRouter>, document.getElementById("root"));
