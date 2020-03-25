const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const npo = await connection("npos")
      .where("id", id)
      .select("name")
      .first();

    if (!npo) {
      return res.status(400).json({ error: "No NPO found with this ID" });
    }

    return res.json(npo);
  }
};
