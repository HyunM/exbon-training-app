import { useEffect } from "react";
import Router from "next/router";

const Index = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/July012021");
    }
  });

  return null;
};

export default Index;
