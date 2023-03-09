import { Box, FormGroup, H3, Radio } from "@bigcommerce/big-design";
import React, { useState } from "react";
import styled from "styled-components";

const StyledContent = styled(Box)`
  background-color: rgba(0, 0, 0, 0.35);
  margin: 20px;
  padding: 30px;
  border-radius: 20px;
  width: 700px;
  text-align: center;
`;

interface Option {
  text: string;
  description?: string;
}

interface QuestionProps {
  text: string;
  options?: Option[];
  bool?: boolean;
}

const Question = ({ text, bool = false }: QuestionProps) => {
  const [selected, setSelected] = useState<"true" | "false" | number>();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const descriptionOne = text.includes("size")
    ? "I love tiny dogs :)"
    : "This doesn't describe me at all";

  const descriptionThree = text.includes("size")
    ? undefined
    : "This may or may not describe me, depending on the situation";

  const descriptionFive = text.includes("size")
    ? "I love BIG dogs :)"
    : "This describes me perfectly";

  return (
    <StyledContent>
      <H3 color="white">{text}</H3>
      <FormGroup>
        <Box>
          <>
            {bool ? (
              <>
                <Radio
                  checked={selected === "true"}
                  value={"true"}
                  label="True"
                  onChange={handleChange}
                />
                <Radio
                  checked={selected === "false"}
                  value={"false"}
                  label="False"
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <Radio
                  value={1}
                  label="1"
                  description={descriptionOne}
                  checked={selected === 1}
                  onChange={handleChange}
                />
                <Radio
                  value={2}
                  label="2"
                  checked={selected === 2}
                  onChange={handleChange}
                />
                <Radio
                  value={3}
                  label="3"
                  description={descriptionThree}
                  checked={selected === 3}
                  onChange={handleChange}
                />
                <Radio
                  value={4}
                  label="4"
                  checked={selected === 4}
                  onChange={handleChange}
                />
                <Radio
                  value={5}
                  label="5"
                  description={descriptionFive}
                  checked={selected === 5}
                  onChange={handleChange}
                />
              </>
            )}
          </>
        </Box>
      </FormGroup>
    </StyledContent>
  );
};

export default Question;
