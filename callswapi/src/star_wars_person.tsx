import { useState } from "react";
import { GeneratePersonID } from "./generate_person_id";
import { ShowPersonDetails } from "./show_person_details";

export const StarWarsPerson = () => {
  const [personID, setPersonID] = useState(1);
  return (
    <>
      <GeneratePersonID setPersonID={setPersonID} />
      <p>{personID}</p>
      <ShowPersonDetails personID={personID} />
    </>
  );
};
