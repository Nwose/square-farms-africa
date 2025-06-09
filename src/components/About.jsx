import { Target, Users, Lightbulb, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Focused Mission",
      description:
        "Enhancing both crop and animal production across Nigeria with targeted solutions.",
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description:
        "Supporting agricultural entrepreneurs through comprehensive resources and guidance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Drive",
      description:
        "Implementing cutting-edge farming techniques and sustainable practices.",
    },
    {
      icon: Globe,
      title: "Community Impact",
      description:
        "Building stronger agricultural communities through collaboration and support.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-glancyr">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Square Farms Africa is a forward-thinking agricultural enterprise.
            From poultry farming to innovative crop production techniques, we're
            building a sustainable future for agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4 sm:px-6 md:px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3f6f30] group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6 font-glancyr">
                Our Commitment
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We enhance crop and animal production in Nigeria by empowering
                farmers with the resources they need to succeed. Through our
                integrated approach combining finance, resources, and
                infrastructure, we're transforming Nigerian agriculture.
              </p>
              <div className="space-y-4">
                {[
                  "Sustainable farming practices",
                  "Financial support and resources",
                  "Infrastructure development",
                  "Community collaboration",
                ].map((item, i) => (
                  <div className="flex items-center" key={i}>
                    <div className="w-3 h-3 bg-[#3f6f30] rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Agricultural Innovation"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
