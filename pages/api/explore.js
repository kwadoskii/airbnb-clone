import { explore } from "../../constants/data";

export default function exploreAPI(req, res) {
  res.status(200).json(explore);
}
