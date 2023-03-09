import { Form } from "@bigcommerce/big-design";
import React from "react";

import Question from "./Components/Question";

const Quiz = () => {
  return (
    <Form>
      <Question text="test question" bool={false} />
    </Form>
  );
};

export default Quiz;
