"use client";
import React from "react";
import Banner from "@/components/Banner";

const WristbandInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col">
        <div className="w-full md:w-9/12 mx-auto">
          <div className="order-now">
            <h3>Welcome to Silicone Wristbands Australia.</h3>
            <p>
              We&nbsp;guarantee&nbsp;the&nbsp;most competitive prices&nbsp;on
              Silicone Wristbands!
            </p>
            <p>
              If you can find a cheaper price, we want to know about it!&nbsp;If
              you’ve been given a better price from one of our competitors, send
              us the quote and we’ll beat it.
            </p>
            <blockquote className="border-solid border-l-4 border-r-0 border-y-0 border-gray-600 pl-4 text-lg">
              <p>
                The fastest and easiest way to&nbsp;order custom silicone
                wristbands
              </p>
            </blockquote>
            <h3>Our Products</h3>
            <style jsx>{`
              #list-margin li {
                margin-bottom: 10px;
              }
            `}</style>
            <ul id="list-margin">
              <li>
                Embossed Silicone Wristbands are used by many of our clients to
                help raise funds for their charity or cause. Embossed means that
                graphics will actually be raised out of the wristband.
              </li>
              <li>
                Debossed Silicone Wristbands are used by many organisations to
                help promote a special cause and are given by the organisations
                to their contributors as a token of appreciation for making a
                pledge. The text and graphics on your wristband will have a
                cut-out look and feel.
              </li>
              <li>
                Printed Silicone Wristbands are a great way for you to promote
                and raise awareness for your cause. If you have colour graphics
                and would like to implement them onto your wristbands, we are
                able to print in full colour as well as match any colour.
              </li>
              <li>
                Colour Filled Silicone Wristbands combine the debossing process
                with colour printing to achieve a unique effect.
              </li>
              <li>
                Segmented Wristbands are made up of any two or three colours.
              </li>
              <li>
                Swirl Wristbands are made up of any three colours and are
                blended together to create a unique look.
              </li>
              <li>
                Glow in the dark Wristbands are translucent bands that glow when
                placed out of the light.
              </li>
              <li>
                1 Inch Wristbands are 25.4mm in height, compared to a standard
                size wristband which is 12mm.
              </li>
              <li>
                3/4 Inch Wristbands are 19mm in height, compared to a standard
                size wristband which is 12mm.
              </li>
              <li>
                Embossed Printed Wristbands are a unique combination of the
                embossing and printing process’.
              </li>
              <li>
                Dual Layer Wristbands are comprised of two colours, one colour
                of the outside of the band and an alternate colour for the
                inside.
              </li>
              <li>
                Plain Wristbands are also available. They are unprinted with no
                text or graphics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <main className="main">
      <Banner>
        <h1 className="text-2xl">About</h1>
      </Banner>
      <WristbandInfo />
    </main>
  );
}
