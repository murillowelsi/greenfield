import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-green-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to Train in Portugal?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Limited spots available—boost your skills today!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <p className="text-sm mb-2">Next camp starts soon!</p>
          <a
            href="/booking"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-green-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            Book Your Spot
          </a>
        </div>
      </div>
    </Container>
  );
};
