type NameProps = {
  name: string;
};

const Name = ({ name }: NameProps) => {
  return <span>{name}</span>;
};

export default Name;
