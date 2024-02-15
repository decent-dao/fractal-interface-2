import { Suspense } from 'react'
import { useLoaderData, useParams, Await, useAsyncError } from 'react-router-dom'

function ErrorComponent () {
  const error = useAsyncError() as Error

  return (
    <div>Error loading Safe: {error.message}</div>
  )
}

function Safe () {
  const params = useParams()
  const data = useLoaderData() as { message: string }

  return (
    <div>
      <p>Safe: <pre>{params.id}</pre></p>
      <Suspense
        fallback={<div>Loading Safe...</div>}
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

export default Safe
