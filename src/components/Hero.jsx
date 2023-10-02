import heroImg from "../assets/images/lily-banse--YHSwy6uqvk-unsplash.jpg";

const Hero = () => {
  return (
    <section className="px-16 py-24 flex gap-8 items-center ">
      <div className="w-1/2 flex flex-col gap-8 py-24 ">
        <h1 className="text-6xl font-bold text-darkGreen">
          Get started with hundreds of expert created and community curated
          recipes!
        </h1>
        <button className="px-8 py-4 text-2xl bg-lightGreen text-gray rounded-md">
          Get Started
        </button>
      </div>
      <div className="w-1/2 self-stretch h-auto rounded-lg overflow-hidden shadow-lg">
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
