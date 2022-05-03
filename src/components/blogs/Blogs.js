import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import blogsData from "./blogsData";

const Blogs = () => {
  return (
    <section id="exploreFood" className="blogs p-5">
      <Container>
        <article className="w-75 m-auto pt-2">
          <h1 style={{ color: "var(--head-text-color)" }}>Explore Our Foods</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </article>

        <Row>
          {blogsData.map((item) => {
            return (
              <Col md={4} key={item.title}>
                <BlogCard
                  img={item.img}
                  title={item.title}
                  time={item.time}
                  price={item.price}
                  newPrice={item.newPrice}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
