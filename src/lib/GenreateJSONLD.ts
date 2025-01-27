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
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
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
            name: "Movers and Packers Dubai",
            item: "https://rwahabmoversuae.com/movers-and-packers-dubai",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Movers and Packers Abu Dhabi",
            item: "https://rwahabmoversuae.com/movers-and-packers-abu-dhabi",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Movers and Packers Sharjah",
            item: "https://rwahabmoversuae.com/movers-and-packers-sharjah",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Movers and Packers Ajman",
            item: "https://rwahabmoversuae.com/movers-and-packers-ajman",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Movers and Packers Ras Al Khaimah",
            item: "https://rwahabmoversuae.com/movers-and-packers-ras-al-khaimah",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Movers and Packers Umm Al Quwain",
            item: "https://rwahabmoversuae.com/movers-and-packers-umm-al-quwain",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Home Moving",
        description: "Smooth home relocation.",
        url: "https://rwahabmoversuae.com/home-moving",
      },
      {
        "@type": "Service",
        name: "Office Moving",
        description: "Efficient office moves.",
        url: "https://rwahabmoversuae.com/office-moving",
      },
      {
        "@type": "Service",
        name: "Heavy Goods Moving",
        description: "Safe heavy item transport.",
        url: "https://rwahabmoversuae.com/heavy-goods-moving",
      },
      {
        "@type": "Service",
        name: "Small / Single Furniture Moving",
        description: "Quick small furniture moves.",
        url: "https://rwahabmoversuae.com/small-or-single-furniture-moving",
      },
      {
        "@type": "Service",
        name: "Moving and Cargo Packing",
        description: "Secure packing services.",
        url: "https://rwahabmoversuae.com/moving-and-cargo-packing",
      },
      {
        "@type": "Service",
        name: "Apartment Moving",
        description: "Easy apartment moves.",
        url: "https://rwahabmoversuae.com/apartment-moving",
      },
      {
        "@type": "Service",
        name: "Appliances Moving",
        description: "Safe appliance transport.",
        url: "https://rwahabmoversuae.com/appliances-moving",
      },
      {
        "@type": "LocalBusiness",
        additionalType: "http://www.productontology.org/id/Moving_Company",
        url: "https://rwahabmoversuae.com",
        logo: "https://rwahabmoversuae.com/logo.png",
        image: "https://rwahabmoversuae.com/banner.jpg",
        hasMap: "https://maps.app.goo.gl/gk1mQ8Wdqth2nud17",
        email: "mailto:rwahabmoversuae@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sharjah",
          addressRegion: "Sharjah",
          postalCode: "12345",
          streetAddress: "building no.12 Attiyah Bin Nawayrah St, Al Yarmook",
        },
        description:
          "RWahab Movers UAE provides professional, affordable, and reliable moving and packing services in Dubai and the UAE.",
        name: "RWahab Movers UAE",
        telephone: "+971-50-3806855",
        priceRange: "$$",
        "openingHours": [
          "Monday 06:30-23:00",
          "Tuesday 06:30-23:00",
          "Wednesday 06:30-23:00",
          "Thursday 06:30-23:00",
          "Friday Closed",
          "Saturday 06:30-23:00",
          "Sunday 06:30-23:00"
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.3454051,
          longitude: 55.4024632,
        },
        sameAs: [
          "https://www.facebook.com/profile.php?id=61571587026129",
          "https://www.pinterest.com/rwahabmoversuae/",
        ],
        paymentAccepted: "Cash, Credit Card",
      },
      {
        "@type": "Organization",
        name: "RWahab Movers UAE",
        url: "https://rwahabmoversuae.com",
        logo: "https://rwahabmoversuae.com/logo.png",
        sameAs: [
          "facebook.com/profile.php?id=61571587026129",
          "https://www.pinterest.com/rwahabmoversuae/",
        ],
      },
    ],
  };

  return JSON.stringify(jsonLd);
}
