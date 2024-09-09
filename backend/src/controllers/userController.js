import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { addUserService } from '../services/userService.js';
import { userValidator } from '../validators/userValidator.js';

export const createUser = async(req, res) => {
    const { Name, Email, Password, ConfirmPassword } = req.body;

    const { error } = userValidator(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message});
    }
    if(Password !== ConfirmPassword) {
        return res.status(400).send({ message: "Passwords do not match!" });
    }
    try {
        const UserId = uuidv4();


        const hashedPassword = await bcrypt.hash(Password, 8);

        const newUser = {
            UserId,
            Name,
            Email,
            Password: hashedPassword
        }

        let response = await addUserService(newUser);
        if (response.message) {
            return res.status(500).send({ message: response.message })
        } else {
            return res.status(201).send({ message: "User created successfully!"})
        }

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}