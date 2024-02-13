import { RouteObject } from "react-router-dom"
function Page() {

  return (
    <div>
      <h1>Landing</h1>
    </div>
  )
}

async function loader() {
  return true
}

export const landingRoute: RouteObject = {
  id: "landing",
  index: true,
  loader,
  element: <Page />,
}

