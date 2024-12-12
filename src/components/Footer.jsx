import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-footer w-full p-2 text-center text-sm text-neutral-600 shadow-lg shadow-slate-700 animate-fadeInUp">
      © 2024 Copyright :
      <Link className="ml-2 text-neutral-700" to={"/"}>
      LANTAPRIVATETRANSFER©
      </Link>
    </footer>
  );
}
