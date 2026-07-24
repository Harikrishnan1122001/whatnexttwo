import React from "react";
import { motion } from "framer-motion";
import { CardamomArt, TurmericArt, FloralArt } from "./ProductArt";
import "./Products.css";

const reveal = (dir = 1) => ({
  hidden: { opacity: 0, x: 40 * dir },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
});

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PRODUCTS = [
  {
    id: "cardamom",
    tag: "The Queen of Spices",
    title: "Cardamom",
    art: CardamomArt,
    desc:
      "Sourced from trusted estates and auctions, then graded and processed to protect its bright green colour, bold size and rich aroma.",
    features: [
      "Naturally grown & handpicked",
      "High aroma retention",
      "Uniform grading & polishing",
      "Moisture-controlled storage",
    ],
    extra: {
      heading: "Grades & sizes",
      rows: [
        ["Colour grade", "Bright natural green, premium appearance, superior aroma retention"],
        ["Fruit grade", "Bold, well-formed pods with strong internal aroma, ideal for grinding"],
      ],
      sizes: ["8mm Super Jumbo", "7mm Jumbo", "6mm Extra Bold", "5mm Bold"],
    },
    idealFor: "Food industry · Ayurveda · Pharmaceuticals · Spice blending",
  },
  {
    id: "turmeric",
    tag: "Nature's Golden Healer",
    title: "Turmeric",
    art: TurmericArt,
    desc:
      "Sourced directly from trusted farmers, our turmeric is prized for high curcumin content, deep golden colour and a strong natural aroma.",
    features: [
      "Naturally cultivated rhizomes",
      "Optimal maturity harvesting",
      "Low moisture content",
      "Strict quality inspection",
    ],
    extra: {
      heading: "Available forms",
      rows: [
        ["Whole fingers", "Machine cleaned and polished for a consistent, export-ready look"],
        ["Powder", "Export-quality grinding with hygienic packing"],
      ],
      sizes: ["Food industry", "Health & wellness", "Cosmetics", "Pharmaceuticals"],
    },
    idealFor: "Powerful antioxidant · Anti-inflammatory · Immunity support",
  },
  {
    id: "floral",
    tag: "For Fine Fragrance",
    title: "Floral Extracts",
    art: FloralArt,
    desc:
      "We hand-select fresh flowers for absolutes, concretes and perfume oils that hold on to their true botanical character and purity.",
    features: [
      "Bulk quantity supply",
      "Moisture-proof packaging",
      "Aroma & freshness retention",
      "Private labeling options",
    ],
    extra: {
      heading: "Botanicals we work with",
      chips: [
        "Jasmine Grandiflorum",
        "Jasmine Sambac",
        "Tuberose",
        "Rose",
        "Champaca",
        "Mimosa",
        "Lotus",
        "Vetiver",
        "Lemongrass",
        "Davana",
      ],
    },
    idealFor: "Perfumery · Aromatherapy · Cosmetics · Incense",
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <motion.div
        className="products__head"
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <span className="eyebrow">What We Export</span>
        <h2>
          Three raw materials.
          <br />
          <em>One export-grade standard.</em>
        </h2>
      </motion.div>

      {PRODUCTS.map((p, i) => {
        const Art = p.art;
        const flipped = i % 2 === 1;
        return (
          <div
            className={`product-row ${flipped ? "product-row--flip" : ""}`}
            key={p.id}
            id={p.id}
          >
            <motion.div
              className="product-row__art"
              variants={reveal(flipped ? 1 : -1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="product-row__art-bg" />
              <Art />
            </motion.div>

            <motion.div
              className="product-row__copy"
              variants={reveal(flipped ? -1 : 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <span className="product-row__tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <ul className="product-row__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="var(--sun-orange)" opacity="0.16" />
                      <path
                        d="M4.5 8.2l2.2 2.2 4.6-5"
                        stroke="var(--sun-red)"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {p.extra.rows && (
                <div className="product-row__extra">
                  <h4>{p.extra.heading}</h4>
                  {p.extra.rows.map(([k, v]) => (
                    <div className="extra-row" key={k}>
                      <strong>{k}</strong>
                      <span>{v}</span>
                    </div>
                  ))}
                  <div className="extra-sizes">
                    {p.extra.sizes.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {p.extra.chips && (
                <div className="product-row__extra">
                  <h4>{p.extra.heading}</h4>
                  <div className="chip-cloud">
                    {p.extra.chips.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="product-row__ideal">
                <strong>Ideal for&nbsp;</strong>
                {p.idealFor}
              </p>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
