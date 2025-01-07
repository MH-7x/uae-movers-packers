type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is included in your home moving services?",
    answer:
      "Our home moving services include packing, dismantling, transportation, unpacking, and reassembly of your furniture and belongings. We use high-quality packing materials to ensure safe transport.",
  },
  {
    question: "How much does home moving cost in the UAE?",
    answer:
      "The cost of home moving in the UAE depends on the distance, volume of items, and additional services like packing and storage. Contact us for a personalized quote.",
  },
];

export default function testing() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-32">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border rounded-lg p-4 bg-white shadow-md transition-all duration-300"
          >
            <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-xl font-bold">
                  ?
                </div>
                <span>{faq.question}</span>
              </div>
            </summary>
            <div className="mt-4 pl-11 pr-4 py-2 bg-purple-50 text-gray-700 rounded-lg border-l-4 border-purple-500">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
