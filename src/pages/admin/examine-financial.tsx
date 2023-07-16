import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Breadcrumb, Button, Col, Form, Input, Row } from 'antd'
import Image from 'next/image'

import ImgSlipKBank from '../../../public/images/preview-slip/slip-kbank.png'

import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import BackofficeLayout from '@/layouts/BackofficeLayout'

const breadCrumbItem = [
  {
    title: 'จัดการ/การเงิน/ตรวจสอบการชำระเงิน',
  },
]

const FinancialPage: NextPage = () => {
  const { t } = useTranslation(['common'])

  return (
    <BackofficeLayout title="ตรวจสอบการชำระเงิน">
      <div className="title-breadcrumb">
        <Breadcrumb items={breadCrumbItem} />
      </div>
      <div className="box-base">
        <h5 className="topic">ตรวจสอบการชำระเงิน</h5>

        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Row gutter={[20, 20]} className="examine-financial">
            <Col xs={24} xl={12}>
              <Form.Item label="วันที่โอนเงิน :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="เวลาโอนเงิน :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="หมายเลขคำสั่งซื้อ :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="ชื่อ-นามสกุล :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="อีเมล :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="ช่องทางการชำระเงิน :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="ธนาคาร :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="หมายเลขบัญชี :">
                <Input readOnly />
              </Form.Item>
              <Form.Item label="จำนวนเงิน :">
                <Input readOnly />
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
              <Form.Item label="สลิปโอนเงิน :">
                <Image src={ImgSlipKBank} width={220} height={220} alt="img-slip-kbank" />
              </Form.Item>
              <Row>
                {/* <Col xl={{ span: 18, offset: 6 }}> */}
                <Col xl={18} offset={6}>
                  <div className="flex gap-2">
                    <Button htmlType="submit" className="btn-outline-blue">
                      ชำระแล้ว
                    </Button>
                    <Button htmlType="submit" className="btn-outline-red">
                      ยกเลิก
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </BackofficeLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default FinancialPage
