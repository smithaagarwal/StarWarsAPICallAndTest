interface GeneratePersonIDProps {
  setPersonID: React.Dispatch<React.SetStateAction<number>>;
}
export const GeneratePersonID: React.FC<GeneratePersonIDProps> = ({
  setPersonID,
}) => {
  const generateRandomNum = () => {
    return Math.floor(Math.random() * 82) + 1;
  };
  return (
    <>
      <button onClick={() => setPersonID(generateRandomNum())}>
        Show Random Star Wars Person Details
      </button>
    </>
  );
};
