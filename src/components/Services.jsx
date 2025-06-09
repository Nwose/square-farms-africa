import {
  DollarSign,
  Truck,
  Users,
  BarChart3,
  Leaf,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Agricultural Finance",
      description:
        "Providing accessible funding solutions to help farmers invest in equipment, seeds, and sustainable farming practices.",
    },
    {
      icon: Truck,
      title: "Supply Chain Support",
      description:
        "Connecting farmers to markets and ensuring efficient distribution of agricultural products across Nigeria.",
    },
    {
      icon: Users,
      title: "Farmer Training",
      description:
        "Comprehensive training programs on modern farming techniques, business management, and sustainable practices.",
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description:
        "Real-time market data and insights to help farmers make informed decisions about crop selection and pricing.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Promoting eco-friendly farming methods that protect the environment while maximizing productivity.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Insurance solutions and risk mitigation strategies to protect farmers from weather and market uncertainties.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-glancyr">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to farmers through our integrated
            platform, combining finance, resources, and infrastructure to drive
            agricultural success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              <div className="bg-[#3f6f30] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#3f6f30] to-[#a1db8f] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 font-glancyr">
              Ready to Transform Your Farm?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of Nigerian farmers who have already transformed
              their agricultural practices with our comprehensive support
              system.
            </p>
            <button className="bg-white text-[#3f6f30] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
