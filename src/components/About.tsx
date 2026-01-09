const About = () => {
  return (
    <section id="" className="min-h-screen py-12 px-6 space-y-5">
      <div className="lg:grid lg:grid-cols-12 gap-5 ">
        <div className="cont flex flex-col md: justify-between items-start gap-5 flex-1 lg:col-span-8">
          <div className="space-y-5">
            <p className="text-black bg-white px-4 py-2 font-medium rounded-full inline-block">
              Best Cocktails
            </p>
            <h2 className="text-4xl font-modern-negra lg:max-w-xl lg:text-6xl">
              Where every detail matters—from muddle to garnish
            </h2>
          </div>
        </div>

        <div className="sub cont space-y-5 flex-1 lg:col-span-4 lg:flex lg:flex-col lg:justify-between lg:text-lg font-thin">
          <p>
            Every cocktail we serve is a reflection of our obsession with detail{" "}
            <span>—</span> from the first muddle to the final garnish. That care
            is what turns a simple drink into something truly memorable.
          </p>

          <div>
            <p className="text-yellow">
              <span className="text-xl lg:text-3xl">4.5</span>
              /5
            </p>
            <p className="text-sm ">More than +12000 customers</p>
          </div>
        </div>
      </div>

      <div id="grid-container" className="space-y-5">
        <div className="t-grid grid grid-cols-1 lg:grid-cols-12 gap-5  oveflow-hidden h-72 overflow-hidden ">
          <div className="col-span-3 rounded-3xl bg-yellow w-full h-full">
            <img
              src={"/images/abt1.png"}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-span-6 rounded-3xl bg-yellow w-full h-full">
            <img
              src={"/images/abt2.png"}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-span-3 rounded-3xl bg-yellow w-full h-full">
            <img
              src={"/images/abt5.png"}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className="space-y-5 grid grid-cols-1 lg:grid-cols-12 gap-5  h-72  overflow-hidden">
          <div className="col-span-8 rounded-3xl bg-yellow w-full h-full">
            <img
              src={"/images/abt3.png"}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-span-4 rounded-3xl bg-yellow w-full h-full">
            <img
              src={"/images/abt4.png"}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
