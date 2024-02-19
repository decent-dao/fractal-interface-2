import { Suspense } from "react";
import {
  useLoaderData,
  Await,
  useAsyncError,
  useSearchParams,
} from "react-router-dom";

function ErrorComponent() {
  const error = useAsyncError() as Error;

  return <div>Error loading Safe: {error.message}</div>;
}

function Home() {
  const [searchParams] = useSearchParams();
  const data = useLoaderData() as { message: string };

  return (
    <div>
      <p>
        Safe: <code>{searchParams.get("safe")}</code>
      </p>
      <Suspense fallback={<div>Loading Safe...</div>}>
        <Await resolve={data.message} errorElement={<ErrorComponent />}>
          {(message) => <div>{message}</div>}
        </Await>
      </Suspense>
    </div>
  );
}

export default Home;
