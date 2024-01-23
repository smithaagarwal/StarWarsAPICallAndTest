import { BASE_URL, PEOPLE } from "./constants";
import { useFetchAPI } from "./use_fetch_api";
interface StarWarsPeopleByIDResponse {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starship: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: string;
  edited: string;
}
interface ShowPersonDetailsProps {
  personID: number;
}
export const ShowPersonDetails: React.FC<ShowPersonDetailsProps> = ({
  personID,
}) => {
  const getPersonDetailsURL = `${BASE_URL}/${PEOPLE}/${personID}`;
  const response = useFetchAPI<StarWarsPeopleByIDResponse>(getPersonDetailsURL);
  return (
    <>
      {response.isFetching ? (
        <p>Fetching...</p>
      ) : response.error.length === 0 ? (
        <div>
          <pre> {JSON.stringify(response.data, null, 2)}</pre>
          <pre>Name:{response.data?.name}</pre>
          <pre>Birth Year: {response.data?.birth_year}</pre>
        </div>
      ) : (
        <p>{response.error}</p>
      )}
    </>
  );
};
