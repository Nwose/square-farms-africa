const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-center">
    <div className="bg-[#d4f2cb] p-3 rounded-full mr-4">{icon}</div>
    <div>
      <div className="font-semibold text-primary">{title}</div>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

export default ContactInfo;
