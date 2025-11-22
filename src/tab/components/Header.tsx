export type Props = {
  header: string;
  subheader?: string;
};

export const Header = ({ header, subheader }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{header}</h1>
      {subheader && <p className="text-lg text-gray-600 mt-1">{subheader}</p>}
    </>
  );
};
