function Page() {
  return (
    <div>
      <h1>DAO Treasury</h1>
    </div>
  )
}

function loader() {
  return false
}


export const dashboardRoute = {
  id: "dashboard",
  loader,
  element: <Page />,
}

