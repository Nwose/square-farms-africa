import { Mail, Phone, MapPin } from "lucide-react";
import Button from "./ui/button";
import ContactInfo from "./ui/contactInfo";
import Input from "./ui/input";
import Textarea from "./ui/textArea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-glancyr">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join the agricultural revolution? Contact us today to learn
            how Square Farms Africa can help transform your farming operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-glancyr">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 mb-8">
                Whether you're a farmer looking to improve your operations or an
                investor interested in supporting Nigerian agriculture, we'd
                love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Email"
                content="info@squarefarmsafrica.com"
              />
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Phone"
                content="+234 (0) 123 456 7890"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Location"
                content="Lagos, Nigeria"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+234 (0) 123 456 7890" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your farming needs or how we can help..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#3f6f30] hover:bg-[#37901c] py-3"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
