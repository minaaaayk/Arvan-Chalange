import { IInnerPage } from ".";
import { Path } from "../../constants";
import { IAccordion } from "./IAccordion";

// TODO: add tabs
export interface IPage {
  title: string;
  path?: Path;
  component?: React.FC;
  innerPages?: Array<IInnerPage>;
  accordion?: Array<IAccordion>;
}
