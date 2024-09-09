import joi from 'joi';

export const userValidator = (user) => {
    const userValidatorSchema = joi.object({
        Name: joi.string().required(),
        Email: joi.string().email().required(),
        Password: joi.string().min(6).required()
    })

    return userValidatorSchema.validate(user)
}