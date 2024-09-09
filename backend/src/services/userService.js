import { poolRequest, closePool, sql } from "../utils/dbConnect.js";

export const addUserService = async(user) => {
    try {
        const result = await poolRequest()
            .input('UserId', sql.VarChar, user.UserId)
            .input('Name', sql.VarChar, user.Name)
            .input('Email', sql.VarChar, user.Email)
            .input('Password', sql.VarChar, user.Password)
            .query("INSERT INTO Users(UserId, Name, Email, Password) VALUES(@UserId, @Name, @Email, @Password)");
        return result;
    } catch (error) {
        console.log('Error adding user: ', error)
        return error;
    } finally{
        await closePool();
    }
}
