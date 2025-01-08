export function generateJSONLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rwahabmoversuae.com",
        url: "https://rwahabmoversuae.com",
        name: "Professional Movers and Packers in Dubai | RWahab Movers UAE",
        headline:
          "Professional Movers and Packers in Dubai | RWahab Movers UAE",
        isPartOf: {
          "@id": "https://rwahabmoversuae.com#website",
        },
        about: {
          "@id": "https://rwahabmoversuae.com#organization",
        },
        primaryImageOfPage: {
          "@id": "https://rwahabmoversuae.com/images/R-Wahab-Movers-UAE.jpg",
        },
        image: {
          "@id": "https://rwahabmoversuae.com/images/R-Wahab-Movers-UAE.jpg",
        },
        thumbnailUrl:
          "https://rwahabmoversuae.com/images/R-Wahab-Movers-UAE.jpg",
        datePublished: "2025-01-05T08:00:00+00:00",
        dateModified: "2025-01-05T08:00:00+00:00",
        description:
          "Looking for affordable and reliable movers and packers in Dubai? RWahab Movers UAE offers professional moving services tailored to your needs. Get a free quote today!",
        breadcrumb: {
          "@id": "https://rwahabmoversuae.com#breadcrumb",
        },
        inLanguage: "en-AE",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://rwahabmoversuae.com"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://rwahabmoversuae.com#localbusiness",
        name: "RWahab Movers UAE",
        description:
          "Affordable and reliable moving and packing services across Dubai and the UAE. Specializing in residential, office, and heavy goods relocation.",
        url: "https://rwahabmoversuae.com",
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.276987,
          longitude: 55.296249,
        },
        priceRange: "$$",
        areaServed: [
          { "@type": "Place", name: "Dubai" },
          { "@type": "Place", name: "Abu Dhabi" },
          { "@type": "Place", name: "Sharjah" },
          { "@type": "Place", name: "Ajman" },
          { "@type": "Place", name: "Ras Al Khaimah" },
          { "@type": "Place", name: "Umm Al Quwain" },
        ],
        openingHours: "Mo-Su 08:00-20:00",
        sameAs: [
          "https://facebook.com/rwahabmoversuae/",
          "https://instagram.com/rwahabmoversuae/",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://rwahabmoversuae.com/images/logo.png",
          contentUrl: "https://rwahabmoversuae.com/images/logo.png",
          width: 200,
          height: 50,
          caption: "RWahab Movers UAE Logo",
        },
        serviceOffered: [
          {
            "@type": "Service",
            name: "Home Moving",
            url: "https://rwahabmoversuae.com/home-moving",
            description: "Smooth home relocation services in the UAE.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Office Moving",
            url: "https://rwahabmoversuae.com/office-moving",
            description: "Efficient office relocation services.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
          {
            "@type": "Service",
            name: "Heavy Goods Moving",
            url: "https://rwahabmoversuae.com/heavy-goods-moving",
            description: "Safe transport for heavy items.",
            provider: {
              "@type": "LocalBusiness",
              name: "RWahab Movers UAE",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://rwahabmoversuae.com#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://rwahabmoversuae.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Movers in Dubai",
            item: "https://rwahabmoversuae.com/movers-and-packers-dubai",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Movers in Sharjah",
            item: "https://rwahabmoversuae.com/movers-and-packers-sharjah",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://rwahabmoversuae.com#website",
        url: "https://rwahabmoversuae.com",
        name: "RWahab Movers UAE",
        description:
          "Affordable and reliable movers and packers in Dubai offering professional relocation services across the UAE.",
        publisher: {
          "@id": "https://rwahabmoversuae.com#localbusiness",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://rwahabmoversuae.com/?s={search_term_string}",
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
