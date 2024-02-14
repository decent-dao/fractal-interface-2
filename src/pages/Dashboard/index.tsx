import { Suspense } from 'react'
import { useLoaderData, useParams, Await, useAsyncError } from 'react-router-dom'

function ErrorComponent () {
  const error = useAsyncError() as Error

  return (
    <div>Error loading dashboard: {error.message}</div>
  )
}

function Dashboard () {
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

export default Dashboard
