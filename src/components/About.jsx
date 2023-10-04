import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section className="py-24 px-5  bg-veryLightGreen flex flex-col gap-8 items-center lg:px-16 lg:flex-row">
      <div className="w-full rounded-lg overflow-hidden shadow-lg lg:w-1/2">
        <img src={aboutImg} className="object-cover" />
      </div>

      <div className="w-full self-center flex flex-col gap-8 lg:w-1/2">
        <h2 className="text-darkGreen text-2xl font-semi-bold lg:text-4xl">
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
