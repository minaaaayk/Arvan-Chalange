import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { IPost } from "../../@types";
import { Color, Path } from "../../constants";
import { ColumnItem, RowItem } from "../tableComponents/TableComponents";
import { FlexWrapper } from "../wrappers/FlexWrapper";

interface IProps {
  post: IPost;
  index: number;
  onDeleteClick: (slug: string) => void;
}

export const PostRow: React.FC<IProps> = ({
  post: { slug, title, author, tagList, body, createdAt },
  index,
  onDeleteClick,
}) => {
  const timeStamp = new Date(createdAt);
  return (
    <RowItem key={index}>
      <ColumnItem>{index + 1}</ColumnItem>

      <ColumnItem>{title}</ColumnItem>
      <ColumnItem>{author.username}</ColumnItem>
      <ColumnItem>
        {tagList?.length > 0 && <>{tagList?.join(", ")}</>}
      </ColumnItem>
      <ColumnItem
        style={{
          maxWidth: "20rem",
        }}
      >
        {body}
      </ColumnItem>

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

const CustomDropdown = styled(Dropdown)`
  & > .dropdown-toggle,
  &.show > .btn-info.dropdown-toggle {
    color: ${Color.BS_white};
  }

  & > .dropdown-menu.show {
    transform: translate(-110px, 40px) !important;
  }
`;

const ActionColumn = styled(ColumnItem)`
  padding: 0 0.5rem;
  overflow: inherit;
  max-width: 7.5rem;
`;
