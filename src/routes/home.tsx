import { defer } from "react-router-dom";
import Home from "../pages/Home";

function Component() {
  return <Home />;
}

export function homeLoader(request: Request) {
  const searchParams = new URLSearchParams(new URL(request.url).searchParams);
  const safeAddress = searchParams.get("safe");
  const p = new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (safeAddress !== null && Math.random() > 0.5) {
        resolve(safeAddress);
      } else {
        reject(new Error("it just happens sometimes"));
      }
    }, 2000);
  });

  return defer({ message: p });
}

export default Component;
