import React from "react";
import Image from "next/image";

export default function Home() {
  return (
          <div className="max-w-3xl m-auto font-mono">
              <div className="flex flex-col items-center gap-20 px-2 md:px-0">
                  <Image src="/line.webp" height={100} width={100} alt={"a pirate ship"} />
{/*                  <article>
                      <h3 className="font-sans text-2xl tracking-tighter text-center">What makes Kafka extremely fast?</h3>
                      <div className="max-w-sm">
                          <p className="font-mono text-sm mt-1 -indent-0 hyphens-auto">Kafka’s extreme throughput comes from simple design choices: an append-only log and efficient use of hardware.</p>
                      </div>
                      <h4 className="italic text-center text-xs font-geist-sans tracking-tight mt-4">Jan 8 2026 — 8 minutes read</h4>
                  </article>*/}
              </div>
          </div>
  );
}
