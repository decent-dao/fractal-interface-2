import { defer } from "react-router-dom";
import Safe from "../pages/Safe";

function Component() {
  return <Safe />;
}

export function safeLoader(id: string | undefined) {
  const p = new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(id);
      } else {
        reject(new Error("it just happens sometimes"));
      }
    }, 2000);
  });

  return defer({ message: p });
}

export default Component;
