import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container style={{ marginTop: '50px', marginBottom: 50 }}>
                <h1>Về chúng tôi</h1>
                <p>Chúng tôi là The Pizza Company. Thương hiệu thuộc quyền sở hữu của tập đoàn Minor Food Group, một trong những tập đoàn hàng đầu châu Á về ngành khách sạn và ẩm thực cao cấp.

                    Được thành lập từ 1981, The Pizza Company – Chuỗi nhà hàng Pizza phong vị Ý bắt đầu mở rộng, phát triển hệ thống cửa hàng và nhượng quyền thương mại quốc tế. Đến nay, thương hiệu The Pizza Company có hơn 300 cửa hàng tại hơn 12 thị trường trên toàn thế giới.

                    Bên cạnh những sản phẩm Pizza độc đáo, phong cách phục vụ nhiệt tình, thân thiện, dịch vụ giao hàng tiện lợi, cùng với sự nghiêm túc và tập trung đầu tư phát triển chúng tôi tin tưởng The Pizza Company sẽ làm thỏa mãn khẩu vị của những khách hàng Việt Nam sành điệu nhất.</p>
                <h1>Câu chuyện của chúng tôi</h1>
                <Row>
                    <Col md={6}>
                        <p>Lấy cảm hứng từ phong cách ẩm thực tinh tế của người Ý kết hợp cùng sự am hiểu về sở thích ẩm thực của người châu Á, chúng tôi nổi tiếng với dòng Pizza Hải sản cao cấp ngon tuyệt hảo. Đặc trưng nhân bánh đầy đặn, ngập tràn phô mai hảo hạng và hương vị rất phù hợp với khẩu vị của người Việt đã giúp “The Pizza Company” thành công trong việc chinh phục các khách hàng yêu Pizza.</p>
                    </Col>
                    <Col md={6}>
                        <p>Năm 2013 nhà hàng The Pizza Company lần đầu tiên có mặt tại Việt Nam. Cùng với xu hướng phát triển và hội nhập quốc tế, “The Pizza Company” là một trong những thương hiệu pizza phát triển vượt bậc và nhanh chóng với hơn 70 nhà hàng trên toàn quốc và đã trở thành điểm đến được yêu thích của thực khách yêu ẩm thực trong suốt thời gian qua. </p>
                    </Col>
                </Row>
                <Row>
                    <h1>Đầu bếp của chúng tôi</h1>
                    <Col md={3}>
                        <img src="https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/300855209_2893292097631928_5672312696758360837_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEZimqjYozgjzB4eRPSFa24kyluwEB58xqTKW7AQHnzGrnoRSHH10UxcY2jszwYtVirC_ma8lT0ZQFH0jYxt9g0&_nc_ohc=l1dTxR2E-1oQ7kNvgGNuO9I&_nc_ht=scontent.fpnh11-2.fna&oh=00_AYAq-byKyTxRTvnshSWLQBPixM-iLmYVfQ0wXHlWkJCsVA&oe=668B49AD" alt="" style={{ width: "100%", height: 250 }} />
                    </Col>
                    <Col md={3}>
                        <img src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/326548872_3452795061671889_7799638967858735965_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEfkCjG-GPRtWYw8Cr5zBk79fqm2lQoHN_1-qbaVCgc37NhpF7yHGcYdwkbBmMvYsNt1AzQaGkENl4SOy-KEBXo&_nc_ohc=MFweUsOOYBQQ7kNvgGoOIsV&_nc_ht=scontent.fpnh11-1.fna&oh=00_AYAe2m74akNyPRxEAqiKVyeiEstNEwe7bEjEyngUvwnRyg&oe=668B6EBD" alt="" style={{ width: "100%", height: 250 }} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About