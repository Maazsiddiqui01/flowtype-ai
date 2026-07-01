import { Reveal, DownloadCTA } from "./primitives";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-surface/50">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 glow-amber rotate-180" />
      <div className="relative mx-auto max-w-container px-6 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-[40px] sm:leading-[1.1]">
            Talk to your computer, not to the cloud.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] text-ink-body">
            Free. Open source. On-device. Download FlowType and hold a key.
          </p>
          <div className="mt-9 flex justify-center">
            <DownloadCTA />
          </div>
          <p className="mt-6 text-[13px] text-ink-muted">
            No account · No subscription · Your voice never leaves your machine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
