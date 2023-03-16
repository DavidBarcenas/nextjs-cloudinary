interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: Props) {
  return (
    <button
      className={`relative py-2 px-5 rounded-lg border border-primary text-sm uppercase font-semibold tracking-wider bg-primary text-white overflow-hidden shadow shadow-transparent transition duration-200 ease-in hover:bg-primary hover:shadow-3xl hover:ease-out hover:before:animate-shine before:block before:w-0 before:h-[86%] before:absolute before:top-[7%] before:left-0 before:opacity-0 before:bg-white before:shadow-4xl before:-skew-x-[-20deg] active:shadow-transparent active:transition-shadow active:ease-in ${
        className || ''
      } `}
    >
      {children}
    </button>
  );
}
