export type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export const SaveButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full mt-6 bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
    >
      {disabled ? (
        <>
          <span className="animate-spin">⚙️</span> Saving...
        </>
      ) : (
        <>Save</>
      )}
    </button>
  );
};
