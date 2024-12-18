export function getFAQs(For: string) {
  if (!For) return [];
  switch (For) {
    case "home-moving":
      console.log("home-moving");

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
    case "office-moving":
      console.log("home-moving");
      return [
        {
          question: "How long does an office move take?",
          answer:
            "The time required depends on the size of your office and the scope of the move. We provide a detailed timeline during the planning phase.",
        },
        {
          question: "Do you offer weekend office moving services?",
          answer:
            "Yes, we offer flexible scheduling, including weekends, to minimize disruption to your business.",
        },
        {
          question: "Can you handle sensitive documents and IT equipment?",
          answer:
            "Absolutely. Our team ensures the safe handling and secure transportation of all sensitive materials and IT systems.",
        },
        {
          question: "What areas do you serve for office moving?",
          answer:
            "We provide office moving services across major cities, including Dubai, Sharjah, and Ajman.",
        },
        {
          question:
            "Do you offer packing and unpacking services for office moves?",
          answer:
            "Yes, we provide comprehensive packing and unpacking services to ensure your office items are transported securely and efficiently.",
        },
        {
          question: "Can you disassemble and reassemble office furniture?",
          answer:
            "Yes, our team is experienced in disassembling and reassembling office furniture as part of the moving process.",
        },
        {
          question: "Are your office moving services insured?",
          answer:
            "Yes, we provide insurance options to give you peace of mind during the moving process.",
        },
        {
          question: "How much does an office move cost?",
          answer:
            "The cost of an office move depends on factors such as the size of your office, distance, and services required. We provide a detailed quote after an initial consultation.",
        },
      ];
    case "heavy-goods-moving":
      return [
        {
          question: "What are heavy goods moving services?",
          answer:
            "Heavy goods moving services specialize in the transportation of large and bulky items, such as furniture, machinery, and equipment, using specialized tools and vehicles.",
        },
        {
          question:
            "Do you provide heavy goods moving services across the UAE?",
          answer:
            "Yes, we offer heavy goods moving services across all major cities in the UAE, including Dubai, Sharjah, Abu Dhabi, and Ajman.",
        },
        {
          question: "What items are considered heavy goods?",
          answer:
            "Heavy goods typically include large furniture, industrial equipment, heavy appliances, safes, and construction machinery.",
        },
        {
          question:
            "How do you ensure the safety of heavy goods during transportation?",
          answer:
            "We use specialized equipment like dollies, cranes, and harnesses, along with proper packing techniques and trained professionals to ensure the safety of your heavy goods.",
        },
        {
          question: "Do you offer insurance for heavy goods during moving?",
          answer:
            "Yes, we provide comprehensive insurance coverage to protect your heavy goods against potential damage during the moving process.",
        },
        {
          question:
            "What factors determine the cost of heavy goods moving services?",
          answer:
            "The cost depends on factors such as the size and weight of the items, the distance of the move, required equipment, and any additional services like packing and unpacking.",
        },
        {
          question:
            "How far in advance should I book heavy goods moving services?",
          answer:
            "It’s recommended to book at least 1-2 weeks in advance to ensure availability and proper planning for your move.",
        },
        {
          question:
            "Can you handle moving heavy goods from high-rise buildings in the UAE?",
          answer:
            "Yes, we are equipped to handle moves from high-rise buildings, using specialized equipment and adhering to building regulations in the UAE.",
        },
      ];
    case "apartment-moving":
      return [
        {
          question: "How much does apartment moving cost?",
          answer:
            "The cost of apartment moving varies depending on several factors, including the size of your move (number of rooms/items), the distance of the move, the services you require (packing, unpacking, etc.), and the time of year. For a personalized and accurate estimate, we recommend contacting us for a free, no-obligation quote. We'll assess your specific needs and provide a transparent breakdown of the costs involved.",
        },
        {
          question: "Are my belongings insured during the move?",
          answer:
            "Yes, we understand the importance of protecting your valuable belongings. We offer various insurance options to provide coverage during the moving process. We can explain the different coverage levels and help you choose the best option for your needs. We also take great care in handling your items to minimize any risk of damage.",
        },
        {
          question: "How far in advance should I book my apartment move?",
          answer:
            "We recommend booking your apartment move at least 2-4 weeks in advance, especially if you're moving during peak season (typically summer months and weekends). Booking early ensures we can secure your preferred moving date and allows ample time for planning and preparation. However, we understand that sometimes moves are last-minute, so we'll always do our best to accommodate your needs.",
        },
        {
          question: "What is included in a typical apartment moving service?",
          answer:
            "A typical apartment moving service usually includes loading and unloading of your belongings, transportation to your new apartment, and basic disassembly/reassembly of furniture. We offer a range of additional services, such as packing and unpacking, storage solutions, and specialty item moving (pianos, artwork, etc.), which can be added to your move based on your requirements.",
        },
        {
          question: "Do I need to pack everything myself?",
          answer:
            "No, you don't have to pack everything yourself. We offer full and partial packing services to suit your needs and budget. Our professional packers use high-quality packing materials to ensure your belongings are safely protected during transit. If you prefer to pack yourself, we can provide packing supplies.",
        },
        {
          question: "What should I do to prepare for moving day?",
          answer:
            "To ensure a smooth moving day, we recommend decluttering before packing, clearly labeling all boxes with their contents and the room they belong in, disassembling furniture if necessary, and keeping valuables and essential items with you. It's also helpful to clear pathways in both your old and new apartments and inform building management of your move.",
        },
        {
          question: "What if there is damage to my belongings during the move?",
          answer:
            "While we take every precaution to prevent damage, accidents can happen. If any damage occurs during the move, please notify our team immediately. We will document the damage and work with you to resolve the issue according to our insurance policy. We are committed to handling such situations fairly and efficiently.",
        },
        {
          question: "Do you move items up/down stairs or elevators?",
          answer:
            "Yes, our experienced movers are equipped to handle moves involving stairs and elevators. However, it's important to inform us of any specific access challenges, such as narrow staircases or small elevators, during the initial consultation. This allows us to plan accordingly and bring the necessary equipment to ensure a safe and efficient move. There may be additional charges for moves involving excessive stairs or difficult access.",
        },
      ];
    default:
      break;
  }
}
