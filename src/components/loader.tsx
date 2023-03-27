export function Loader() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <div className='loader'></div>
      <p className='animate-pulse text-2xl text-gray-500 text-center'>
        Espere un momento por favor, <span className='block'>estamos preparando su imagen...</span>
      </p>
      <style jsx>{`
        .loader {
          display: block;
          position: relative;
          width: 150px;
          height: 150px;
          margin: 0 auto 30px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #16a085;
          animation: spin 1.7s linear infinite;
          z-index: 11;
        }

        .loader:before {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #e74c3c;
          animation: spin-reverse 0.6s linear infinite;
        }

        .loader:after {
          content: '';
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          bottom: 15px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #f9c922;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
