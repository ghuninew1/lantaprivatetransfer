export default function Loading() {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div
        className="-mt-1.5 inline-block size-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
        role="status"
      />
      <span className="inline-block text-sm text-gray-600">Loading...</span>
    </div>
  );
}
