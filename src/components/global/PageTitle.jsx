import React from "react";

const PageTitle = ({ title, bgImage }) => {
  return (
    <section className="relative w-full overflow-hidden px-3 sm:px-4 lg:px-0">
      <div className="container relative flex min-h-48 flex-col justify-center overflow-hidden rounded-[14px] px-6 py-12 sm:min-h-64 sm:px-10 sm:py-14 md:min-h-110 md:rounded-3xl md:p-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${bgImage || "/hero-bg.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/80 to-primary/50" />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center">
          <h1 className="text-center text-3xl text-white sm:text-4xl md:text-[72px]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
