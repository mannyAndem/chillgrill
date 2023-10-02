import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section className="py-24 px-16 bg-veryLightGreen flex gap-8 items-center">
      <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
        <img src={aboutImg} className="object-cover" />
      </div>

      <div className="w-1/2 self-center flex flex-col gap-8">
        <h2 className="text-darkGreen text-4xl  font-semi-bold">
          About the ChillGrill
        </h2>
        <p className="text-xl text-darkGreen">
          The ChillGrill is a community of food enthusiasts sharing and
          discovering new ways to advance the art of food and dining. With a
          carefully curated stock of taste-numbing recipes, the ChillGrill is
          your one stop shop for anything food.
        </p>
        <button className="px-8 py-4 text-2xl bg-lightGreen text-gray rounded-md">
          See More
        </button>
      </div>
    </section>
  );
};

export default About;
