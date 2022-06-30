import React from "react";
import Topbar from "../../components/Topbar/topbar";

export default function Home() {
  return (
    <div className="Home flex flex-col">
      <Topbar />
      <div className="flex-auto">{"This here is some text"}</div>
    </div>
  );
}
