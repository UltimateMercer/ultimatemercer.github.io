import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-full pt-4 px-6 pb-8 print:hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-2">
          <Link href="/" className="">
            <img
              src="/images/ultimate-logo-red.svg"
              className="hidden dark:block"
              width="100"
              height="100"
              alt="Ultimate Mercer Logo"
            />
          </Link>

          <Link href="/" className="">
            <img
              src="/images/ultimate-logo-dark.svg"
              className="block dark:hidden"
              width="100"
              height="100"
              alt="Ultimate Mercer Logo"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
