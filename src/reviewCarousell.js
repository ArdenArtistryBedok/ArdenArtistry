var React = require("react");

// Style objects
const carouselContainerStyle = {
  position: "relative",
  maxWidth: "1000px",
  margin: "0 auto",
};

const reviewCardStyle = (isFading) => ({
  backgroundColor: "#f3f4f6",
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  opacity: isFading ? 0 : 1,
  transform: isFading ? "translateX(-20px)" : "none",
});

const starsStyle = {
  color: "#fbbf24",
  fontSize: "24px",
  marginBottom: "12px",
};

const reviewTextStyle = {
  marginBottom: "16px",
};

const authorInfoStyle = {
  display: "flex",
  alignItems: "center",
};

const authorInitialStyle = {
  backgroundColor: "#065f46",
  color: "white",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginRight: "12px",
};

const authorNameStyle = {
  fontWeight: 600,
};

const reviewDateStyle = {
  color: "#6b7280",
  fontSize: "14px",
};

const googleLogoStyle = {
  height: "24px",
  marginTop: "16px",
};

const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const prevButtonStyle = {
  ...navButtonStyle,
  left: "-20px",
};

const nextButtonStyle = {
  ...navButtonStyle,
  right: "-20px",
};

var ReviewCard = function (props) {
  var review = props.review;
  var isFading = props.isFading;
  return React.createElement(
    "div",
    { style: reviewCardStyle(isFading) },
    React.createElement(
      "div",
      { style: starsStyle },
      "★".repeat(review.rating),
      "☆".repeat(5 - review.rating)
    ),
    React.createElement("p", { style: reviewTextStyle }, review.text),
    React.createElement(
      "div",
      { style: authorInfoStyle },
      React.createElement(
        "div",
        { style: authorInitialStyle },
        review.author[0].toUpperCase()
      ),
      React.createElement(
        "div",
        null,
        React.createElement("p", { style: authorNameStyle }, review.author),
        React.createElement("p", { style: reviewDateStyle }, review.date)
      )
    ),
    React.createElement("img", {
      src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      alt: "Google",
      style: googleLogoStyle,
    })
  );
};

var GoogleReviewsCarousel = function (props) {
  var reviews = props.reviews;
  var _React$useState = React.useState(0),
    currentIndex = _React$useState[0],
    setCurrentIndex = _React$useState[1];
  var _React$useState2 = React.useState(false),
    isFading = _React$useState2[0],
    setIsFading = _React$useState2[1];

  var nextReview = function () {
    setIsFading(true);
    setTimeout(function () {
      setCurrentIndex(function (prevIndex) {
        return (prevIndex + 1) % reviews.length;
      });
      setIsFading(false);
    }, 300);
  };

  var prevReview = function () {
    setIsFading(true);
    setTimeout(function () {
      setCurrentIndex(function (prevIndex) {
        return (prevIndex - 1 + reviews.length) % reviews.length;
      });
      setIsFading(false);
    }, 300);
  };

  React.useEffect(function () {
    var intervalId = setInterval(nextReview, 5000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);

  return React.createElement(
    "div",
    { style: carouselContainerStyle },
    React.createElement(ReviewCard, {
      review: reviews[currentIndex],
      isFading: isFading,
    }),
    React.createElement(
      "button",
      { onClick: prevReview, style: prevButtonStyle },
      "‹"
    ),
    React.createElement(
      "button",
      { onClick: nextReview, style: nextButtonStyle },
      "›"
    )
  );
};

// Sample reviews data
var sampleReviews = [
  {
    rating: 5,
    text: "Have been visiting Arden for my lash extensions ever since i was introduced by my sis. It was my first time trying lash extensions and Liying took the time to explain the different type of lashes style and offered what would suit me best. The lashes used were also light weight, soft and very comfortable.",
    author: "Jolene Low",
    date: "Just Now",
  },
  {
    rating: 5,
    text: "I have sensitive eyes all these while therefore lash usually last too long for me due to itch. Coincidentally, I found Arden, They're very affordable with impeccable workmanship and service. I respect that they are honest and passionate about their products. Not only that, they truly care about your own lashes and urge me not to rub my eye. 😊 So sweet!! Despite my eye rubbing habit, they are still being very patience on topping up my lashes. Such service is hard to find these days and I respect that! Most importantly their lashes look very natural and beautiful on me! Thank you so much and will definitely recommend Arden to my friends!",
    author: "Jovy Li",
    date: "6 Hours ago",
  },
  {
    rating: 5,
    text: "I feel very blessed to know Arden, as my eyes has never been red, nor infected. And there's just too many great reviews about them.",
    author: "Miss Kueh, Elizabeth",
    date: "yesterday",
  },
  {
    rating: 5,
    text: "Have went to try Arden lashes,  it was a smooth feeling, never feel eye irritation or tearing , the whole process make you feel relax plus the high bed feel comfy when lying down .  Thanks dear your craft and skill is fantastic 😊 Pls support local eyelashes beautician :)",
    author: "Angel Tan",
    date: "3 days ago",
  },
  {
    rating: 5,
    text: "My only go to place for lash extension!! Super meticulous and lashes are so full and luscious after!! And the best is, you don’t have to lie on the bed for 2 hours cause Li Ying is super quick 👍🏻👍🏻 definitely should try her out if you want quality and affordability! 😁😁",
    author: "Ophira Long",
    date: "4 days ago",
  },
  {
    rating: 5,
    text: "Very glad I found Arden Artistry. She is very skillful and meticulous. I always fall asleep during the process because she is so gentle. She will recommend trendy lash styles and also which lash style is most suitable for your eyes. The lashes are also of good quality and it's very soft and light. Prices are affordable too, definitely recommend!",
    author: "lee wei ting",
    date: "5 days ago",
  },
  {
    rating: 5,
    text: "I have started using Liying’s eyelash extension service a few months back. She is professional, skillful and gentle with her work. Really like how natural the lash extension looks. Have been getting quite a few compliments for the work she’s done for me. Thanks, Liying!",
    author: "Caroline Teo",
    date: "2 weeks ago",
  },
  {
    rating: 5,
    text: "I've been visiting Arden for past months and I love the cozy set up and ambience (with soothing music) which help me to unwind my stress and worries away, Liying is professional and focus when doing her work. She is also very patience pertaining to my doubts and advise on the type of lashes which is suitable for me. Overall, I like the lashes being done. Very natural and soft (which enhance our eyes), no discomfort at all. Definitely will continue to support Liying and highly recommend to anyone who likes their being lashes done professionally.",
    author: "Crystal Tan",
    date: "6 Months ago",
  },
  {
    rating: 5,
    author: "Seline Poh",
    text: "My go to lash place now! LiYing is very detailed and attentive when she does my eyelash extension. She will make sure that my eye lashes are properly done and usually all my lashes lasts till next appointment. Nice and cosy environment that you will love to keep going. I will recommend my friends to try it out. Thanks you for your superb service!",
    date: "23 hours ago",
  },
  {
    rating: 5,
    text: "Happy that i found Arden. She is very skillful-the application process is surprisingly fast, without any discomfort. The lashes are not only long-lasting but also give a natural look. Most importantly, the lashes are suitable for my sensitive eyes.",
    author: "Callie Kyi",
    date: "7 months ago",
  },
  {
    rating: 5,
    text: "With KSQ, our children are well taken care of",
    author: "Ahmad",
    date: "8 months ago",
  },
  {
    rating: 5,
    text: "Clean & peaceful environment for lash extension. She is highly skilled n have an eye for details. I always received quality set of beautiful lashes from Arden Artistry.  Highly recommended if you are looking for a new set of lashes.",
    author: "Rox Oh",
    date: "7 months ago",
  },
];

var GoogleReviews = function () {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { textAlign: "center" } },
      "What our clients say!"
    ),
    React.createElement(GoogleReviewsCarousel, { reviews: sampleReviews }),
    React.createElement(
      "p",
      { style: { textAlign: "center", marginBottom: "10%" } },
      "Powered by Web Wizards Widgets"
    )
  );
};

module.exports = GoogleReviews;
