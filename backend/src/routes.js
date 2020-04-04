const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const NpoController = require("./controllers/NposController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const customJoi = Joi.extend(require("joi-phone-number"));

const routes = express.Router();

routes.post(
  "/sessions",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  SessionController.create
);

routes.get("/npos", NpoController.index);

routes.post(
  "/npos",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: customJoi
        .string()
        // .phoneNumber({ format: "international" })
        .phoneNumber({ format: "e164" })
        .required()
        .min(10)
        .max(15),
      city: Joi.string().required(),
      country: Joi.string().required(),
    }),
  }),
  NpoController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentsController.index
);

routes.post(
  "/incidents",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required(),
    }),
  }),
  IncidentsController.create
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required(),
    }),
  }),
  IncidentsController.delete
);

module.exports = routes;
