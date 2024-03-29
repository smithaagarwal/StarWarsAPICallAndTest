import { http, HttpResponse } from "msw";

const notFoundResponseData = { status: 404 };
const status500ResponseData = { status: 500 };
const validResponseData = {
  name: "Darth Vader",
  height: "202",
  mass: "136",
  hair_color: "none",
  skin_color: "white",
  eye_color: "yellow",
  birth_year: "41.9BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [],
  starships: ["https://swapi.dev/api/starships/13/"],
  created: "2014-12-10T15:18:20.704000Z",
  edited: "2014-12-20T21:17:50.313000Z",
  url: "https://swapi.dev/api/people/4/",
};

export const handlers = [
  http.get("https://swapi.dev/api/people/4", () =>
    HttpResponse.json(validResponseData),
  ),
  http.get("https://swapi.dev/api/people/0", () => {
    return new HttpResponse(null, notFoundResponseData);
  }),
  http.get("https://swapi.dev/api/people/90", () => {
    return new HttpResponse(null, status500ResponseData);
  }),
];
