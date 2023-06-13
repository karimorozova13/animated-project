import { styled } from "styled-components";

import { colors } from "@/config/colors";
import Link from "next/link";

const TimeLine = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1010px;
  margin: 0 auto;
  list-style: none;
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

const TimelineItem = styled.li`
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
`;
const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  padding: 44px 10px 20px;
  border-radius: 4px;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.18);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  p {
    font-weight: 700;
    padding: 10px 5px;
    margin-bottom: 20px;
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
const TimelineImg = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${colors.mainAccent};
  display: block;
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
const Date = styled.span`
  background-color: ${colors.accent};

  display: inline-block;
  color: #fff;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
`;
const Learn = styled.div`
  font-size: 16px;
  line-height: calc(24 / 14);
  cursor: pointer;
  width: fit-content;
  padding: 5px;
  border-radius: 8px;
  transition: background-color 250ms linear;

  &::after {
    content: "";
    border: solid ${colors.mainWhite};
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 8px;
    transform: rotate(-45deg);
  }

  a {
    color: ${colors.mainWhite};
    text-decoration: none;
    font-weight: 500;
  }
  &:hover {
    background-color: ${colors.accent};
    opacity: 0.6;
  }
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
          <Learn>
            <Link href={"/timeline/first-year-life"}>{"See gallery"}</Link>
          </Learn>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineImg />

        <TimelineContent className="timeline-content">
          <h2>{"Pocket-sized guy"}</h2>
          <Date>{"2021-2022"}</Date>
          <p>
            {
              "With each wobbly stride he's transitioning from a crawler to a confident walker, ready to conquer new horizons. With the passing of time Platon blossoms into a curious individual, ready to take on the world beyond the comforts of home, so he venture into the realm of kindergarten..."
            }
          </p>
          <Learn>
            <Link href={"/"}>{"See gallery"}</Link>
          </Learn>
        </TimelineContent>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineImg />

        <TimelineContent className="timeline-content">
          <h2>{"Ah, the toddler, nature's little tornado!"}</h2>
          <Date>{"2022-2023"}</Date>
          <p>
            {
              "Platon can go from angelic cherub to tiny tyrant in a matter of seconds. One moment, they're giving you the sweetest, slobbery kisses, and the next, they're throwing an epic tantrum because you gave them the wrong-colored cup. He'll attempt to communicate with exaggerated facial expressions, leaving me guessing whether he's demanding a banana or telling me an elaborate story about his day at the playground."
            }
          </p>
          <Learn>
            <Link href={"/"}>{"See gallery"}</Link>
          </Learn>
        </TimelineContent>
      </TimelineItem>{" "}
    </TimeLine>
  );
};

export default Timeline;
