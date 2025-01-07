export function generateJSONLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": process.env.PUBLIC_URL,
        url: process.env.PUBLIC_URL,
        name: "Professional Movers and Packers in Dubai | RWahab Movers UAE",
        isPartOf: {
          "@id": `${process.env.PUBLIC_URL}#website`,
        },
        about: {
          "@id": `${process.env.PUBLIC_URL}#organization`,
        },
        primaryImageOfPage: {
          "@id": `${process.env.PUBLIC_URL}#primaryimage`,
        },
        image: {
          "@id": `${process.env.PUBLIC_URL}#primaryimage`,
        },
        thumbnailUrl: `${process.env.PUBLIC_URL}/images/R-Wahab-Movers-UAE.jpg`,
        datePublished: "2025-01-05T08:00:00+00:00",
        dateModified: "2025-01-05T08:00:00+00:00",
        description:
          "Looking for affordable and reliable movers and packers in Dubai? RWahab Movers UAE offers professional moving services tailored to your needs. Get a free quote today!",
        breadcrumb: {
          "@id": `${process.env.PUBLIC_URL}#breadcrumb`,
        },
        inLanguage: "en-AE",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`${process.env.PUBLIC_URL}`],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${process.env.PUBLIC_URL}#localbusiness`,
        name: "RWahab Movers UAE",
        description:
          "Affordable and reliable moving and packing services across Dubai and the UAE. Specializing in residential, office, and heavy goods relocation.",
        url: `${process.env.PUBLIC_URL}`,
        telephone: "+971 123456789",
        email: "wk0131839@gamil.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Building No. 12, Street No. 4",
          addressLocality: "Al Yarmook",
          addressRegion: "Sharjah",
          postalCode: "00000",
          addressCountry: "AE",
        },

        areaServed: [
          {
            "@type": "Place",
            name: "Dubai",
          },
          {
            "@type": "Place",
            name: "Abu Dhabi",
          },
          {
            "@type": "Place",
            name: "Sharjah",
          },
          {
            "@type": "Place",
            name: "Ajman",
          },
          {
            "@type": "Place",
            name: "Ras Al Khaimah",
          },
          {
            "@type": "Place",
            name: "Umm Al Quwain",
          },
        ],
        openingHours: "Mo-Su 08:00-20:00",
        sameAs: [
          "https://www.facebook.com/rwahabmoversuae/",
          "https://www.instagram.com/rwahabmoversuae/",
        ],
        logo: {
          "@type": "ImageObject",
          "@id": `${process.env.PUBLIC_URL}#logo`,
          url: `${process.env.PUBLIC_URL}images/logo.png`,
          contentUrl: `${process.env.PUBLIC_URL}images/logo.png`,
          width: 200,
          height: 50,
          caption: "RWahab Movers UAE Logo",
        },
        image: {
          "@id": `${process.env.PUBLIC_URL}#primaryimage`,
        },
        serviceOffered: [
          {
            "@type": "Service",
            name: "Home Moving",
            url: `${process.env.PUBLIC_URL}/home-moving`,
            description: "Smooth home relocation services in the UAE.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Office Moving",
            url: `${process.env.PUBLIC_URL}/office-moving`,
            description: "Efficient office relocation services.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Heavy Goods Moving",
            url: `${process.env.PUBLIC_URL}/heavy-goods-moving`,
            description: "Safe transport for heavy items.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Small / Single Furniture Moving",
            url: `${process.env.PUBLIC_URL}/small-or-single-furniture-moving`,
            description: "Quick and reliable small furniture moves.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Moving and Cargo Packing",
            url: `${process.env.PUBLIC_URL}/moving-and-cargo-packing`,
            description: "Secure and professional packing services.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Apartment Moving",
            url: `${process.env.PUBLIC_URL}/apartment-moving`,
            description: "Hassle-free apartment moves in the UAE.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Appliances Moving",
            url: `${process.env.PUBLIC_URL}/appliances-moving`,
            description: "Safe and secure transport for appliances.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.PUBLIC_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${process.env.PUBLIC_URL}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Movers in Dubai",
            item: `${process.env.PUBLIC_URL}/movers-and-packers-dubai`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Movers in Sharjah",
            item: `${process.env.PUBLIC_URL}/movers-and-packers-sharjah`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "home moving",
            item: `${process.env.PUBLIC_URL}/home-moving`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "apartment moving",
            item: `${process.env.PUBLIC_URL}/apartment-moving`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "buy sell used furnitures dubai",
            item: `${process.env.PUBLIC_URL}/buy-sell-used-furnitures-dubai`,
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "buy sell used furnitures abu dhabi",
            item: `${process.env.PUBLIC_URL}/buy-sell-used-furnitures-abu-dhabi`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.PUBLIC_URL}#website`,
        url: `${process.env.PUBLIC_URL}`,
        name: "RWahab Movers UAE",
        description:
          "Affordable and reliable movers and packers in Dubai offering professional relocation services across the UAE.",
        publisher: {
          "@id": `${process.env.PUBLIC_URL}#organization`,
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${process.env.PUBLIC_URL}?s={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-AE",
      },
    ],
  };
  return JSON.stringify(jsonLd);
}
