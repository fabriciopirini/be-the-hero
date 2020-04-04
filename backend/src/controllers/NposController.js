const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const npos = await connection("npos").select("*");

    return res.json(npos);
  },
  async create(req, res) {
    const { name, email, whatsapp, city, country } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("npos").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      country
    });

    return res.json({ id });
  }
};
