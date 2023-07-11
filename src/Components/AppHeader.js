import { Image, Typography, Space, Badge } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";

const AppHeader = () => {
    return (
        <div className="AppHeader">
            <Image 
                width= {40}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoRW821P0jMR0f8ml5b4kr1IXimZUYwIbJA&usqp=CAU">
            </Image>
            <Typography.Title>Ayeshani's Dashboard</Typography.Title>
            <Space>
                <Badge count={10} dot>
                    <MailOutlined style={{fontSize: 24}}/>
                </Badge>
                <Badge count={20}>
                    <BellFilled style={{fontSize: 24}}/>
                </Badge>
            </Space>
        </div>
    )
}

export default AppHeader;