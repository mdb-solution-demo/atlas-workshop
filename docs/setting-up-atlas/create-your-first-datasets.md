---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 2. 加载样例数据到 MyCluster

与 MongoDB 集群进行交互可以通过多种方式完成，包括  **以下几种方式**:

- 某一种开发语言的 **驱动**
- 命令行工具 **MongoDB Shell**
- GUI 工具 **MongoDB Compass**
- Atlas **Data Explorer**

为了更好地了解 MongoDB 数据结构和可能的交互方式，我们可以将**Sample Data** 加载到我们的集群中.


<!-- 
## Load the sample data set into your cluster
:::tip
This section can be skipped if you used the CLI setup as it was done for you already.
:::
-->

### 将示例数据集加载到您的集群中
:::tip
预计完成时间：5分钟
:::

Atlas 提供了可加载到 Atlas 数据库部署中的示例数据。

有关示例数据集列表及其各自的描述，请参见可用的[示例数据集](https://www.mongodb.com/docs/atlas/sample-data/#std-label-available-sample-datasets)。每个数据集页面都包含数据集中的数据库、集合和索引的信息。
<!-- 
#### Procedure
You can load sample data into your Atlas database deployment in several ways. You can load sample data from the Atlas UI Database Deployments view, or use the Atlas CLI.
-->

### 通过Atlas UI操作

1. 转到**数据库部署**视图。
在 Atlas 中的左侧导航窗格中，单击 **Database**。

2. 打开**加载示例数据集**对话框。
找到您要加载示例数据的数据库部署位置。
单击数据库部署的省略号 **(...)** 按钮。

3. 单击 **Load Sample Dataset**。

:::tip
如果提示，选择所有可用数据集。
:::

4. 在对话框中，单击 **Load Sample Dataset**
对话框关闭后，Atlas 开始将示例数据集加载到您的数据库部署中。

  <img
    alt="Cluster type selection page highlighting the shared cluster option"
    src={useBaseUrl('/img/chapter-1-atlas/load-sampledata.png')}
    border="1px"
    width="700"
  /> 

5. 查看您的示例数据。要通过单击数据库部署的浏览集合按钮查看您的示例数据。您应该在您的数据库部署中看到以下数据库：

```
sample_airbnb
sample_geospatial
sample_guides
sample_mflix
sample_supplies
sample_training
sample_weatherdata
```
有关包含在这些数据集中的集合和文档的详细信息，请参见可用的示例数据集。