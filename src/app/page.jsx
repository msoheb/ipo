import IpoList from "@/components/ipo-list";
import data from "@/data/data.json";

export default function Home() {
  return (
    <main className="container max-w-screen-lg mx-auto px-4 my-9">
      <div className="mb-8">
        <h2 className="mb-5 font-medium text-lg">Open Ipo</h2>
        <IpoList list={data.categories.openIpo} type={"open"} />
      </div>
      <div className="mb-8">
        <h2 className="mb-5 font-medium text-lg">Closed Ipo</h2>
        <IpoList list={data.categories.closedIpo} type={"closed"} />
      </div>
      <div className="mb-8">
        <h2 className="mb-5 font-medium text-lg">Upcoming Ipo</h2>
        <IpoList list={data.categories.upcomingIpo} type={"upcoming"} />
      </div>
    </main>
  );
}
