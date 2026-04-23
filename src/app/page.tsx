import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/home/Reveal";

const featureCards = [
  {
    title: "Soil-first nutrition systems",
    copy: "Structured formulations designed to improve root-zone condition, moisture balance, and long-cycle crop resilience before yield pressure begins.",
    iconBg: "bg-[#2f5d31]",
    iconPath: "M5 13l4 4L19 7",
    kicker: "Program foundation",
    footer: "Built to stabilize soil condition before intensive feeding starts.",
  },
  {
    title: "Faster visible response",
    copy: "Balanced nutrient delivery helps plants respond quickly in-season, supporting cleaner uptake and more visible crop momentum.",
    iconBg: "bg-[#7e8d2f]",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    kicker: "In-season acceleration",
    footer: "Designed for quick-response programs where timing matters.",
  },
  {
    title: "Dependable commercial value",
    copy: "A portfolio shaped for repeatable application, stronger positioning, and dependable output across grower, dealer, and distributor programs.",
    iconBg: "bg-[#8b6835]",
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    kicker: "Commercial consistency",
    footer: "Built to feel credible in the field and premium in the market.",
  },
];

const productCards = [
  {
    name: "Organic Compost",
    accentClass: "bg-[#2f5d31]",
    eyebrow: "Soil foundation",
    description:
      "Organic matter blends designed to improve structure, moisture balance, and long-term root health.",
    accentGlow: "from-[#2f5d31] to-[#58774a]",
  },
  {
    name: "NPK Fertilizer",
    accentClass: "bg-[#7e8d2f]",
    eyebrow: "Balanced nutrition",
    description:
      "Core nutrient programs built for stronger vegetative growth, yield support, and dependable field response.",
    accentGlow: "from-[#7e8d2f] to-[#98a83b]",
  },
  {
    name: "Liquid Nutrients",
    accentClass: "bg-[#b98a2c]",
    eyebrow: "Fast response",
    description:
      "Liquid feeding solutions for quick uptake, visible plant support, and efficient nutrient delivery cycles.",
    accentGlow: "from-[#b98a2c] to-[#cf9e34]",
  },
  {
    name: "Soil Amendments",
    accentClass: "bg-[#8b6835]",
    eyebrow: "Performance support",
    description:
      "Specialized amendments that help regulate soil condition, improve efficiency, and reinforce crop resilience.",
    accentGlow: "from-[#8b6835] to-[#a57c43]",
  },
];

const fieldStats = [
  {
    label: "Core product systems",
    value: "4",
    detail: "Compost, NPK, liquids, and amendments",
  },
  {
    label: "Program coverage",
    value: "Organic + Mineral",
    detail: "Built for complete soil and crop nutrition plans",
  },
  {
    label: "Grower support",
    value: "24/7",
    detail: "Responsive guidance for serious field programs",
  },
];

const heroPoints = [
  "Field-ready formulations with stable quality",
  "Dealer-ready product positioning",
  "Premium systems for serious crop programs",
];

export default function Home() {
  return (
    <div className="home-page flex flex-col overflow-hidden bg-[#f8f5ec]">
      <section className="hero-section relative isolate overflow-hidden bg-[linear-gradient(135deg,#fbf8f0_0%,#f3ecdc_52%,#ebe1cb_100%)] py-18 lg:py-24">
        <div className="hero-orb hero-orb-left" aria-hidden="true" />
        <div className="hero-orb hero-orb-right" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="relative container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10">
              <Reveal className="mb-5" delay={0}>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d8d1ba] bg-white/92 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[#5b6d27] uppercase shadow-[0_12px_30px_rgba(91,74,38,0.08)] backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b98a2c] shadow-[0_0_18px_rgba(185,138,44,0.45)]" />
                  Premium plant nutrition
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="mb-7 flex max-w-xl items-center gap-4 rounded-[1.6rem] border border-[#ddd4c1] bg-white/86 px-4 py-4 shadow-[0_18px_34px_rgba(91,74,38,0.08)] backdrop-blur-sm">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#e2d8c5] bg-[#faf6ed]">
                    <Image
                      src="/product-logo.jpeg"
                      alt="AgriAce Fertilizers mark"
                      width={56}
                      height={56}
                      className="h-11 w-11 rounded-xl object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-[0.7rem] font-semibold tracking-[0.24em] text-[#8b6835] uppercase">
                      AgriAce Signature Range
                    </div>
                    <div className="mt-1 text-base font-semibold text-[#2c3f23]">
                      Product-led fertilizer branding with field-ready quality
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <h1 className="max-w-3xl text-4xl leading-[0.96] font-bold tracking-[-0.045em] text-[#23371f] sm:text-5xl lg:text-[4.55rem]">
                  Premium nutrition
                  <span className="mt-1 block text-[#23371f]">
                    engineered for healthier soil
                  </span>
                  <span className="mt-1 block text-[#7e8d2f]">
                    and higher-yield fields
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5e5a4c] sm:text-[1.16rem]">
                  AgriAce Fertilizers delivers professional-grade soil
                  conditioners, nutrient programs, and crop support inputs built
                  for growers who expect stronger field response and cleaner
                  brand presentation.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-7 rounded-[2rem] border border-[#d5ccb8] bg-[linear-gradient(135deg,#23371f_0%,#314d29_42%,#5d742e_100%)] p-5 text-white shadow-[0_24px_58px_rgba(27,44,23,0.18)] sm:p-6">
                  <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
                    <div>
                      <div className="text-[0.72rem] font-semibold tracking-[0.24em] text-[#dfe7c8] uppercase">
                        Brand story
                      </div>
                      <p className="mt-3 max-w-lg text-xl leading-8 font-semibold text-white [text-wrap:balance]">
                        A fertilizer range positioned to feel premium in market
                        and dependable in the field.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {heroPoints.map((point) => (
                        <div
                          key={point}
                          className="rounded-[1.3rem] border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-[#f2f0e6] backdrop-blur-sm"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {fieldStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.6rem] border border-[#ddd5c2] bg-white/92 px-5 py-5 shadow-[0_18px_34px_rgba(91,74,38,0.08)] backdrop-blur-sm"
                    >
                      <div className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                        {item.label}
                      </div>
                      <div className="mt-2 text-[1.6rem] leading-tight font-bold text-[#243821]">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-[#6f6a58]">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={430}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/products"
                    className="btn-primary button-arrow button-arrow--solid text-center text-base shadow-[0_18px_38px_rgba(47,93,49,0.22)]"
                  >
                    <span>Explore Product Systems</span>
                    <span className="button-arrow__icon" aria-hidden="true">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="button-arrow button-arrow--light rounded-full border border-[#d7d0bc] bg-white/92 px-6 py-3 text-center font-semibold text-[#2f5d31] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Talk to Sales</span>
                    <span className="button-arrow__icon" aria-hidden="true">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={480}>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#ddd4c1] bg-white/88 px-4 py-2 text-sm text-[#655f51] shadow-[0_12px_24px_rgba(91,74,38,0.06)]">
                  <span className="text-[#8b6835]">●</span>
                  Designed for soil conditioners, balanced nutrient blends, and
                  crop support programs that need stronger visual credibility.
                </div>
              </Reveal>
            </div>

            <Reveal className="relative z-10" delay={180}>
              <div className="hero-visual-shell relative mx-auto max-w-xl">
                <div className="hero-pulse-ring" aria-hidden="true" />
                <div
                  className="hero-pulse-ring hero-pulse-ring-delay"
                  aria-hidden="true"
                />

                <div className="hero-visual-card rounded-[2.1rem] border border-[#e2dac8] bg-white/95 p-5 shadow-[0_30px_90px_rgba(91,74,38,0.14)] backdrop-blur-sm sm:p-7">
                  <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#faf7ef_0%,#eee4cf_100%)] p-3">
                    <Image
                      src="/product-packaging.jpeg"
                      alt="CrownHuma Potassium Humate Product"
                      width={600}
                      height={800}
                      className="w-full rounded-[1.25rem] object-cover"
                      priority
                    />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.2rem] border border-[#e6ddca] bg-[#fcfaf4] px-4 py-3">
                      <div className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                        Soil conditioning
                      </div>
                      <div className="mt-2 font-semibold text-[#243821]">
                        Root-zone support
                      </div>
                    </div>
                    <div className="rounded-[1.2rem] border border-[#e6ddca] bg-[#fcfaf4] px-4 py-3">
                      <div className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                        Crop feeding
                      </div>
                      <div className="mt-2 font-semibold text-[#243821]">
                        Balanced uptake
                      </div>
                    </div>
                    <div className="rounded-[1.2rem] border border-[#e6ddca] bg-[#fcfaf4] px-4 py-3">
                      <div className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                        Brand fit
                      </div>
                      <div className="mt-2 font-semibold text-[#243821]">
                        Premium positioning
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-float-card hero-float-card-top rounded-2xl border border-[#2f5d31]/15 bg-[#2f5d31] px-5 py-4 text-white shadow-[0_20px_45px_rgba(47,93,49,0.24)]">
                  <div className="text-sm text-[#eef2df]">
                    Performance tested
                  </div>
                  <div className="mt-1 text-2xl font-bold">Rapid uptake</div>
                </div>

                <div className="hero-float-card hero-float-card-bottom rounded-2xl border border-[#e1d9c6] bg-white/96 px-5 py-4 shadow-[0_18px_36px_rgba(91,74,38,0.12)] backdrop-blur-md">
                  <div className="text-sm font-medium text-[#7a6c57]">
                    Trusted formulation
                  </div>
                  <div className="mt-1 text-2xl font-bold text-[#2c3f23]">
                    Soil health + yield
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#f8f4eb_100%)] py-18 lg:py-20">
        <div
          className="absolute top-10 left-0 h-56 w-56 rounded-full bg-[rgba(185,138,44,0.08)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[rgba(47,93,49,0.08)] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-6">
          <Reveal>
            <div className="rounded-[2.4rem] border border-[#d7cfbd] bg-[linear-gradient(135deg,#23371f_0%,#2f4c29_50%,#6c7c34_100%)] px-8 py-10 text-white shadow-[0_28px_70px_rgba(27,44,23,0.18)] lg:px-12">
              <div className="grid items-end gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <p className="text-sm font-semibold tracking-[0.22em] text-[#d9e4bd] uppercase">
                    Why AgriAce
                  </p>
                  <h2 className="mt-4 max-w-3xl text-4xl leading-[1.02] font-bold tracking-[-0.04em] lg:text-[3.35rem]">
                    Fertilizer solutions shaped for growers who buy on proof,
                    not promises.
                  </h2>
                </div>
                <p className="max-w-xl text-lg leading-8 text-[#eff3e4]/88">
                  The portfolio is designed around field response, commercial
                  consistency, and a cleaner premium story from first soil
                  application through final crop support.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
              <div className="rounded-full border border-[#e3d9c6] bg-white/90 px-4 py-2 text-sm font-medium text-[#655f51] shadow-[0_10px_24px_rgba(91,74,38,0.06)]">
                Product-led formulation
              </div>
              <div className="rounded-full border border-[#e3d9c6] bg-white/90 px-4 py-2 text-sm font-medium text-[#655f51] shadow-[0_10px_24px_rgba(91,74,38,0.06)]">
                Cleaner response story
              </div>
              <div className="rounded-full border border-[#e3d9c6] bg-white/90 px-4 py-2 text-sm font-medium text-[#655f51] shadow-[0_10px_24px_rgba(91,74,38,0.06)]">
                Premium brand consistency
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featureCards.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 120}>
                <div
                  className={`group relative h-full overflow-hidden rounded-[2rem] border p-8 shadow-[0_18px_42px_rgba(91,74,38,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(91,74,38,0.12)] ${
                    index === 0
                      ? "border-[#274726] bg-[linear-gradient(180deg,#284424_0%,#20331f_100%)] text-white"
                      : index === 1
                        ? "border-[#e2d8c4] bg-[linear-gradient(180deg,#fffdf8_0%,#f8f1e5_100%)]"
                        : "border-[#dfd3bf] bg-[linear-gradient(180deg,#fff8ef_0%,#f5ebdb_100%)]"
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1.5 opacity-90"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(90deg,#90ab5a,#d9d784)"
                          : index === 1
                            ? "linear-gradient(90deg,#7e8d2f,#b98a2c)"
                            : "linear-gradient(90deg,#8b6835,#d2a654)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`${feature.iconBg} flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_14px_28px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={feature.iconPath}
                        />
                      </svg>
                    </div>

                    <div
                      className={`rounded-full px-3 py-1 text-[0.72rem] font-semibold tracking-[0.18em] uppercase ${
                        index === 0
                          ? "border border-white/14 bg-white/8 text-[#e2ebc8]"
                          : "border border-[#ece4d3] bg-white/90 text-[#8b6835]"
                      }`}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  <div
                    className={`mt-7 text-[0.72rem] font-semibold tracking-[0.22em] uppercase ${
                      index === 0 ? "text-[#cddca4]" : "text-[#8b6835]"
                    }`}
                  >
                    {feature.kicker}
                  </div>
                  <h3
                    className={`mt-3 text-[1.95rem] leading-tight font-bold ${
                      index === 0 ? "text-white" : "text-[#2c3f23]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`mt-4 leading-7 ${
                      index === 0 ? "text-[#eff3e6]/86" : "text-[#655f51]"
                    }`}
                  >
                    {feature.copy}
                  </p>

                  <div
                    className={`mt-7 flex items-center gap-3 text-sm font-semibold ${
                      index === 0 ? "text-[#d8e2bb]" : "text-[#5f6f2c]"
                    }`}
                  >
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${
                        index === 0
                          ? "bg-white/10 text-white"
                          : "bg-[#f0eadb] text-[#8b6835]"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    {feature.footer}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4efe3_100%)] py-18">
        <div
          className="absolute top-12 right-0 h-72 w-72 rounded-full bg-[rgba(126,141,47,0.08)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[rgba(185,138,44,0.08)] blur-3xl"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#8b6835] uppercase">
                Product Range
              </p>
              <h2 className="mt-4 text-4xl leading-[1.03] font-bold tracking-[-0.04em] text-[#2c3f23]">
                Product lines matched to serious crop development
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#655f51]">
                A portfolio shaped around premium soil conditioning,
                dependable nutrient delivery, and practical agricultural use in
                the field.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal delay={0}>
              <div className="group relative h-full overflow-hidden rounded-[2.25rem] border border-[#e4dac7] bg-[linear-gradient(135deg,#fffdf8_0%,#f7efe0_100%)] p-6 shadow-[0_24px_55px_rgba(91,74,38,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_rgba(91,74,38,0.14)]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#2f5d31,#7e8d2f,#b98a2c)]" />
                <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.8rem] border border-[#e4dbc9] bg-white/85 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <div className="relative overflow-hidden rounded-[1.4rem] bg-[linear-gradient(180deg,#f8f3e8_0%,#efe3ca_100%)] p-4">
                      <div className="product-card-sheen" aria-hidden="true" />
                      <Image
                        src="/product-packaging.jpeg"
                        alt="CrownHuma Potassium Humate package"
                        width={560}
                        height={760}
                        className="relative z-10 mx-auto max-h-[25rem] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        priority
                      />
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#dfd5c1] bg-white/90 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.2em] text-[#8b6835] uppercase">
                      <span className="h-2 w-2 rounded-full bg-[#b98a2c]" />
                      Featured Product Focus
                    </div>
                    <h3 className="mt-5 text-[2.15rem] leading-tight font-bold tracking-[-0.03em] text-[#2c3f23]">
                      Category systems built to support complete crop programs
                    </h3>
                    <p className="mt-4 text-[1rem] leading-7 text-[#655f51]">
                      Our portfolio blends soil conditioners, balanced nutrient
                      inputs, and crop support products into a lineup designed
                      for premium agricultural performance.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#e6ddcc] bg-white/88 px-4 py-4">
                        <div className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                          Core product
                        </div>
                        <div className="mt-2 text-xl font-bold text-[#2c3f23]">
                          Potassium Humate
                        </div>
                      </div>
                      <div className="rounded-2xl border border-[#e6ddcc] bg-white/88 px-4 py-4">
                        <div className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                          Brand promise
                        </div>
                        <div className="mt-2 text-xl font-bold text-[#2c3f23]">
                          Premium field response
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-[#e5dcc9] bg-[#fffaf1] px-4 py-4">
                      <div className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#8b6835] uppercase">
                        Portfolio architecture
                      </div>
                      <div className="mt-3 grid gap-2 text-sm font-medium text-[#5f5a4c] sm:grid-cols-2">
                        <div className="rounded-full bg-white px-3 py-2">
                          Soil conditioners
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                          Balanced nutrient blends
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                          Quick-response liquids
                        </div>
                        <div className="rounded-full bg-white px-3 py-2">
                          Crop support amendments
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {productCards.map((product, index) => (
                <Reveal key={product.name} delay={(index + 1) * 110}>
                  <div
                    className={`group h-full rounded-[1.9rem] border p-5 shadow-[0_18px_42px_rgba(91,74,38,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(91,74,38,0.12)] ${
                      index % 2 === 0
                        ? "border-[#e5ddcc] bg-[linear-gradient(180deg,#fffdfa_0%,#faf4e7_100%)]"
                        : "border-[#e2d8c4] bg-[linear-gradient(180deg,#fff8ef_0%,#f4ead9_100%)]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`${product.accentClass} relative flex h-18 w-18 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] shadow-[0_14px_28px_rgba(0,0,0,0.08)]`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${product.accentGlow} opacity-95`}
                        />
                        <div className="product-card-sheen" aria-hidden="true" />
                        <svg
                          className="relative z-10 h-9 w-9 text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#8b6835] uppercase">
                            {product.eyebrow}
                          </div>
                          <div className="rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-[#7f7157] uppercase">
                            0{index + 1}
                          </div>
                        </div>
                        <h3 className="mt-2 text-[1.45rem] leading-tight font-bold text-[#2c3f23]">
                          {product.name}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#655f51]">
                          {product.description}
                        </p>

                        <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#5f6f2c]">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f1ebdc] text-[#8b6835] transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                          Explore category
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={220}>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="btn-secondary button-arrow button-arrow--light"
              >
                <span>View All Products</span>
                <span className="button-arrow__icon" aria-hidden="true">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1f311d] pt-10 pb-0">
        <div
          className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute top-16 left-[8%] h-56 w-56 rounded-full bg-[rgba(185,138,44,0.16)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[10%] bottom-20 h-72 w-72 rounded-full bg-[rgba(126,141,47,0.18)] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-6">
          <div className="rounded-t-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#315f31_0%,#56752f_46%,#8a7a2f_100%)] px-8 py-14 shadow-[0_28px_70px_rgba(10,18,10,0.28)] lg:px-14 lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.22em] text-[#f2ead7] uppercase backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#f0cf6a]" />
                    Grow With Confidence
                  </div>
                </Reveal>

                <Reveal delay={90}>
                  <h2 className="mt-5 max-w-2xl text-4xl leading-[1.02] font-bold tracking-[-0.04em] text-white lg:text-[3.4rem]">
                    Ready to strengthen your next crop cycle?
                  </h2>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f5f0e4]/88 lg:text-[1.12rem]">
                    Choose a fertilizer partner focused on cleaner formulations,
                    sharper positioning, and dependable agricultural results
                    across premium soil and crop nutrition programs.
                  </p>
                </Reveal>

                <Reveal delay={220}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                      Premium agricultural positioning
                    </div>
                    <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                      Cleaner product communication
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={180}>
                <div className="rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.09)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md lg:p-7">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/10 px-5 py-4">
                      <div className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#f2ead7] uppercase">
                        Product focus
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">
                        Soil + crop nutrition
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/10 px-5 py-4">
                      <div className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#f2ead7] uppercase">
                        Next step
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">
                        Start with AgriAce
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link
                      href="/contact"
                      className="button-arrow button-arrow--light inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[#2f5d31] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>Get Started Today</span>
                      <span className="button-arrow__icon" aria-hidden="true">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="/products"
                      className="button-arrow button-arrow--glass inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>Explore Products</span>
                      <span className="button-arrow__icon" aria-hidden="true">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
