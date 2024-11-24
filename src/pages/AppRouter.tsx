import { BrowserRouter, Routes, Route } from "react-router";
import Home, { menu } from "./Home";

export default function AppRouter() {
  const routersMap = menu.map((item) => (
    <Route key={item.id} path={item.path} element={item.component} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {routersMap}
      </Routes>
    </BrowserRouter>
  );
}
