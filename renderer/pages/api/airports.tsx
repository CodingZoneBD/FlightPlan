
import { airports } from "../../lib/airports";

export default function handler(req, res) {
  res.status(200).json({ airports });
}
