export type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      {children}
    </div>
  );
};
