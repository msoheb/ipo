import data from "@/data/data.json";

export default function Page({ params: { id } }) {
  const details = data.categories.closedIpo.find(
    (ipo) => ipo.id === Number(id)
  );

  return (
    <>
      <h1>{details.name}</h1>
      <h3>{details.id}</h3>
    </>
  );
}
