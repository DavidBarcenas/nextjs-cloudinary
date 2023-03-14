interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: Props) {
  return (
    <button
      className={`${
        className || ''
      } relative py-2 px-5 rounded-lg border border-[#3d6aff] text-sm uppercase font-semibold tracking-wider bg-transparent text-white overflow-hidden shadow shadow-transparent transition duration-300 ease-in hover:bg-[#3d6aff] hover:shadow-3xl hover:ease-out hover:before:animate-shine before:block before:w-0 before:h-[86%] before:absolute before:top-[7%] before:l-0 before:opacity-0 before:bg-white before:shadow-4xl before:-skew-x-[-20ded]`}
    >
      {children}
    </button>
  );
}
