export interface IMenuItem {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

export interface IMenuCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  items: IMenuItem[];
}
