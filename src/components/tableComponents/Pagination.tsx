import _ from "lodash";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getPaginationRange } from "../../functions/getPaginationRange";
import { PaginationButton } from "../buttons/PaginationButton";
import { CenterWrapper } from "../wrappers/CenterWrapper";

export interface IPagination {
  current_page: number;
  pages: number;
}

export const Pagination: React.FC<IPagination> = ({ current_page, pages }) => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const pathname = path.includes(":page")
    ? path.replace(":page", "")
    : `${path}/page/`;

  const [start, end] = getPaginationRange(current_page, pages);

  return (
    <CenterWrapper>
      <PaginationButton
        disabled={current_page === 1}
        first
        onClick={() =>
          history.push({
            pathname: `${pathname}${current_page - 1}`,
          })
        }
      >
        {"<"}
      </PaginationButton>

      {_.range(start, end).map((item: any) => (
        <PaginationButton
          onClick={() =>
            history.push({
              pathname: `${pathname}${item}`,
            })
          }
          isActive={item === current_page}
        >
          {item}
        </PaginationButton>
      ))}

      <PaginationButton
        disabled={current_page === pages}
        last
        onClick={() =>
          history.push({
            pathname: `${pathname}${current_page + 1}`,
          })
        }
      >
        {">"}
      </PaginationButton>
    </CenterWrapper>
  );
};
