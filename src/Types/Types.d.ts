interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  data: {
    title: string;
    company: string;
    date: string;
    description: string[];
    techStack: string[];
  };
  windowWidth: number;
}
export { TabPanelProps };
