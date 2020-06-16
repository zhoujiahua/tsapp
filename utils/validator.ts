import validator from 'validator'
import { UserDocument } from '../models/User'
export interface RegisterInput extends Partial<UserDocument> {
    confirmpassword?: string
}
export interface RegisterResult {
    valid: boolean,
    errors: RegisterInput
}
export const validatorRegisterInput = (username: string, password: string,
    confirmpassword: string, email: string) => {
    let errors: RegisterInput = {}
    if (username === undefined || username.length == 0) {
        errors.username = '用户名不能为空'
    }
    if (password === undefined || password.length == 0) {
        errors.password = '密码不能为空'
    }
    if (confirmpassword === undefined || confirmpassword.length == 0) {
        errors.confirmpassword = '确认密码不能为空'
    }
    if (email === undefined || email.length == 0) {
        errors.email = '邮箱不能为空'
    }
    if (!validator.isEmail(email)) {
        errors.email = '邮箱不正确'
    }
    return { valid: Object.keys(errors).length == 0, errors }
}
