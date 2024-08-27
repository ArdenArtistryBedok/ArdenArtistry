import React, { Suspense, lazy } from "react";

// Lazy load components
const SpliceElement = lazy(() => import("./splice"));
const GridContainer = lazy(() => import("./gridContainer"));
const Listings = lazy(() => import("./listings"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const AboutSection = lazy(() => import("./about"));
const Quote = lazy(() => import("./quote"));
const HorizontalBanner = lazy(() => import("./horizontalbanner"));

// Create a simple loading component
const Loading = () => <div>Loading...</div>;

function Homepage() {
  return (
    <div>
      {/* <ElfsightWidget style={{marginTop: "1%"}} widgetId="eedbe33a-c475-44ba-b247-23842c4ad9f6" /> */}

      <Suspense fallback={<Loading />}>
        <SpliceElement />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Quote />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <HorizontalBanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <GridContainer />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Listings />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contactparent />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Socials />
      </Suspense>
    </div>
  );
}

export default Homepage;
