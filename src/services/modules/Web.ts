import BaseService from './Base'

import type { IRegister, IResendOtp, IResendOtpRes, IVerifyOtp } from '@/types/modules/Register'
import type { IContactUs } from '@/types/modules/ContactUs'
import type { IToken } from '@/types/modules/Base'
import type { ILogin, IForgotPassword, INewPassword } from '@/types/modules/Auth'
import type { IListPackage, IOrderCreate, IOrderCreateRes, ISubmitPayment } from '@/types/modules/Price'

export default class WebService extends BaseService {
  // [POST] Register
  static async register(params: IRegister): Promise<IVerifyOtp> {
    return this._post(`/auth/register`, { ...params })
  }
  // [POST] Verify OTP
  static async verifyOtp(params: IVerifyOtp) {
    return this._post(`/auth/verifyotp`, { ...params })
  }
  // [POST] Resend OTP
  static async resendOtp(params: IResendOtp): Promise<IResendOtpRes> {
    return this._post(`/auth/resendotp`, { ...params })
  }
  // [POST] Login
  static async login(params: ILogin): Promise<IToken> {
    return this._post(`/auth/login`, { ...params })
  }
  // [POST] Forgot Password
  static async forgotPassword(params: IForgotPassword) {
    return this._post(`/auth/forgetpassword`, { ...params })
  }
  // [POST] Reset Password
  static async resetPassword(params: INewPassword) {
    return this._post(`/auth/resetpassword`, { ...params })
  }
  // [POST] Contact Us
  static async contactUs(params: IContactUs) {
    return this._post(`/contacts/`, { ...params })
  }
  // [GET] List Package
  static async listPackage(params: IListPackage): Promise<IListPackage> {
    return this._get(`/web-packages/list?limit=10&page=1`)
  }
  // [GET] List Package By Id
  static async listPackageId(packageId: number): Promise<IListPackage> {
    return this._get(`/web-packages/${packageId}`)
  }
  // [POST] Order Create
  static async orderCreate(params: IOrderCreate): Promise<IOrderCreateRes> {
    return this._post(`/web/orders/create`, { ...params })
  }
  // [POST] Confirm Order
  static async confirmOrder(params: IOrderCreateRes) {
    return this._post(`/web/orders/confirm-order`, { ...params })
  }
  // [POST] Submit Payment
  static async submitPayment(params: ISubmitPayment) {
    return this._post(`/web/orders/submit-payment`, { ...params })
  }
}
