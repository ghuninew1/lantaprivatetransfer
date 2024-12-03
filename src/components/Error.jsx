import { useRouteError, useNavigate } from "react-router-dom";

export default function Error() {
  const errors = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 mx-auto flex w-full flex-col items-center justify-center">
      <div className="text-center font-mono">
        <h1 className="mb-10 text-9xl font-bold text-red-700">{errors.status || errors.code}</h1>
        <h2 className="my-5 text-4xl font-bold text-orange-300">
          {errors.statusText || errors.message || "Oops! Page Not Found."}
        </h2>
      </div>
      <button
        className="mt-10 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}
