const ErrorMessage = ({ error }) => {
  return (
    <div className=" flex  items-center justify-center bg-gray-50 p-3  min-h-[60vh] mt-10 rounded-xl">
      <div className="max-w-sm space-y-3">
        <h2> Something went wrong!!!</h2>
        <p className="text-red-500 text-2xl">{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
