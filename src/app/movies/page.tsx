import Link from "next/link";
export default function Movies() {
  return (
    <div>
      <div>Movie Page</div>
      <ul>
        <li className="header-menu-item">
          <Link className="link" href="/movies/1">
            Go to movie info page
          </Link>
        </li>
      </ul>
    </div>
  );
}
