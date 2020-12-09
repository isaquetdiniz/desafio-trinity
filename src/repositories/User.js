"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserRepository = void 0;
const typeorm_1 = require("typeorm");
const joi_1 = __importDefault(require("joi"));
const User_1 = require("../models/User");
const AppUserInputSchema = joi_1.default.object({
    name: joi_1.default.string()
        .required(),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    phone: joi_1.default.string()
        .pattern(/^(\(?\d{2}\)?\s?)((\d{5})(-)?(\d{4}))$/)
        .required(),
    street: joi_1.default.string()
        .required(),
    city: joi_1.default.string()
        .required(),
    zipcode: joi_1.default.string()
        .pattern(/^[0-9]{5}-[0-9]{3}$/)
        .required(),
});
const AppUserUpdateSchema = joi_1.default.object({
    name: joi_1.default.string(),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    phone: joi_1.default.string()
        .pattern(/^(\(?\d{2}\)?\s?)((\d{5})(-)?(\d{4}))$/),
    street: joi_1.default.string(),
    city: joi_1.default.string(),
    zipcode: joi_1.default.string()
        .pattern(/^[0-9]{5}-[0-9]{3}$/)
});
let AppUserRepository = class AppUserRepository extends typeorm_1.Repository {
    async createNewUser(user) {
        try {
            const userValid = await AppUserInputSchema.validateAsync(user);
            this.save(userValid);
            return 'User created';
        }
        catch (err) {
            return err;
        }
    }
    async getAllUsers() {
        try {
            const allUsers = await this.find();
            return allUsers;
        }
        catch (err) {
            return err;
        }
    }
    async getUser(userId) {
        try {
            const user = await this.findOne({ where: { id: userId } });
            return user;
        }
        catch (err) {
            return err;
        }
    }
    async updateUser(userId, newInformations) {
        try {
            const validInformations = await AppUserUpdateSchema.validateAsync(newInformations);
            await this.update(userId, Object.assign({}, validInformations));
            return 'User updated with success!';
        }
        catch (err) {
            return err;
        }
    }
    async deleteUser(userId) {
        try {
            await this.delete(userId);
            return 'User deleted with success!';
        }
        catch (err) {
            return err;
        }
    }
};
AppUserRepository = __decorate([
    typeorm_1.EntityRepository(User_1.AppUser)
], AppUserRepository);
exports.AppUserRepository = AppUserRepository;
