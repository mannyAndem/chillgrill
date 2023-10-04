import heroImg from "../assets/images/lily-banse--YHSwy6uqvk-unsplash.jpg";

const Hero = () => {
  return (
    <section className="px-5 lg:px-16 py-24 flex flex-col-reverse gap-8 items-center lg:flex-row">
      <div className="w-full flex flex-col gap-8 py-24 lg:w-1/2">
        <h1 className="text-4xl  font-bold text-darkGreen lg:text-6xl">
          Get started with hundreds of expert created and community curated
          recipes!
        </h1>
        <button className="px-8 py-4 text-2xl bg-lightGreen text-gray rounded-md">
          Get Started
        </button>
      </div>
      <div className="w-full self-stretch h-auto rounded-lg overflow-hidden shadow-lg lg:w-1/2">
        <img
          src={heroImg}
          className="object-cover h-full"
          alt="Image of meaty dish"
        />
      </div>
    </section>
  );
};

export default Hero;
