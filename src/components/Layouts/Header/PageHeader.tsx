interface IProps {
  text: string;
}

const PageHeader = ({ text }: IProps) => {
  return <h2>{text}</h2>;
};

export default PageHeader;
