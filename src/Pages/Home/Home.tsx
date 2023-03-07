import { Box, Flex, H1, H2 } from "@bigcommerce/big-design";
import styled from "styled-components";
import Quiz from "../../Components/Quiz";

const dogImageSource = "https://placedog.net/800/300";

const StyledImageWrapper = styled(Flex)`
  background-image: url(${dogImageSource});
  background-repeat: no-repeat;
  background-position: center;
  width: 800px;
  height: 300px;
  border-radius: 40px;
  overflow: hidden;
`;

const StyledCTAWrapper = styled(Flex)`
  background-color: rgba(0, 0, 0, 0.45);
  height: 80px;
  width: 500px;
  border-top-right-radius: 40px;
`;

const StyledContent = styled(Box)`
  background-color: rgba(0, 0, 0, 0.35);
  margin: 20px;
  padding: 30px 20px 20px;
  border-radius: 20px;
  width: 700px;
  text-align: center;
`;

const Home = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <StyledImageWrapper justifyContent={"start"} alignItems={"end"}>
        <StyledCTAWrapper justifyContent="center" alignItems="end">
          <H1 color="white">Find your new best friend today!</H1>
        </StyledCTAWrapper>
      </StyledImageWrapper>
      <StyledContent>
        <H2 color="white">Take the quiz below and be matched with a pup</H2>
      </StyledContent>
      <Quiz />
    </Flex>
  );
};

export default Home;
