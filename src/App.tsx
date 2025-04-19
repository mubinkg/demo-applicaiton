
import { JSX } from "react";
import NewsBanner from "./components/news-banner";
import MainHeader from "./components/main-header";
import NavBar from "./components/nav-bar";

export default function Layout(): JSX.Element {

  return (
    <div className="bg-[#0f1011] flex flex-row justify-center w-full">
      <div className="bg-[#0f1011] w-full h-[100vh] relative">
        <header className="flex flex-col w-full items-start fixed top-0 left-0 z-10">
          <NewsBanner />
          <MainHeader />
          <NavBar />
        </header>
      </div>
    </div>
  );
};

