import React from "react"; 

const OurService = () => {
  const sections = [
    {
      title: "SERVICES",
      content:
        "Prompt and sincere service has always been a hallmark of Harsh Enterprises. Customers receive the same attentive care whether they choose to make a small purchase or a bulk order, ensuring a smooth and satisfying experience every time."
    },
    {
      title: "QUALITY ASSURANCE",
      content:
        "Every raw material used in our products undergoes stringent quality tests by our in-house team, in addition to mandatory quality certifications. The result is a product that meets the highest standards of durability, performance, and excellence."
    },
    {
      title: "TRUST",
      content:
        "With years of dedicated service, Harsh Enterprises has built a strong foundation of trust. Our clients rely on our honest advice, industry certifications, and the active involvement of our core management team in maintaining product quality and finish."
    },
    {
      title: "EXPERTISE",
      content:
        "Our team combines years of industry experience with forward-thinking innovation to ensure that Harsh Enterprises delivers products of the highest standard. Our extensive knowledge base, refined design sensibilities, and in-house quality control guarantee reliable, high-performing solutions."
    },
    {
      title: "VARIETY",
      content:
        "Harsh Enterprises offers a wide selection of products under one roof. Whether it’s industrial materials, manufacturing supplies, or custom-designed solutions, we ensure every customer enjoys a diverse range of choices tailored to their needs."
    }
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {section.title}:
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
