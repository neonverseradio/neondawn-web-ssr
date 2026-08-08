import { Link } from "react-router";
import "../styles/artistmarquee.css";

const artists = [
 
];

function ArtistTrack() {
  return (
    <>
      {artists.map((artist) => (
        <Link
          key={artist.link}
          to={artist.link}
          className="artist-item"
        >
          <img
            src={artist.image}
            alt={artist.name}
            className="artist-image"
          />

          <div className="artist-caption">
            <strong>{artist.name}</strong>
            <span>{artist.caption}</span>
          </div>
        </Link>
      ))}
    </>
  );
}

export default function ArtistMarquee() {
  return (
    <div className="artist-marquee">

      <div className="artist-track">
        <ArtistTrack />
      </div>

      <div className="artist-track">
        <ArtistTrack />
      </div>

    </div>
  );
}