// TODO: make it generic
export interface ITable {
  header: string;
  headerButtons: React.FC[];
  isSelectAble?: boolean;
  tableHeader: { title: string; icon?: React.FC }[];
}
