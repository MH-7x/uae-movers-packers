export function getFAQs(For: string) {
  if (!For) return [];
  switch (For) {
    case "Home":
      return [
        {
          question: "What is included in your home moving services?",
          answer:
            "Our home moving services include packing, dismantling, transportation, unpacking, and reassembly of your furniture and belongings. We use high-quality packing materials to ensure safe transport.",
        },
        {
          question: "How much does home moving cost in the UAE?",
          answer:
            "The cost of home moving depends on the size of your home, the services required, and the distance. Prices typically range from 600 AED for apartments to 4500 AED for large villas.",
        },
        {
          question: "Do you provide packing materials for home moving?",
          answer:
            "Yes, we provide high-quality packing materials, including boxes, bubble wrap, and protective covers, to ensure the safety of your belongings during the move.",
        },
        {
          question: "How long does a home move typically take?",
          answer:
            "The duration of a home move depends on the size of the property and the distance. Typically, moving a 1-bedroom apartment takes 4-6 hours, while larger villas may take a full day.",
        },
        {
          question: "Do you offer home moving services in all UAE cities?",
          answer:
            "Yes, we provide home moving services across all major UAE cities, including Dubai, Sharjah, Abu Dhabi, Ajman, and Ras Al Khaimah.",
        },
        {
          question: "How do I book your home moving services?",
          answer:
            "You can book our home moving services by contacting us through our website, calling our hotline, or sending us an email. We offer free consultations and quotes.",
        },
        {
          question: "Are my belongings insured during the move?",
          answer:
            "Yes, we ensure the safety of your belongings and provide insurance options to cover any unforeseen damage during the move.",
        },
      ];

    default:
      break;
  }
}
