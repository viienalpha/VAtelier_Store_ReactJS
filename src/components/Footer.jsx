import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Gird'

import logo from '../assets/images/logo/atelierwhite.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng: <strong>0362 553 010</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng: <strong>0362 553 010</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại: <strong>0362 553 010</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            VAtelier
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        VAtelier là cửa hàng đầu hàng về thời trang nam, mang đến sự đẳng cấp trên từng sản phẩm. Đỉnh cao trong thiết kế, tỷ mỹ trên những đường may, chất lượng trên từng loại vải.
                        </p>
                        <p>
                        VAtelier cửa hàng thời trang nam cao cấp đầu hàng Việt Nam.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer