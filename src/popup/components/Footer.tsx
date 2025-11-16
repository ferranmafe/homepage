export type Props = {
  children: React.ReactNode;
};

export const Footer = ({ children }: Props) => {
  return <p className="text-xs text-gray-500 mt-4 text-center">{children}</p>;
};
