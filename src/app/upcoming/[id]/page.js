import IpoDetails from "@/components/ipo-details";
import data from "@/data/data.json";

export default function Page({ params: { id } }) {
  const details = data.categories.upcomingIpo.find(
    (ipo) => ipo.id === Number(id)
  );

  return (
    <main className="container mx-auto max-w-screen-lg">
      <IpoDetails details={details} />
    </main>
  );
}
