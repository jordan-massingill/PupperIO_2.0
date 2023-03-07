import { Box, H3 } from "@bigcommerce/big-design";
import styled from "styled-components";

const StyledContent = styled(Box)`
  background-color: rgba(0, 0, 0, 0.35);
  margin: 20px;
  padding: 30px 20px 20px;
  border-radius: 20px;
  width: 700px;
  text-align: center;
`;

interface QuestionProps {
  text: string;
  choices?: string[];
  boolean?: boolean;
}

const Question = ({ boolean, choices, text }: QuestionProps) => {
  return <StyledContent></StyledContent>;
};

export default Question;
