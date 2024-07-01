import Link from "next/link";
import Image from "next/image";

export default function IpoDetails({ details }) {
  return (
    <>
      <nav aria-label="Breadcrumbs" className="hidden md:block">
        <div className="flex text-xs py-6">
          <Link className="after:content-['>'] after:mx-2" href="/">
            Home
          </Link>
          <div>Shivalic Power Control </div>
        </div>
      </nav>
      <section className="my-4">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex items-center gap-4 md:w-96">
            <Image
              src="/assets/akiko.svg"
              alt="Nephoro"
              width={48}
              height={48}
              className="rounded border"
            />
            <div>
              <h1 className="text-xl">{details.name}</h1>
              <h2 className="text-xs text-gray-500">{details.company}</h2>
            </div>
          </div>
          <div>
            <p className="text-xl leading-6">
              {`${details.details.minInvestment} / `}
              <span className="text-gray-500 text-xs">
                {details.details.lotSizes}
                <br />
                Minimum Investment
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm md:text-lg font-semibold border-b-2 pb-3">
            {`${details.name} Details`}
          </p>
        </div>
        <div className="flex mt-5 gap-10">
          <div className="md:flex md:gap-10">
            <div className="text-xs font-medium mb-5 md:text-lg md:leading-6">
              {details.details.biddingDates}
              <br />
              <span className="text-gray-500 text-[10px] md:text-sm ">
                Bidding Dates
              </span>
            </div>
            <div className="text-xs font-medium mb-5  md:text-lg md:leading-6">
              {details.details.priceRange}
              <br />
              <span className="text-gray-500 text-[10px] md:text-sm">
                Price Range
              </span>
            </div>
            <div className="text-xs font-medium mb-5  md:text-lg md:leading-6">
              {details.details.issueSize}
              <br />
              <span className="text-gray-500 text-[10px] md:text-sm">
                Issue Size
              </span>
            </div>
          </div>
          <div className="md:flex md:gap-10">
            <div className="text-xs font-medium mb-5 md:text-lg md:leading-6">
              {details.details.minInvestment}
              <br />
              <span className="text-gray-500 text-[10px] md:text-sm">
                Min. Investment
              </span>
            </div>
            <div className="text-xs font-medium mb-5 md:text-lg md:leading-6">
              {details.details.lotSizes}
              <br />
              <span className="text-gray-500 text-[10px] md:text-sm">
                Lot Size
              </span>
            </div>
          </div>
        </div>
        <div className="md:my-5">
          <h2 className="text-sm font-medium mb-4 md:text-lg">
            About the company
          </h2>
          <p className="text-xs md:text-sm tracking-wide">
            {details.about.description}
          </p>
          <div className="my-6">
            <p className="text-gray-500 text-xs md:text-sm flex gap-24 mb-3">
              Founded in
              <span className="text-black font-medium">
                {details.about.foundedIn}
              </span>
            </p>
            <p className="text-gray-500 text-xs md:text-sm flex gap-12 mb-3">
              Managing Director
              <span className="text-black font-medium">
                {details.about.managingDirector}
              </span>
            </p>
            <p className="text-gray-500 text-xs md:text-sm flex gap-10 mb-3">
              Parent Organisation
              <span className="text-black font-medium">
                {details.about.parentOrganisation}
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
