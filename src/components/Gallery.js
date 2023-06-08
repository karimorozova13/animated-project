import Image from "next/image";
import { styled } from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1010px;
`;
const Item = styled.li`
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media only screen and (min-width: 425px) {
    width: calc(100% / 2 - 10px / 2);
  }
  @media only screen and (min-width: 768px) {
    height: 300px;
  }
  img {
    width: 100%;
    height: 100% !important;
    /* height: 100% !important;
    display: block;
    position: absolute;
    top: 0;
    left: 0; */
    object-fit: cover;
    @media only screen and (min-width: 768px) {
      /* height: calc(100% + 40px) !important; */

      /* top: -40px; */
      left: 0;
    }
  }
`;

const Gallery = () => {
  const data = [
    "/images/stepNe.jpg",
    "/images/step2.jpg",
    "/images/step3.jpg",
    "/images/step4.jpg",
  ];
  return (
    <List>
      {data.map((el, idx) => {
        return (
          <Item key={idx}>
            <Image
              src={el}
              alt={"Platon"}
              width={200}
              height={200}
              layout="responsive"
              priority
            />
          </Item>
        );
      })}
    </List>
  );
};

export default Gallery;
