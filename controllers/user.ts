import { NextFunction, Response, Request } from 'express'
import { User } from '../models/User'
import { validatorRegisterInput } from '../utils/validator'
import HTTPException from '../exceptions/HTTPException';
import { UNPROCESSABLE_ENTITY } from 'http-status-codes';

export const register = async (req: Request, res: Response, _next: NextFunction) => {
    let { username, password, confirmpassword, email } = req.body;
    let { valid, errors } = validatorRegisterInput(username, password, confirmpassword, email)
    try {
        if (!valid) {
            throw new HTTPException(UNPROCESSABLE_ENTITY, '用户提交数据不正确', errors)
        }
        let users = await User.findOne({ username })
        if (users) {
            throw new HTTPException(UNPROCESSABLE_ENTITY, '用户名重复', errors)
        }
        let user = new User({ username, password, confirmpassword, email })
        await user.save()
        res.json({
            success: true,
            data: user
        })
    } catch (error) {
        _next(error)
    }
}

