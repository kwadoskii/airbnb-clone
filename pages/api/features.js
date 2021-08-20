import { features } from "../../constants/data";

export default function featuresAPI(_, res) {
  res.status(200).json(features);
}
