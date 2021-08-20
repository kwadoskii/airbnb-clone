import { locations } from "../../constants/data";

export default function locationsAPI(req, res) {
  res.status(200).json(locations(req.body.location));
}
