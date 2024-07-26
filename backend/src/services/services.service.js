import { Service, Category, SubCategory } from "../database/models/index.js";
import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";

export class ServicesService {
  constructor() {}

  getAll = async () => {
    const services = await Service.findAll(
      {
        include: [
          {
            model: Category,
            as: "category",
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
          },
          {
            model: SubCategory,
            as: "subcategory",
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            }
          },
        ],
        attributes: {
            exclude: ["createdAt", "updatedAt", "category_id", "subcategory_id"],
        }
      }
    );
    return services;
  };

  getById = async (sid) => {
    const service = await Service.findByPk(sid, {
      include: [
        {
          model: Category,
          as: "category",
          attributes: {
              exclude: ["createdAt", "updatedAt"],
          }
        },
        {
          model: SubCategory,
          as: "subcategory",
          attributes: {
              exclude: ["createdAt", "updatedAt"],
          }
        },
      ],
      attributes: {
          exclude: ["createdAt", "updatedAt", "category_id", "subcategory_id"],
      }
    });
    if (!service) {
      throw new HttpError("Service not found", HTTP_CODES.NOT_FOUND);
    }
    return service;
  };
}
