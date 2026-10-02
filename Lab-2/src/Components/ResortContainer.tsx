import listings from "../data/data";
import ResortCard from "./ResortCard";

function ResortContainer() {
  return (
    <div className="resort-container">
      {listings.map((listing) => (
        <ResortCard
          key={listing.id}
          id={listing.id}
          pic={listing.pic}
          country={listing.country}
          location={listing.location}
          rating={listing.rating}
          price={listing.price}
        />
      ))}
    </div>
  );
}

export default ResortContainer;
