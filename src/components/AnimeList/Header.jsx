import Link from "next/link";

const Header = ({ title, linkHref }) => {
  return (
    <div className="text-primary flex items-center justify-between my-4">
      <h1 className="hover:text-2xl font-bold text-md md:text-2xl text-primary">{title}</h1>
      {linkHref &&
        (
          <Link
            href={linkHref}
            className="text-sm md:text-md bg-black text-white px-4"
          >
            See All
          </Link>
        )}
    </div>
  );
};

export default Header;
