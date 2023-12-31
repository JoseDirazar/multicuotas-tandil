import Link from "next/link";

const NoResults = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-neutral-400">
      <p className="pb-3">Sin resultados.</p>
      <Link
        href="/"
        className="rounded-full bg-black p-2 px-5 text-neutral-200 hover:scale-[1.10] hover:text-white dark:bg-neutral-200 dark:text-black dark:hover:bg-white"
      >
        Home
      </Link>
    </div>
  );
};

export default NoResults;
