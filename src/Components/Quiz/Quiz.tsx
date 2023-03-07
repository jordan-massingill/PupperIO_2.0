import { Box, Flex, Form } from "@bigcommerce/big-design";
import styled from "styled-components";

import Question from "./Components/Question";

const StyledContent = styled(Box)`
  background-color: rgba(0, 0, 0, 0.35);
  margin: 20px;
  padding: 30px 20px 20px;
  border-radius: 20px;
  width: 700px;
  text-align: center;
`;

const Quiz = () => {
  return (
    <Form>
      <StyledContent>
        <Question text="test question" />
      </StyledContent>
    </Form>
  );
};

export default Quiz;
