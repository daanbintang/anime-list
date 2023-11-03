import Link from "next/link";

const Header = ({ title, linkHref }) => {
  return (
    <div className="text-primary flex items-center justify-around mt-24 mb-4">
      <h1 className="font-bold text-md md:text-2xl text-primary">{title}</h1>
      {linkHref ?
        (
          <Link
            href={linkHref}
            className="text-sm md:text-md text-white px-4 font-bold bg-accent"
          >
            See All
          </Link>
        ): null}
    </div>
  );
};

export default Header;
