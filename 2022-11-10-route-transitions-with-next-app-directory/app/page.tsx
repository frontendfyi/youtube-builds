import Link from "next/link";
import { Container } from "../components/container";
import { PageWrapper } from "../components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper className="h-screenHeightWithoutHeader bg-[url(/chair.jpg)] bg-cover bg-center">
      <Container className=" flex h-full flex-col pt-24 text-center text-2xl">
        <h1 className="mb-8 text-8xl font-bold">Welcome to Fur Nature</h1>
        <p className="mx-auto max-w-xl">
          We craft furniture by utilising what mother earth gave us. And we
          build websites on the side ;).
        </p>

        <Link
          href="/products"
          className="text-beige mx-auto mt-12 rounded-full bg-black p-4 transition-colors hover:bg-[#333] focus:bg-[#333]"
        >
          More about Foldly
        </Link>
      </Container>
    </PageWrapper>
  );
}
