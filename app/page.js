import {
  CryptoCard,
  CustomFilter,
  Principal,
  Searchbar,
  ShowMore,
} from "@/components";
import { fetchCryptos } from "@/utils";
import { orderBy, tags } from "@/constants";

export default async function Home({ searchParams }) {
  //Hacemos fetch para traernos todas las cryptos
  const allCryptos = await fetchCryptos({
    search: searchParams.search || "",
    tags: searchParams.tags || "",
    orderBy: searchParams.orderBy || "marketCap",
    limit: searchParams.limit || 10,
  });
  //chequeador de empty
  const isEmptyCrypto =
    !Array.isArray(allCryptos) || allCryptos.length < 1 || !allCryptos;
  return (
    <main className="overflow-hidden">
      <Principal />
      <div className="mt-12 padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Coin catalogue</h1>
          <p>Explore all the crypto in the world !</p>
        </div>

        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <CustomFilter title="orderBy" options={orderBy} />
            <CustomFilter title="tags" options={tags} />
          </div>
        </div>

        {!isEmptyCrypto ? (
          <section>
            <div className="home__cars-wrapper">
              {allCryptos?.map((crypto, index) => (
                <CryptoCard key={index} crypto={crypto} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCryptos.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results </h2>
            <p>{allCryptos?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
