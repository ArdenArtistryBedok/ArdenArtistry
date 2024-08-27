import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #051d41",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#21482C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "#21482C",
            color: "white",
            border: "none",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
              marginLeft: "0.5rem",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        About our Garden of beauty: Arden Artistry
      </h1>

      <div>
        <AccordionItem title="Expert in Lashes and Beauty">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our experience:
          </h4>
          <p>
            Welcome to <strong>Arden Artistry</strong>, where beauty meets
            tranquility.<br></br> Situated in the vibrant city of Singapore,
            Arden Artistry is more than just a salon—it's a sanctuary.<br></br>
            Our salon, led by the talented Liying, is designed with your comfort
            in mind, featuring an array of lush plants that create a peaceful,
            natural environment.<br></br> At Arden Artistry, we specialize in
            enhancing your lashes while providing a relaxing escape from the
            hustle and bustle of everyday life.<br></br> Whether you're looking
            for a quick lash enhancement or a complete beauty makeover, Liying’s
            expertise ensures you leave feeling both refreshed and radiant.
          </p>
        </AccordionItem>

        <AccordionItem title="Trusted, Reliable and Safe">
          <p>
            <strong>
              Trusted by Many, Loved by More: 80% of Clients Come from Word of
              Mouth
            </strong>
            <br></br>
            <br></br> At Arden Artistry, our clients are our greatest advocates.
            <br></br> Liying, our dedicated beauty expert, listens closely to
            each client's desires, offering personalized suggestions that
            perfectly complement their unique eye shapes.<br></br> With a
            commitment to excellence and a genuine passion for her craft, Liying
            takes pride in every lash she enhances, always striving to surpass
            expectations.<br></br> This unwavering dedication has earned Arden
            Artistry a loyal following, with 80% of our clients coming to us
            through word of mouth.<br></br> We cherish every one of our clients,
            and their satisfaction is our top priority.
          </p>
        </AccordionItem>

        <AccordionItem title="A place of solitude and beauty">
          <p>
            <strong>
              Arden, inspired by the Hebrew word for the garden of Eden,
              represents "a place of solitude and great beauty."
            </strong>
            <br></br>
            <br></br>This is precisely the atmosphere I strive to create for
            both myself and my clients.<br></br>
            <br></br>As a vegan who deeply loves animals and nature, I have
            spent years working alongside certified doctors in aesthetic
            clinics. This experience has not only exposed me to the latest
            beauty techniques available in the market but also to invaluable
            industry insights—what works, what doesn’t, and how to provide the
            best advice to women seeking to become the most beautiful versions
            of themselves without overspending.<br></br>
            <br></br>Through my journey, I have come to understand what people
            need to look and feel their best amidst their busy lives. Eyelash
            extensions, for example, offer a perfect solution for those of us
            who are always on the go. The facial treatments I provide also
            simplify skincare routines, saving precious time without sacrificing
            results.<br></br>
            <br></br>At Arden, beauty and ethics go hand in hand. I use
            non-toxic or minimally harsh chemicals and avoid animal by-products
            whenever possible, ensuring my services are suitable for vegans,
            individuals with sensitive skin, and those concerned about the
            environment.<br></br>
            <br></br>My inspiration stems from childhood memories of
            accompanying my mom to a home-based salon in a nearby HDB flat. The
            warmth, laughter, and simplicity of those visits left a lasting
            impression on me. It made me question why I should pay higher rent
            and charge my clients more when I can offer them an equally, if not
            more, personal and heartfelt experience.<br></br>
            <br></br>The quality of my work is never compromised, even in a more
            intimate setting.<br></br>
            <br></br>I take great joy in creating a serene environment where my
            clients can relax and rejuvenate while enhancing their natural
            beauty with soft, light synthetic lashes.<br></br>
            <br></br>My hope is that every client who visits Arden leaves not
            only looking good but also feeling refreshed and at peace after
            their time spent with us.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
