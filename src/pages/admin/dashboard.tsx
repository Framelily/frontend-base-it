import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'
import { Button, Col, Row } from 'antd'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Image from 'next/image'
import Link from 'next/link'

import imgSmsApi from '../../../public/images/img-sms-api.png'
import imgSmsOtp from '../../../public/images/img-sms-otp.png'
import imgSmsMar from '../../../public/images/img-sms-marketing.png'
import iconArrowRight from '../../../public/images/svg/icon-arrow-right.svg'

import { DEFAULT_LOCALE } from '@/configs/locale'
import { makeServerSideProps } from '@/libs/getServerSide'
import BackofficeLayout from '@/layouts/BackofficeLayout'

ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend)

const UserDashboardPage: NextPage = () => {
  const { t } = useTranslation(['common'])

  const dataGraph = {
    labels: ['Red'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [70, 30],
        backgroundColor: ['#3aadee', '#CDCDCD'],
        hoverOffset: 4,
      },
    ],
  }

  const optionGraph = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            const { dataset } = tooltipItem
            const { dataIndex } = tooltipItem
            const total = dataset.data.reduce((acc, curr) => acc + curr, 0)
            const value = dataset.data[dataIndex]
            const percentage = ((value / total) * 100).toFixed(2)
            return `${percentage}%`
          },
        },
      },
    },
    cutout: 25,
  }

  return (
    <BackofficeLayout title="Dashboard">
      <Row gutter={[20, 20]} className="dashboard">
        <Col xs={24} xl={12}>
          <div className="box-base statistics">
            <Row gutter={[30, 30]} className="statistics-header">
              <Col xs={12} xl={12} className="flex flex-col">
                <span className="name">จำนวนผู้รับทั้งหมด</span>
                <span className="number">0</span>
              </Col>
              <Col xs={12} xl={12} className="flex flex-col">
                <span className="name">เครดิตที่ใช้ทั้งหมด</span>
                <span className="number">0</span>
                <span className="description">คิดเป็นเงินโดยประมาณ 0 บาท</span>
              </Col>
            </Row>
            <Row gutter={[30, 30]} className="statistics-detail">
              <Col xs={24} sm={12} lg={8} xl={12}>
                <Row>
                  <Col xs={12}>
                    <p>
                      <span>ส่งผ่าน API</span>
                      <span>0</span>
                      <span>ส่งสำเร็จ 0</span>
                      <span>ดูรายงาน</span>
                    </p>
                  </Col>
                  <Col xs={12}>
                    <div className="graph-doughnut">
                      <Doughnut data={dataGraph} options={optionGraph} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={12} lg={8} xl={12}>
                <Row>
                  <Col xs={12}>
                    <p>
                      <span>ส่ง OTP</span>
                      <span>0</span>
                      <span>ส่งสำเร็จ 0</span>
                      <span>ดูรายงาน</span>
                    </p>
                  </Col>
                  <Col xs={12}>
                    <div className="graph-doughnut">
                      <Doughnut data={dataGraph} options={optionGraph} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={12} lg={8} xl={12}>
                <Row>
                  <Col xs={12}>
                    <p>
                      <span>ส่งแบบแคมเปญ</span>
                      <span>0</span>
                      <span>ส่งสำเร็จ 0</span>
                      <span>ดูรายงาน</span>
                    </p>
                  </Col>
                  <Col xs={12}>
                    <div className="graph-doughnut">
                      <Doughnut data={dataGraph} options={optionGraph} />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} lg={24} xl={12}>
          <Row gutter={[20, 20]}>
            <Col xs={24} lg={24} xl={24}>
              <div className="box-base">
                <Link href="#">
                  <span>ดูทั้งหมด</span>
                  <Image src={iconArrowRight} alt="icon-arrow-right" />
                </Link>
                <Row gutter={[20, 20]}>
                  <Col xs={12} sm={8} className="flex flex-col items-center">
                    <p>การส่งผ่าน API ล่าสุด</p>
                    <Image src={imgSmsApi} height={124} alt="img-sms-api" />
                  </Col>
                  <Col xs={12} sm={11} className="flex flex-col justify-center">
                    <h4>
                      SMS <span>API</span>
                    </h4>
                    <span>
                      บริการ ส่ง SMS
                      <br /> ผ่าน SMS API สำหรับธุรกิจ
                    </span>
                  </Col>
                  <Col xs={24} sm={5} className="flex items-center justify-end w-full">
                    <Button type="primary">สนใจบริการ</Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} lg={24} xl={24}>
              <div className="box-base">
                <Link href="#">
                  <span>ดูทั้งหมด</span>
                  <Image src={iconArrowRight} alt="icon-arrow-right" />
                </Link>
                <Row gutter={[20, 20]}>
                  <Col xs={12} sm={8} className="flex flex-col items-center">
                    <p>การส่งผ่าน OTP ล่าสุด</p>
                    <Image src={imgSmsOtp} height={124} alt="img-sms-otp" />
                  </Col>
                  <Col xs={12} sm={11} className="flex flex-col justify-center">
                    <h4>
                      ระบบส่ง <span>SMS</span> OTP
                    </h4>
                    <span>
                      พร้อมใช้งาน
                      <br /> เพิ่มความปลอดภัย
                      <br /> ไม่ต้องเขียนโปรแกรมเพิ่ม
                    </span>
                  </Col>
                  <Col xs={0} sm={5}></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="dashboard mt-5">
        <Col xs={{ span: 24, order: 2 }} xl={{ span: 12, order: 1 }}>
          <div className="box-base advert">โฆษณา</div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} xl={{ span: 12, order: 2 }}>
          <div className="box-base">
            <Link href="#">
              <span>ดูทั้งหมด</span>
              <Image src={iconArrowRight} alt="icon-arrow-right" />
            </Link>
            <Row gutter={[20, 20]}>
              <Col xs={12} sm={8} className="flex flex-col items-center">
                <p>การส่งแคมเปญล่าสุด</p>
                <Image src={imgSmsMar} height={124} alt="img-sms-mar" />
              </Col>
              <Col xs={12} sm={11} className="flex flex-col justify-center">
                <h4>
                  SMS <span>MARKETING</span>
                </h4>
                <span>
                  บริการ sms marketing
                  <br /> ครบวงจร ใช้ง่าย คุณภาพสูง
                </span>
              </Col>
              <Col xs={24} sm={5} className="flex items-center justify-end w-full">
                <Button type="primary">สนใจบริการ</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </BackofficeLayout>
  )
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default UserDashboardPage
