import { Parsing } from "components/wrappers/Parsing";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Color, Radius } from "../../constants";
import { useTagsStore } from "../../store/TagStore";
import { InputLabel } from "./InputLabel";

interface IProps {
  defaultValues?: string[];
}

export const TagInput: React.FC<IProps> = ({ defaultValues }) => {
  const { control, setValue } = useFormContext();
  const [checkedValues, setCheckedValues] = useState<any[]>(
    defaultValues || []
  );
  const {
    getTags,
    isLoading,
    data: { tags },
    appendTag,
  } = useTagsStore();

  useEffect(() => {
    getTags();
  }, [getTags]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = String(Object(event?.target).value || "");
      appendTag(newTag);
      setCheckedValues([...(checkedValues ?? []), newTag]);
      setValue("newTag", "");
    }
  };

  function handleSelect(checkedTag: string) {
    const newTags = checkedValues?.includes(checkedTag)
      ? checkedValues?.filter((tag) => tag !== checkedTag)
      : [...(checkedValues ?? []), checkedTag];
    setCheckedValues(newTags);

    return newTags;
  }
  return (
    <>
      <InputLabel
        label="Tags"
        name="newTag"
        placeholder="New Tag"
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <Wrapper>
        <Parsing isLoading={isLoading}>
          {tags.map((tag) => (
            <Controller
              name="tagList"
              render={({ field: { onChange } }) => (
                <Form.Check
                  label={tag}
                  type="checkbox"
                  value={tag}
                  checked={checkedValues.includes(tag)}
                  onChange={() => onChange(handleSelect(tag))}
                />
              )}
              control={control}
            />
          ))}
        </Parsing>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: ${Radius.s};
  border: 1px solid ${Color.BS_gray_300};
`;
