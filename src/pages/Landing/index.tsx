function Page () {
  return (
    <div>
      <h1>Landing</h1>
    </div>
  )
}

async function loader () {
  return true
}

export const landingRoute = {
  id: 'landing',
  index: true,
  loader,
  element: <Page />
}
