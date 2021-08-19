import { explore } from "../../constants/data";

export default function helloAPI(req, res) {
  res.status(200).json(explore);
}
