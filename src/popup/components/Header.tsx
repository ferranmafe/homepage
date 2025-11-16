export type Props = {
  header: string;
  subheader?: string;
};

export const Header = ({ header, subheader }: Props) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{header}</h1>
      {subheader && <p className="text-sm text-gray-600 mt-1">{subheader}</p>}
    </div>
  );
};
