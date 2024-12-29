import React from "react";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-28 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="fixed-svg-background"
        viewBox="0 0 700 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="121"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="150"
            ry="150"
            cx="150.62460303181751"
            cy="534.9984809915431"
            fill="hsla(290, 87%, 47%, 1.00)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="692.0906857795117"
            cy="330.978960925996"
            fill="hsl(316, 73%, 52%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="180.36725029271315"
            cy="73.39226631843607"
            fill="hsl(185, 100%, 57%)"
          ></ellipse>
        </g>
      </svg>
      {children}
    </div>
  );
}

export default RootLayout;
