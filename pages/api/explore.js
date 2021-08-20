import { explore } from "../../constants/data";

export default function handler(req, res) {
  res.status(200).json(explore);
}
