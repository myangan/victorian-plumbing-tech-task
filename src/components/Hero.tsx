import { useState } from "react";
import { HeroTabs } from "../consts/Hero";
import { formatTitle } from "../utils/formatters";

const Hero = ({ slug }: { slug: string }) => {
  const [active, setActive] = useState(HeroTabs[0]);

  return (
    <section className="bg-transparent text-black py-20 ">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          {formatTitle(slug)}
        </h1>
        <div className="flex flex-row w-full justify-center gap-10">
          {HeroTabs.map((tab) => (
            <div key={tab.label} className="mb-6">
              <button
                onClick={() => setActive(tab)}
                className={`text-2xl font-semibold mb-2 hover:scale-110 ${
                  active.label === tab.label ? "text-green-500 underline" : ""
                }`}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
        <div className="md:mx-30">{active.value}</div>
      </div>
    </section>
  );
};

export default Hero;
