import { Space, Statistic, Typography, Card, Table } from "antd";
import { ShoppingCartOutlined, DollarCircleOutlined, UserOutlined, ShoppingOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react";

const  Dashboard = () => {
    return (
        <div>
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard 
                    icon={
                        <ShoppingCartOutlined 
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,255,0,0.25)",
                                borderRadius: 20,
                                FontSize: 24,
                                padding: 8,
                            }}
                        />} 
                    Title="Orders" 
                    Value={12345}
                />
                <DashboardCard 
                    icon={
                        <ShoppingOutlined
                            style={{
                                color: "blue",
                                backgroundColor: "rgba(0,0,255,0.25)",
                                borderRadius: 20,
                                FontSize: 24,
                                padding: 8,
                            }}
                        />} 
                    Title="Inventory" 
                    Value={12345}
                />
                <DashboardCard 
                    icon={
                    <UserOutlined
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(0,255,255,0.25)",
                            borderRadius: 20,
                            FontSize: 24,
                            padding: 8,
                        }}
                    />}
                    Title="Customers" 
                    Value={12345}
                />
                <DashboardCard 
                    icon={
                        <DollarCircleOutlined
                            style={{
                                color: "red",
                                backgroundColor: "rgba(255,0,0,0.25)",
                                borderRadius: 20,
                                FontSize: 24,
                                padding: 8,
                            }}
                        />} 
                    Title="Revenue" 
                    Value={12345}
                />
            </Space>
            <Space>
                <RecentOrders/>
            </Space>
        </div>
    )
}

const DashboardCard = ({icon, Title, Value}) => {
    return(
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={Title} value={Value}/> 
            </Space>
        </Card>
    )
}

const RecentOrders = () =>  {
    const [ dataSource, setDataSource ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     getOrders().then(res => {
    //         setDataSource(res.products);
    //         setLoading(false);
    //     });
    // }, []);

    return (
        <Table
            columns = {[
                {
                    title: "Title",
                    dataIndex: "title",
                },
                {
                    title: "Quantity",
                    dataIndex: "Quantity",
                },
                {
                    title: "Price",
                    dataIndex: "discountPrice",
                }
            ]}
            loading={loading}
            dataSource={dataSource}
        >
        </Table>
    )
}

export default Dashboard;