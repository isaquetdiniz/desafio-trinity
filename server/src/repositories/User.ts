import { EntityRepository, Repository } from "typeorm";
import Joi, { valid } from "joi";
import { AppUser } from "../models/User";

type userInput = {
    name: string,
    email: string,
    phone: string,
    street: string,
    city: string,
    zipcode: string,
}

const AppUserInputSchema = Joi.object({
    name: Joi.string()
      .required(),
  
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  
    phone: Joi.string()
      .pattern(/^(\(?\d{2}\)?\s?)((\d{5})(-)?(\d{4}))$/)
      .required(),
  
    street: Joi.string()
      .required(),
  
    city: Joi.string()
      .required(),

    zipcode: Joi.string()
      .pattern(/^[0-9]{5}-[0-9]{3}$/)
      .required(),
  });

  const AppUserUpdateSchema = Joi.object({
    name: Joi.string(),
  
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  
    phone: Joi.string()
      .pattern(/^(\(?\d{2}\)?\s?)((\d{5})(-)?(\d{4}))$/),
  
    street: Joi.string(),
  
    city: Joi.string(),

    zipcode: Joi.string()
      .pattern(/^[0-9]{5}-[0-9]{3}$/)
  });

@EntityRepository(AppUser)
export class AppUserRepository extends Repository<AppUser> {

    async createNewUser(user: userInput){
        try {
            const userValid = await AppUserInputSchema.validateAsync(user);
            this.save(userValid)
            return 'User created'

        } catch(err){
            return err;
        }
    }

    async getAllUsers(){
      try {
          const allUsers = await this.find()
          return allUsers

      } catch(err){
          return err;
      }
  }

  async getUser(userId: string){
    try {
        const user = await this.findOne({ where: { id: userId }})
        return user

    } catch(err){
        return err;
    }
  }

  async updateUser(userId: string, newInformations: userInput){
    try {
        const validInformations = await AppUserUpdateSchema.validateAsync(newInformations);
        await this.update(userId, { ...validInformations });
        return 'User updated with success!'

    } catch(err){
        return err;
    }
  }

  async deleteUser(userId: string){
    try {
        await this.delete(userId);
        return 'User deleted with success!'

    } catch(err){
        return err;
    }
  }
}