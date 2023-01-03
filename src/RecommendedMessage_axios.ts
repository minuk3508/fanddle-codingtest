import axios from "axios";

const BEARE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6ImRhZWU2YmI5LTEwZmEtNDZmMC04ZDk0LTdlMjdkODY3NzdjOSJ9LCJhY2NvdW50Ijp7InVpZCI6IjJlOTM3OWExLTJmZjEtNDU1MC05OTkwLWVlZGFkZmNjYjNkOCJ9LCJpYXQiOjE2NzI2NTY5OTEsImV4cCI6MTY3NTI0ODk5MSwiaXNzIjoiZmFuZGRsZSIsInN1YiI6ImF1dGgifQ.IplI76PV-fbzeeAC9PKcvenJKO9LqV2SsVq1AtnHJ3Q";

export const RecommendedMessage_axios = axios.create({
  baseURL: "https://prod-app.fanddle.co.kr/",
});
RecommendedMessage_axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${BEARE_TOKEN}`;
