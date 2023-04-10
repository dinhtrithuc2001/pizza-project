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
                        <img src="https://media.licdn.com/dms/image/D5603AQH3dNA_t3UQiQ/profile-displayphoto-shrink_800_800/0/1680891406190?e=1686182400&v=beta&t=L2X6SHd8yTSa4HFN4QpvWgcVZAm5UEFSgmE-HAW1uzk" alt="" style={{ width: "100%", height: 250 }} />
                    </Col>
                    <Col md={3}>
                        <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/133201823_465843014409987_8378772611988159967_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=egrsDvAru3wAX8TrtS1&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCRYOCRzerv_kIYHauQ12PWluGojfF6hpiYEuimQKPjiQ&oe=6457C8CB" alt="" style={{ width: "100%", height: 250 }} />
                    </Col>
                    <Col md={3}>
                        <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/337018068_1027234641493020_436915309408511472_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=65suKzK08iMAX9fOYEU&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA8Y3KT-A41adhrwzLiTxhPlqN8C8LnL_L3WsNFOBtZlg&oe=64355F55" alt="" style={{ width: "100%", height: 250 }} />
                    </Col>
                    <Col md={3}>
                        <img src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/337231611_222311113614654_2899483368418348748_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iSrutk8vSSMAX81ouuk&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfAEqvqiBilnYc1tnT5b07z5QNlL0uWV7SukR2Uf1IGiiQ&oe=64350380" alt="" style={{ width: "100%", height: 250 }} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About