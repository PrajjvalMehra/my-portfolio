interface ISidebarHandler {
  handleSidebar: () => any;
}

interface IHeaderButtonProps {
  title: string;
  anchor: string;
  handleActiveSection: (anchor: string) => any;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export { ISidebarHandler, IHeaderButtonProps };
