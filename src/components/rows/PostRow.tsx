import React from "react";
import { Dropdown } from "react-bootstrap";
import { IPost } from "../../@types";
import { Path } from "../../constants";
import { ColumnItem, RowItem } from "../tableComponents/TableComponents";
import { FlexWrapper } from "../wrappers/FlexWrapper";
import { ActionColumn, BodyColumn, CustomDropdown } from "./PostRowStyles";

interface IProps {
  post: IPost;
  index: number;
  offset: number;
  limit: number;
  onDeleteClick: (slug: string) => void;
}

export const PostRow: React.FC<IProps> = ({
  post: { slug, title, author, tagList, body, createdAt },
  index,
  limit,
  offset,
  onDeleteClick,
}) => {
  const timeStamp = new Date(createdAt);
  console.log("----------------------------------------------");
  console.log("offset: ", offset);
  console.log("limit: ", limit);
  console.log("index: ", index);

  return (
    <RowItem key={index}>
      <ColumnItem>{(offset - 1) * limit + index + 1}</ColumnItem>

      <ColumnItem>{title}</ColumnItem>
      <ColumnItem>{author.username}</ColumnItem>
      <ColumnItem>
        {tagList?.length > 0 && <>{tagList?.join(", ")}</>}
      </ColumnItem>
      <BodyColumn>{body}</BodyColumn>

      <ActionColumn>
        <FlexWrapper
          justifyContent="space-between"
          height="4rem"
          alignItems="center"
        >
          {timeStamp.toDateString()}
          <CustomDropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              ...
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={Path.editArticle + `/${slug}`}>
                Edit
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => onDeleteClick(slug)}>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </CustomDropdown>
        </FlexWrapper>
      </ActionColumn>
    </RowItem>
  );
};
