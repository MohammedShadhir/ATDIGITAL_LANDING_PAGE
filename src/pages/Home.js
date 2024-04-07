import React from "react";
import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import computer from "../assets/images/computer.svg";
import search from "../assets/images/search.svg";

import { Container } from "react-bootstrap";
import Questions from "../components/Home/Quetions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
        <Card
          imageUrl={computer}
          heading="Web & Mobile App Development"
          paragraph="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        />
        <Card
          imageUrl={search}
          heading="Digital Strategy Consulting"
          paragraph="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
          imagePosition="right"
        />
        <div
          className="text-center text-primary"
          style={{ marginBottom: "200px" }}
        >
          <div className="my-4">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div>
            <div className="my-3">
              <Questions
                question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
              />
            </div>
            <div className="my-3">
              <Questions
                question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
              />
            </div>
            <div className="my-3">
              <Questions
                question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
