import { colors } from "@/config/colors";

import React from "react";
import { styled } from "styled-components";

const TimeLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1010px;
  margin: 0 auto;
  &::before {
    content: "";
    background-color: ${colors.mainAccent};
    width: 5px;
    height: 105%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 768px) {
    &::before {
      left: 10px;
    }
  }
`;

const TimelineItem = styled.div`
  width: 100%;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  &:nth-child(even) {
    .timeline-content {
      float: right;
    }
  }
  /* &::after {
    content: "";
    display: block;
    clear: both;
  } */
  /* @media only screen and (max-width: 767px) {
    &:nth-child(even) {
      .timeline-content {
        float: none;
      }
    }

    &:nth-child(odd) {
      .timeline-content {
      }
    }
  } */
`;
const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  padding: 44px 10px;
  border-radius: 4px;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.18);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  p {
    font-weight: 700;
    padding: 10px +5px;
  }
  h2 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: auto;
    margin-left: 40px;
  }
`;
const TimelineImg = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${colors.mainAccent};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  inset: 0;
  margin: auto;
  @media screen and (max-width: 768px) {
    left: -5px;
    right: unset;
  }
`;
const TimelineCard = styled.div`
  padding: 0 !important;

  p {
    padding: 0 20px;
  }

  a {
    margin-left: 20px;
  }
`;
const TimelineImgHeader = styled.div`
  height: 150px;
  position: relative;
  margin-bottom: 20px;

  h2 {
    color: $text;
    position: absolute;
    bottom: 5px;
    left: 20px;
  }
`;
const Date = styled.div`
  background-color: ${colors.accent};

  display: inline-block;
  color: #fff;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
`;

const Timeline = () => {
  return (
    <TimeLine>
      <TimelineItem>
        <TimelineImg />

        <TimelineContent className="timeline-content">
          <h2>{"First year, Newborn Baby"}</h2>
          <Date>{"2020-2021"}</Date>
          <p>
            {
              "During his first year of life Platon transitions into an active explorer. He gradually learn to sit up, discover the art of turning and rolling over,master the skill of crawling. Alongside these physical achievements, he also embark on the exciting journey of transitioning from a liquid diet to solid foods"
            }
          </p>
          <a href="/">{"More"}</a>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineImg />

        <TimelineContent className="timeline-content">
          <h2>{"Small man"}</h2>
          <Date>{"2021-2022"}</Date>
          <p>
            {
              "With each wobbly stride he's transitioning from a crawler to a confident walker, ready to conquer new horizons. With the passing of time Platon blossoms into a curious individual, ready to take on the world beyond the comforts of home, so he venture into the realm of kindergarten..."
            }
          </p>
          <a href="/">{"More"}</a>
        </TimelineContent>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineImg />

        <TimelineContent className="timeline-content">
          <h2>{"Toddler"}</h2>
          <Date>{"2022-2023"}</Date>
          <p>{"terrible"}</p>
          <a href="/">{"More"}</a>
        </TimelineContent>
      </TimelineItem>{" "}
    </TimeLine>
  );
};

export default Timeline;
