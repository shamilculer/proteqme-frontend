const MediumHero = () => {

  return (
    <section className="w-full h-150 relative overflow-hidden flex items-center px-3 lg:p-0!">
      <div className="container rounded-[14px] md:rounded-3xl h-full relative overflow-hidden flex flex-col justify-start md:justify-center px-6 py-14 sm:!p-10 md:!p-14 lg:!p-16">

        {/* Layer 1: Background Image with Parallax Scrolling Effect */}
        <div
          className="absolute inset-x-0 top-0 h-[130%] w-full -z-10 origin-center pointer-events-none"
          style={{
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
            backgroundImage: "url('/systems.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Brand dark mask overlay inside the background layer */}
          <div className="absolute inset-0 w-full h-full bg-linear-to-l from-secondary via-primary/60 to-black/10"></div>
        </div>

      </div>
    </section>
  );
};

export default MediumHero;
