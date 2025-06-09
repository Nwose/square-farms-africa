import { MoveRight, Sprout, TrendingUp, Users } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50 pt-10"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:mx-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
              Empowering Nigerian
              <span className="text-green-600"> Agriculture</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              An innovative farming enterprise dedicated to enhancing both crop
              and animal production in Nigeria through integrated finance,
              resources, and infrastructural support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-md flex items-center justify-center rounded-md">
                Learn More
                <MoveRight className="ml-2 sm:ml-4" />
              </button>
              <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 sm:px-8 sm:py-4 text-md sm:text-lg rounded-md">
                Get Started
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Sprout className="text-3xl sm:text-4xl text-green-800" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-green-800">
                  500+
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Farmers Empowered
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-3xl sm:text-4xl text-green-800" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-green-800">
                  50+
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Communities
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="text-3xl sm:text-4xl text-green-800" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-green-800">
                  85%
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Growth Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-to-br from-green-700 to-green-500 rounded-3xl p-6 sm:p-8 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-green-600/90 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nigerian Agriculture"
                className="relative z-10 w-full h-64 sm:h-80 object-cover rounded-2xl"
              />
              <div className="relative z-10 mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Sustainable Growth
                </h3>
                <p className="text-green-100 text-sm sm:text-base">
                  Building a sustainable future for agriculture through
                  innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
