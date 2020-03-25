const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const npo_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .where("npo_id", npo_id)
      .select("*");

    return res.json(incidents);
  }
};
