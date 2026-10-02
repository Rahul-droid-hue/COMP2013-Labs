import type { ResortListing } from "../data/data";

function ResortCard(props: ResortListing) {
  return (
    <div className="card">
      <img src={props.pic} />

      <div className="card-info">
        <h2>{props.country}</h2>

        <p>{props.location}</p>

        <p className={props.rating > 4.0 ? "green" : "red"}>{props.rating}★</p>

        <h3>
          ${props.price}
          <span>/night</span>
        </h3>
      </div>
    </div>
  );
}

export default ResortCard;
