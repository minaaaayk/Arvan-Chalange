import { IInnerPage } from ".";
import { Path } from "../../constants";

export interface IAccordion {
  title: string;
  component: React.FC;
  path: Path;
  innerPages?: Array<IInnerPage>;
}
