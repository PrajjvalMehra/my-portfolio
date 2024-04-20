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
    companyLink: string;
  };
  windowWidth: number;
}
export { TabPanelProps };
