---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 1. 开始使用 MongoDB Atlas

MongoDB Atlas是一个开发者数据平台，集成了一个多云数据库和一组多样化的数据服务。Atlas简化了数据库部署和管理，同时支持现代数据驱动的应用程序开发。

## 注册一个新的Atlas账号

你可以从下面链接注册开始MongoDB Atlas之旅:

1. 通过点击 [Atlas registration page](https://account.mongodb.com/account/register).

## 开始部署一个免费集群

让我们在 MongoDB Atlas 中部署我们的第一个永久免费数据库！我们将使用 Atlas UI 进行操作，在开始之前，请确保您已经登录到您的账户。

### 使用浏览器打开并登录[cloud.mongodb.com](https://cloud.mongodb.com/)

1. 点击 **Build a Database** 按钮.

    <img
        alt="MongoDB Atlas 中 '创建数据库' 部分突出显示 '构建数据库' 按钮"
        src={useBaseUrl('/img/chapter-1-atlas/create-a-database.png')}
        border="1px"
        width="700"
    />

2. 选择 **M0 Free**, 选择AWS云提供商和本次实验物理位置最近的地区(us-east-1)。将您的集群重命名为 **MyCluster** 并且点击 **Create**.

 <img
    alt="集群类型选择页面，突出显示共享集群选项"
    src={useBaseUrl('/img/chapter-1-atlas/select-cluster-type.png')}
    border="1px"
    width="700"
 />


3. 使用以下向导创建第一个用户和密码。最后请记下您的数据库用户名和密码。
    <img
        alt="安全快速入门页面，突出显示左侧菜单中的 '数据库' 选项卡"
        src={useBaseUrl('/img/chapter-1-atlas/security-quickstart-highlighted-database-button.png')}
        border="1px"
    width="700"
    />

4. 要返回到您的部署，请从左侧菜单中选择 **Database** 创建集群可能需要几分钟时间。部署完成后，您将在列表中看到您的第一个集群！

 <img
    alt="'数据库部署' 页面，包含名为 'MyCluster' 的集群"
    src={useBaseUrl('/img/chapter-1-atlas/database-deployments.png')}
    border="1px"
    width="700"
 />

5. 要返回到您的部署，请从左侧菜单中选择 **Network Access** .
添加访问列表 IP"0.0.0.0/0"，暂时将其列入白名单。.

 <img
    alt="'数据库部署' 页面，包含名为 'MyCluster' 的集群"
    src={useBaseUrl('/img/chapter-1-atlas/database-accesslist.png')}
    border="1px"
    width="700"
 />


<!--  
### CMD Setup

#### CLI Install
- Follow the docs:
https://www.mongodb.com/docs/atlas/cli/stable/install-atlas-cli/ 

- Run the setup command and follow on screen instructions:
```
> atlas setup --clusterName MyCluster  --username <USER> --password <PASSWORD> --accessListIp "0.0.0.0/0"
```
-->
