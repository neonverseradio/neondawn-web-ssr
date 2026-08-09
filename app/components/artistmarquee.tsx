import { Link } from "react-router";
import "../styles/artistmarquee.css";

const artists = [
  {
    name: "Lynney",
    caption: "Lost",
    image: "/header/lynney1.jpg",
    link: "/lynney",
  },
  {
    name: "Martyrs",
    caption: "Church Street EP ♫ Twist the Cap ♫ Drowning Days",
    image: "/header/martyrs.png",
    link: "/martyrs",
  },
  {
    name: "Meeka",
    caption: "Dissociate",
    image: "/header/meeka.png",
    link: "/meeka",
  },
  {
    name: "Karl",
    caption: "White Bat Audio♫Hackers",
    image: "/header/karl.png",
    link: "/karl",
  },
  {
    name: "Ilovemakonnen - YTC",
    caption: "Control",
    image: "/header/ilovemakonnen.png",
    link: "/mak",
  },
  {
    name: "YTC - Ilovemakonnen",
    caption: "Stuntin On Em 193 YTC Mak Radio Edit",
    image: "/header/ytc.png",
    link: "/ytc",
  },
  {
    name: "Keshon Campbell",
    caption: "Desires",
    image: "/header/keshon.png",
    link: "/keshon",
  },
{
    name: "Novelley",
    caption: "Lost Alley♫Time and Space",
    image: "/header/novelley4.jpg",
    link: "/novelley",
  },
  {
    name: "Kurt",
    caption: "When Angels Sing",
    image: "/header/kurt2.png",
    link: "/kurt",
  },
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