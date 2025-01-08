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
