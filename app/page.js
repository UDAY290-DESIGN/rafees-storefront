
"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "The Classic Black Blazer",
    category: "Tailoring",
    price: 4999,
    oldPrice: 5999,
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=85",
  },
  {
    id: 2,
    name: "Premium Oxford Shirt",
    category: "Shirts",
    price: 1999,
    oldPrice: 2499,
    tag: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=85",
  },
  {
    id: 3,
    name: "The Modern Formal Suit",
    category: "Tailoring",
    price: 6999,
    oldPrice: 7999,
    tag: "SIGNATURE",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=85",
  },
  {
    id: 4,
    name: "Essential Everyday Tee",
    category: "Essentials",
    price: 999,
    oldPrice: 1299,
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=85",
  },
];

const collections = [
  {
    name: "Formal Wear",
    subtitle: "Elegance in every detail",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1000&q=85",
    category: "Tailoring",
  },
  {
    name: "Casual Wear",
    subtitle: "Effortless everyday style",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1000&q=85",
    category: "Essentials",
  },
  {
    name: "Premium Shirts",
    subtitle: "Refined beyond ordinary",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=1000&q=85",
    category: "Shirts",
  },
];

const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

function BrandLogo({ className = "" }) {
  return (
    <img
      src="/RafeeqLogo.jpeg"
      alt="RAFEE'S Logo"
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}

function Header({ bagCount, onBagClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Collections", "#collections"],
    ["New Arrivals", "#products"],
    ["Our Story", "#story"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">

        <a href="#home" className="w-32 md:w-40">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[11px] uppercase tracking-[0.2em] text-gray-300 transition hover:text-[#D8BC8A]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            onClick={onBagClick}
            className="text-xs uppercase tracking-widest text-white hover:text-[#D8BC8A]"
          >
            Bag <span className="text-[#D8BC8A]">({bagCount})</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-[#D8BC8A] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-6 border-t border-white/10 bg-[#080808] px-6 py-7 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-[#D8BC8A]"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-black"
    >
      <img
        src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1800&q=90"
        alt="Premium men's fashion"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12">

        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#D8BC8A]">
            THE ART OF DRESSING WELL
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.1] text-white md:text-7xl">
            Style is
            <br />
            <span className="italic text-[#D8BC8A]">
              a statement.
            </span>
            <br />
            Make it yours.
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-gray-300">
            Discover a world of refined menswear, where timeless
            craftsmanship meets contemporary sophistication.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collections"
              className="border border-[#D8BC8A] bg-[#D8BC8A] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-[#D8BC8A]"
            >
              Explore Collection
            </a>

            <a
              href="#story"
              className="border border-white/30 px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-[#D8BC8A] hover:text-[#D8BC8A]"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[390px]">
            <BrandLogo />
          </div>
        </div>

      </div>
    </section>
  );
}

function Collections() {
  return (
    <section
      id="collections"
      className="bg-[#0D0D0D] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#D8BC8A]">
            CURATED FOR YOU
          </p>

          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Explore Collections
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Discover your signature style.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((item, index) => (
            <a
              href="#products"
              key={item.name}
              className="group relative h-[430px] overflow-hidden bg-[#171717]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#D8BC8A]">
                  0{index + 1} / COLLECTION
                </p>

                <h3 className="mt-3 font-serif text-3xl text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs text-gray-300">
                  {item.subtitle}
                </p>

                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#D8BC8A]">
                  Discover More →
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

function Products({ addToBag }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Tailoring",
    "Shirts",
    "Essentials",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
        (product) => product.category === activeCategory
      );

  return (
    <section
      id="products"
      className="bg-[#080808] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#D8BC8A]">
              SELECTED PIECES
            </p>

            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
              The RAFEE’S Edit
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Pieces that define understated luxury.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`border-b pb-2 text-[10px] uppercase tracking-[0.15em] transition ${activeCategory === category
                    ? "border-[#D8BC8A] text-[#D8BC8A]"
                    : "border-transparent text-gray-500 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-7">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#161616]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-black/80 px-3 py-2 text-[8px] tracking-[0.15em] text-[#D8BC8A]">
                  {product.tag}
                </span>

                <button
                  onClick={() => addToBag(product)}
                  className="absolute bottom-0 left-0 w-full translate-y-0 bg-[#D8BC8A] py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-black transition duration-300 md:translate-y-full md:group-hover:translate-y-0"
                >
                  Add to Bag +
                </button>
              </div>

              <div className="pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58B62]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-sm text-white md:text-base">
                  {product.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-[#D8BC8A]">
                    {formatPrice(product.price)}
                  </span>

                  <span className="text-xs text-gray-600 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section
      id="story"
      className="bg-[#11100E] px-6 py-24 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1100&q=85"
            alt="Men's fashion craftsmanship"
            className="h-[470px] w-full object-cover"
          />

          <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 border border-[#D8BC8A]/50 md:block" />
        </div>

        <div className="md:pl-10">
          <p className="text-[10px] tracking-[0.4em] text-[#D8BC8A]">
            THE RAFEE’S PHILOSOPHY
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl">
            Beyond Fashion.
            <br />
            <span className="italic text-[#D8BC8A]">
              A Way of Living.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-gray-400">
            At RAFEE’S, we believe true style is never about
            following trends. It is about expressing individuality,
            confidence, and character.
          </p>

          <p className="mt-4 text-sm leading-8 text-gray-400">
            Every piece is chosen with an eye for detail,
            quality, and timeless design. Our vision is simple:
            make everyday dressing feel exceptional.
          </p>

          <div className="mt-9 border-l border-[#D8BC8A] pl-5">
            <p className="font-serif text-xl italic text-[#D8BC8A]">
              "Elegance is an attitude."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

        <div>
          <div className="w-40">
            <BrandLogo />
          </div>

          <p className="mt-5 max-w-xs text-xs leading-7 text-gray-500">
            Refined menswear for those who appreciate timeless
            style and understated elegance.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] text-white">
            EXPLORE
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-xs text-gray-500">
            <a href="#home" className="hover:text-[#D8BC8A]">Home</a>
            <a href="#collections" className="hover:text-[#D8BC8A]">Collections</a>
            <a href="#products" className="hover:text-[#D8BC8A]">Shop</a>
            <a href="#story" className="hover:text-[#D8BC8A]">About Us</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] text-white">
            CONNECT WITH US
          </h3>

          <p className="mt-6 text-xs leading-7 text-gray-500">
            For enquiries, styling assistance, or collaborations,
            get in touch with us.
          </p>

          <a
            href="mailto:hello@rafees.com"
            className="mt-3 inline-block text-sm text-[#D8BC8A] hover:text-white"
          >
            hello@rafees.com
          </a>
        </div>

      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[9px] uppercase tracking-[0.18em] text-gray-600 md:flex-row">
        <p>© 2026 RAFEE’S. All rights reserved.</p>
        <p>Designed with elegance.</p>
      </div>
    </footer>
  );
}

function BagPanel({ bag, closeBag, removeFromBag }) {
  const total = bag.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Close shopping bag"
        onClick={closeBag}
        className="absolute inset-0 bg-black/70"
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#101010] p-6">

        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <h2 className="font-serif text-2xl text-white">
            Your Bag
          </h2>

          <button
            onClick={closeBag}
            className="text-xl text-[#D8BC8A]"
            aria-label="Close bag"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          {bag.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-white">
                Your bag is empty.
              </p>

              <p className="mt-3 text-xs text-gray-500">
                Discover something exceptional.
              </p>
            </div>
          ) : (
            bag.map((item) => (
              <div
                key={item.id}
                className="mb-6 flex gap-4 border-b border-white/10 pb-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-20 object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm text-white">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#D8BC8A]">
                    {formatPrice(item.price)}
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>

                  <button
                    onClick={() => removeFromBag(item.id)}
                    className="mt-3 text-[9px] uppercase tracking-widest text-gray-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="mb-5 flex justify-between">
            <span className="text-sm text-gray-400">
              Subtotal
            </span>

            <span className="text-sm text-[#D8BC8A]">
              {formatPrice(total)}
            </span>
          </div>

          <button
            disabled={bag.length === 0}
            className="w-full bg-[#D8BC8A] py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Proceed to Checkout
          </button>

          <p className="mt-3 text-center text-[9px] text-gray-600">
            Demo only — checkout is not connected.
          </p>
        </div>

      </aside>
    </div>
  );
}

export default function Home() {
  const [bag, setBag] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);

  const bagCount = bag.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const addToBag = (product) => {
    setBag((currentBag) => {
      const existing = currentBag.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentBag.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentBag,
        { ...product, quantity: 1 },
      ];
    });
  };

  const removeFromBag = (id) => {
    setBag((currentBag) =>
      currentBag.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#D8BC8A] selection:text-black">

      <Header
        bagCount={bagCount}
        onBagClick={() => setBagOpen(true)}
      />

      <main>
        <Hero />
        <Collections />
        <Products addToBag={addToBag} />
        <BrandStory />
      </main>

      <Footer />

      {bagOpen && (
        <BagPanel
          bag={bag}
          closeBag={() => setBagOpen(false)}
          removeFromBag={removeFromBag}
        />
      )}

    </div>
  );
}
