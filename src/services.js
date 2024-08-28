import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";

const BeautyServicesTable = () => {
  const services = [
    {
      name: "MOST POPULAR! YY LASHES",
      description: "Classic Natural Look Of All Day",
      process: "(60-75mins process)",
      details: [
        "Strand by strand extension. Do not cause any pain or damage to the natural lashes.",
        "Suitable for those with thin or weak lashes as they come with 0.03/0.05mm thickness.",
        "They are so soft that it is just like wearing your own!",
      ],
      isPopular: true,
      category: "lashes",
    },
    {
      name: "3D/CLOVER",
      description: "The Best Usual Lashes At Work",
      process: "(60-75mins process)",
      details: [
        "Available in normal 3D or clover style. Both come with 0.03/0.05mm thickness for your preference.",
        "Now 3D volume doesnt need to look drama anymore.",
      ],
      isPopular: false,
      category: "lashes",
    },
    {
      name: "4D-6D VOLUME",
      description: "The Weekend Dating Wear",
      process: "(60-75mins process)",
      details: [
        "Specially for those who would like to have a thicker and eyeliner look in volume so you never have to put on eye makeups.",
        "Available in 0.05 & 0.07mm thick.",
      ],
      isPopular: false,
      category: "lashes",
    },
    {
      name: "WISPY/FAIRY",
      description: "The Kawaii Anime Type",
      process: "(within 60-75mins process)",
      details: [
        "Wants to stand out with every blink of your eyes? This wispy or wet look certainly are your best choices!",
      ],
      isPopular: false,
      category: "lashes",
    },
    {
      name: "KOREAN BB WATERGLOW FACIAL",
      description: "Promote cell regeneration and improve skin texture",
      details: [
        "REDUCE DARK EYE CIRCLES",
        "REDUCE REDNESS, LIGHTEN DARK SPOTS AND SCARS",
        "INCREASE SKIN ELASTICITY",
        "IMPROVE NATURAL SKIN TEXTURE/COLOR",
        "This treatment promotes regeneration of cells by inducing collagen to speed up new cell formation.",
        "It may help restore fine scars, effective skin brightening, skin whitening and wrinkle improvement.",
        "Our pigment contains stem culture ingredients abstracted from Niacin polyimide, Albutin, EAA.",
        "This facial helps unblock and minimize pores and will not clog up unlike applying makeup foundation or BB.",
      ],
      isPopular: false,
      category: "other",
    },
    {
      name: "CRAFTJET FACIAL FILLER",
      description: "Non-invasive treatment",
      details: [
        "For Face & Body",
        "For Fat melt",
        "Using air pressure technology device to penetrate serum into the deeper depth of the skin.",
        "Achieves reduction of unpleasant fat under the chin or body",
        "Contours and sculpt facial feature to stand out.",
        "Reduces your excess facial lines caused by frequent expressions/movement",
        "Product used are HSA notified.",
        "Results are visible after one session, or after 7-10 days of procedure.",
        "Can last 6-18 months depending on respective craft-jet treatment.",
        "Minimal discomfort, Non-invasive, quick and little to no downtime needed only for an effective result.",
        "Most suitable for those afraid of needles and energy based equipment.",
      ],
      isPopular: false,
      category: "other",
    },
    {
      name: "Needleless skin booster/PDRN",
      description: "Advanced facial treatment with Korea technology",
      details: [
        "Improve Firmness, lift and glow up your skin with our needle-less solution from Korea.",
        "Enjoy no pain during procedure without needle bumps and marks",
        "Zero downtime",
        "Instant glow, suppleness and brightening right after treatment!",
        "LED light mask therapy to soothe and calm down any sensitive skin.",
        "Save money, time and effort doing weekly or monthly facial, even the daily skincare routines,",
        "with our affordable needle-less infusion of all quality ingredients into your skin.",
        "Maintenance bi-monthly required.",
      ],
      isPopular: false,
      category: "other",
    },
  ];

  return (
    <div>
    <div className="beauty-services-table">
      <h1>OUR SERVICES</h1>
      <p className="tagline">
        Plant-based products used for satisfying & safer experience/result!
      </p>
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-card ${service.isPopular ? "popular" : ""} ${
            service.category
          }`}
        >
          {service.isPopular && (
            <div className="popular-badge">MOST POPULAR!</div>
          )}
          <h2>{service.name}</h2>
          <h3>{service.description}</h3>
          {service.process && <p className="process">{service.process}</p>}
          <ul>
            {service.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
      <style jsx>{`
        .beauty-services-table {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 20px;
        }
        h1 {
          width: 100%;
          text-align: center;
          color: #193621;
        }
        .tagline {
          width: 100%;
          text-align: center;
          color: #21482c;
          font-style: italic;
          margin-bottom: 20px;
        }
        .service-card {
          background-color: #193621;
          color: white;
          border-radius: 8px;
          padding: 20px;
          width: 250px;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease;
        }
        .service-card:nth-child(even) {
          background-color: #21482c;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        .service-card.popular {
          border: 2px solid gold;
        }
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: gold;
          color: black;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 20px;
          font-weight: bold;
        }
        h2 {
          margin-bottom: 10px;
        }
        h3 {
          font-style: italic;
          margin-bottom: 5px;
        }
        .process {
          font-style: italic;
          margin-bottom: 15px;
        }
        ul {
          list-style-type: none;
          padding: 0;
          text-align: left;
        }
        li {
          margin-bottom: 10px;
          font-size: 14px;
        }
        .other {
          background-color: #2e2e2e;
        }
        .other:nth-child(even) {
          background-color: black;
        }
      `}</style>
    </div>
    <ElfsightWidget widgetId="c203694e-f020-46c1-9b19-c0717745b554" />

    </div>
  );
};

export default BeautyServicesTable;
