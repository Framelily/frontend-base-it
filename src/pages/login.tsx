import { Fragment } from 'react'

import type { NextPage } from 'next'

import { Button, Col, Form, Input, Row, message } from 'antd'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'

import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import PageLayout from '@/layouts'
import type { ILogin } from '@/types/modules/Auth'
import useAuth from '@/hooks/Auth'

const LoginPage: NextPage = () => {
  const auth = useAuth()
  const [form] = Form.useForm()

  // Mutation
  const { mutate, isLoading } = useMutation(
    (data: ILogin) => {
      return auth.login({ ...data })
    },
    {
      onError: () => {
        message.error('อีเมลและรหัสผ่านไม่ถูกต้อง')
      },
      onSuccess: () => {
        message.success('เข้าสู่ระบบสำเร็จ')
      },
    },
  )

  return (
    <Fragment>
      <PageLayout title="เข้าสู่ระบบ">
        <div className="login">
          <div className="container mx-auto">
            <Row gutter={[16, 16]}>
              <Col xs={0} xl={12}></Col>
              <Col xs={24} xl={12}>
                <div className="box">
                  <h1 className="title">เข้าสู่ระบบ</h1>
                  <Form
                    form={form}
                    name="login"
                    initialValues={{}}
                    onFinish={mutate}
                    layout="vertical"
                    autoComplete="on">
                    <Row gutter={[18, 18]}>
                      <Col xs={24}>
                        <Form.Item label="อีเมล" name="email">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24}>
                        <Form.Item label="รหัสผ่าน" name="password">
                          <Input.Password className="input-password" />
                        </Form.Item>
                        <span>
                          <Link href="/forgot">ลืมรหัสผ่าน</Link>
                        </span>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                      เข้าสู่ระบบ
                    </Button>
                    <span>
                      <Link href="/register">ยังไม่มีบัญชีผู้ใช้</Link>
                    </span>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </PageLayout>
    </Fragment>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default LoginPage
