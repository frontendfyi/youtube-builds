import Link from "next/link";
import { Container } from "./container";
import { CartIcon } from "./icons/cart";

const links = [
  { href: "/products", label: "Products" },
  { href: "/our-story", label: "Our Story" },
  { href: "/workshop", label: "Workshop" },
  { href: "/showroom", label: "Showroom" },
  { href: "/long-name", label: "A very long name to show the animation" },
];

export const Header = () => {
  return (
    <header className="w-full">
      <Container className="flex items-center border-b border-black py-8">
        <Link href="/" className="text-3xl font-bold">
          Fur Nature
        </Link>
        <nav>
          <ul className="[&_li]:ml-4 ml-12 flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ml-auto flex flex-row">
          <CartIcon />
          <span className="sr-only">Open cart</span>
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            1
          </span>
          <span className="sr-only">items in cart cart</span>
        </button>
      </Container>
    </header>
  );
};
