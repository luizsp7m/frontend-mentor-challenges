import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}