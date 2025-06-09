import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      id="vision"
      className="py-20 bg-gradient-to-br from-[#3f6f30] to-[#a1db8f] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-glancyr">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-glancyr">Vision</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              To cultivate a future where farming thrives through innovation and
              collaboration, empowering farmers for sustainable growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-glancyr">Mission</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              To be the backbone of Nigerian farmers by providing finance,
              market access, and sustainable agricultural solutions that drive
              productivity and profitability.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 font-glancyr">Our Impact</h3>
            <p className="text-lg text-white/90">
              Through our comprehensive approach, we're not just changing
              individual farms – we're transforming entire communities and
              contributing to Nigeria's agricultural revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
