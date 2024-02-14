import { Suspense } from "react"
import { useLoaderData, useParams, defer, Await, useAsyncError } from "react-router-dom"

function ErrorComponent() {
  const error = useAsyncError() as string;

  return (
    <div>Error loading dashboard: {error}</div>
  )
}

function Page() {
  const params = useParams()
  const data = useLoaderData() as { message: string }

  return (
    <div>
      <h1>DAO Dashboard</h1>
      <pre>{params.id}</pre>
      <Suspense
        fallback={<div>Loading dashboard...</div>}
      >
        <Await
          resolve={data.message}
          errorElement={<ErrorComponent />}
        >
          {(message) => (
            <div>{message}</div>
          )}
        </Await>
      </Suspense>
    </div>
  )
}

function loader() {
  const p = new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("foobar")
      } else {
        reject("it just happens sometimes")
      }
    }, 2000)
  })

  return defer({ message: p })
}

export const dashboardRoute = {
  id: "dashboard",
  path: ":id/dashboard",
  loader,
  element: <Page />,
}
