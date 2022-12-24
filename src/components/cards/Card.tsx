import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ 
        width: 300,
        marginLeft: "38px"  
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <a><SettingOutlined key="setting" /></a>,
      <EditOutlined key="edit" />
    ]}
  >
    <Meta
      title="Card title"
    />
  </Card>
);

export default App;