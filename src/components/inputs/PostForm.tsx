import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FlexWrapper } from "../wrappers/FlexWrapper";
import { InputLabel } from "./InputLabel";
import { TagInput } from "./TagInput";

interface IProps {
  defaultTags?: string[];
}

export const PostForm: React.FC<IProps> = ({ defaultTags }) => {
  return (
    <>
      <Row>
        <Col sm={8}>
          <FlexWrapper flexDirection="column" gap="1rem 0">
            <InputLabel label="Title" name="title" placeholder="Title" />
            <InputLabel
              label="Description"
              name="description"
              placeholder="Description"
            />
            <InputLabel
              label="Body"
              name="body"
              type="textarea"
              as="textarea"
              rows={7}
            />
            <FlexWrapper>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </FlexWrapper>
          </FlexWrapper>
        </Col>
        <Col sm={4}>
          <TagInput defaultValues={defaultTags} />
        </Col>
      </Row>
    </>
  );
};
