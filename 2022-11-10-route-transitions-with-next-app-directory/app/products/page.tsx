"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/container";
import { PageWrapper } from "../../components/page-wrapper";

export default function Home() {
  return (
    // Hiding the overflow for now, we're not building building the scrolling
    // functionality of the images ;)
    <PageWrapper className="overflow-hidden">
      <Container className="flex">
        <div className="flex w-[320px] min-w-[320px] flex-col border-r border-black py-12 pr-4">
          <h1 className="mb-4 text-6xl uppercase">Foldy</h1>
          <p className="mb-1 text-xl">$3,390</p>
          <p>It is a steal! I know you want it!</p>

          <div className="mt-auto">
            <h2 className="text-xl">Description</h2>
            <p className="mt-auto">
              The Foldy chair is our latest master piece combining all assets
              nature brings. Bamboo for keeping your cheeks happy, some other
              wood for the durability and a nice towel for the hot days.
            </p>
          </div>
        </div>
        <div className="[&_img]:mr-4 h-screenHeightWithoutHeader flex">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, x: 20 }}
            className="h-full w-full object-cover"
            src="/chair.jpg"
            alt="Nice chair"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, x: 20 }}
            className="h-full w-full object-cover"
            src="/chair.jpg"
            alt="Nice chair"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, x: 20 }}
            className="h-full w-full object-cover"
            src="/chair.jpg"
            alt="Nice chair"
          />
        </div>
      </Container>
    </PageWrapper>
  );
}
