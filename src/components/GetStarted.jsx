import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="py-24 px-16 ">
      <div className="bg-darkGreen rounded-lg shadow-lg p-16 flex flex-col gap-8 items-center">
        <h2 className="text-4xl font-bold text-center text-gray">
          Create a free account to get started
        </h2>
        <p className="text-2xl text-gray text-center">
          Create a free account today to get access to our community curated
          recipes and get to cooking delicious dishes today!
        </p>
        <Link
          to="/signup"
          className="px-8 py-4 text-2xl bg-lightGreen text-gray rounded-md"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
