import Image from "next/image";
import Link from "next/link";

export default function IpoList({ list, type }) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200">
      <div className="hidden w-full gap-4 px-4 py-3 text-xs text-slate-400 md:flex">
        <p className="basis-2/5">Company / Issue date</p>
        <p className="basis-1/5">Issue size</p>
        <p className="basis-1/5">Price range</p>
        <p className="basis-1/5">Min Invest / Qty</p>
      </div>
      {list.map((ipo) => {
        return (
          <div key={ipo.id}>
            <Link href={`${type}/${ipo.id}`}>
              <div className="flex w-full items-center gap-4 border-b last:border-b-0 px-4 py-5">
                <div className="flex md:basis-2/5 items-center gap-3">
                  <Image
                    className="rounded-full border"
                    src={ipo.image}
                    alt="pic"
                    width={48}
                    height={48}
                  />
                  <p className="leading-4">
                    {ipo.name} <br />
                    <span className="text-xs text-slate-500">
                      {ipo.details.biddingDates}
                    </span>
                  </p>
                </div>
                <p className="hidden basis-1/5 md:flex">
                  {ipo.details.issueSize}
                </p>
                <p className="hidden basis-1/5 md:flex">
                  {ipo.details.priceRange}
                </p>
                <p className="hidden basis-1/5 leading-4 md:flex">
                  {ipo.details.miminInvestmentn} <br />
                  <span className="text-xs text-slate-500">{`${ipo.details.lotSizes} shares`}</span>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
