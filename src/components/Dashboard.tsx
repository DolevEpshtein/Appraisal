import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import CaseTable from '../components/CaseTable/CaseTable';
import Endpoint from '../components/TestEndpoints';

const MenuItemsContent = {
  'cases-list': <CaseTable />,
  tests: <Endpoint />,
};

const Dashboard = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { Sider, Content } = Layout;
  const [currentKey, setCurrentKey] = useState('cases-list');
  const onSelectedItem = ({ key }) => setCurrentKey(key);

  if (!localStorage.getItem('token')) history.push('/login');
  return (
    <Layout>
      <Sider>
        <Menu
          theme="dark"
          defaultSelectedKeys={['cases-list']}
          mode="inline"
          onSelect={onSelectedItem}
        >
          <Menu.Item key="cases-list">
            {t('dashboard.item.case-table')}
          </Menu.Item>
          <Menu.Item key="tests">tests</Menu.Item>
        </Menu>
      </Sider>
      <Content>{MenuItemsContent[currentKey]}</Content>
    </Layout>
  );
};

export default Dashboard;
