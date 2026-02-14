import { Outlet } from "react-router-dom";
import GlobalNavigator from "./Components/NavBar/GlobalNavigatorBar";
import GlobalHeader from "./Components/Header/GlobalHeader/GlobalHeader";

export default function Layout() {
  return (
    <>
      <GlobalHeader />
      <GlobalNavigator />
      <main>
        <Outlet />
      </main>
    </>
  );
}
