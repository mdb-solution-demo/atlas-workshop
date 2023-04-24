---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 1. 访问您的集群

<Tabs>
  <TabItem value="data-explorer" label="1. Data Explorer" default>

  数据浏览器是默认启用的，可通过集群视图上的**Collections**选项卡访问。
   <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-1-atlas/data-explorer-dbs.png')}
        border="1px"
    width="700"
    />

  #### 编辑/添加文档

  请参阅以下[文档](https://www.mongodb.com/docs/atlas/atlas-ui/documents/#create--view--update--and-delete-documents)，了解如何“修改”，“创建”和“删除”文档。
  
  作为练习，您可以在`test`数据库下创建一个名为`users`的集合：


  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/createCollection.png')}
    border="1px"
    width="700"
/>


 在插入文档选项卡中插入如下用户文档数组。
  ```json
  [
    {
      "name": "Alice",
      "age": 26,
      "email": "alice@abc.com"
    },
    {
      "name": "Bob",
      "age": 43,
      "email": "bob@def.com"
    },
    {
      "name": "Carol",
      "age": 19,
      "email": "carol@xyz.com"
    }
]
  ```
  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/insert-documents.png')}
    border="1px"
    width="700"
/>

  #### 预览

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/insert-doc2.png')}
    border="1px"
    width="700"
/>


  </TabItem>
  <TabItem value="compass" label="2. Compass">

### 安装 Compass

export const Highlight = ({children, color, link}) => (
  <a href={link}><span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    >
    {children}
  </span></a>
);


:::tip 选择您的平台
<br></br>
<div className="compass-platforms"><Highlight color="#555555" link="https://downloads.mongodb.com/compass/mongodb-compass-1.36.2-darwin-x64.dmg">Compass on MacOS</Highlight><Highlight color="#555555" link="https://downloads.mongodb.com/compass/mongodb-compass-1.36.2-darwin-arm64.dmg">Compass on MacOS (M1)</Highlight> <Highlight color="#00A4EF" link="https://downloads.mongodb.com/compass/mongodb-compass-1.36.2-win32-x64.exe">Compass on Windows</Highlight> <Highlight color="#E95420" link="https://downloads.mongodb.com/compass/mongodb-compass_1.36.2_amd64.deb">Compass on Ubuntu</Highlight></div>

:::

请按照以下[指南](https://www.mongodb.com/docs/compass/master/install/)在您的工作站操作系统上安装与Compass相关的二进制文件。

### 使用 Compass

打开Compass后，您将获得连接字符串输入屏幕。

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/default-connection.png')}
    border="1px"
    width="700"
/>

使用Atlas“连接”选项卡获取您访问Atlas部署所需的字符串。

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/atlas-compass.png')}
    border="1px"
    width="500"
/>

复制连接字符串。

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/copy-paste-conn.png')}
    border="1px"
    width="500"
/>

通过Compass进行粘贴和连接：

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/compass-connect.png')}
    border="1px"
    width="500"
/>

请参阅以下[文档](https://www.mongodb.com/docs/compass/current/documents/) ，了解如何“修改”，“创建”和“删除”文档。

作为练习，您可以在`test`数据库下创建一个名为`users`的集合：
  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/compass-database-create.png')}
    width="500"
/>


在“ADD DATA”>“Insert document” json视图中插入一个用户文档数组。

  ```json
  [
    {
      "name": "Alice",
      "age": 26,
      "email": "alice@abc.com"
    },
    {
      "name": "Bob",
      "age": 43,
      "email": "bob@def.com"
    },
    {
      "name": "Carol",
      "age": 19,
      "email": "carol@xyz.com"
    }
]
  ```
 #### 预览

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/insertData.png')}
    width="500"
/>


  </TabItem>
  <TabItem value="shell" label="3. MongoDB Shell">

### 安装 `mongosh`

转到Atlas集群上的连接选项卡，选择“使用MongoDB Shell连接”选项
 <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/atlas-shell.png')}
    border="1px"
    width="500"
/>

下载适用于您操作系统的相关shell并启动连接命令
 <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/shell-connect.png')}
    border="1px"
    width="500"
/>

请参阅以下[指南](https://www.mongodb.com/docs/mongodb-shell/connect/)了解更多详细信息。

作为练习，您可以在`test`数据库下创建一个名为`users`的集合：

```js
show databases
```

```js
use test
```

```js
db.users.insertMany([
    {
      "name": "Alice",
      "age": 26,
      "email": "alice@abc.com"
    },
    {
      "name": "Bob",
      "age": 43,
      "email": "bob@def.com"
    },
    {
      "name": "Carol",
      "age": 19,
      "email": "carol@xyz.com"
    }
])
```
```js
db.users.find()
```


  </TabItem>
</Tabs>

