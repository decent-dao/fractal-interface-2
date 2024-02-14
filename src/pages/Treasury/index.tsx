
function Page() {
  return (
    <div>
      <h1>DAO Treasury</h1>
    </div>
  )
}

function loader() {
  return  true
}

export const treasuryRoute = {
  id: "treasury",
  path: ":id/treasury",
  loader,
  element: <Page />,
}
