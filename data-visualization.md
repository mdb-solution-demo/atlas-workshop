---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 2. 数据可视化

MongoDB Charts是创建MongoDB数据可视化的最佳方式。连接到任何MongoDB实例作为数据源，创建图表和图形，将它们嵌入到您的应用程序或构建实时仪表板用于共享和协作。
<!-- 本实验遵循MongoDB文档中提供的[Visualizing Movie Details](https://www.mongodb.com/docs/charts/tutorial/movie-details/movie-details-tutorial-overview/)的MongoDB图表教程的步骤的子集。
 -->

1. Atlas导航条中点击 **Charts**.

   <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-1-atlas/sidebar-charts.png')}
        border="1px"
    width="700"
    />

2. 点击 **Add Dashboard** 按钮.

   <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-1-atlas/chars-add.png')}
        border="1px"
    width="700"
    />

3. 拷贝下面的文字到 **Title** 中:
    
    ```
    Movie Details
    ```
    
4. 拷贝下面的文字到 **Description** 中:
    
    ```
    Insights from the Sample Mflix dataset.
    ```
    
5. 点击 **Save**.


单击创建后，Charts将导航到新创建的仪表板，并提示您添加第一个图表。

### 跟随下面的步骤，构建一个柱状图，显示获得最多奖项的导演。

To discover which directors of films represented in this dataset have won the most awards, use the `directors` and `awards.wins` database fields in your chart. The `genres` field provides additional insight into the specific genres of the films for which these directors have won awards.
要在这个数据集中，哪些电影导演获得了最多的奖项，请使用`directors` 和 `awards.wins`数据库。在图表中获胜的数据库字段。“类型”字段提供了对这些导演获奖电影的具体类型的进一步了解。

[柱状图](https://www.mongodb.com/docs/charts/chart-type-reference/column-bar-chart/#std-label-column-bar-chart-ref)可以很容易地对数值字段进行排序和比较，因此对于这个用例来说，它是一个很好的选择。



**1**

****Click *Add Chart*.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

**2**

### **Select the `sample_mflix.movies` data source.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

In the **Select Data Source** modal that appears:

1. Click the **Project** tab.
2. Click the name of the deployment that contains the sample data source.
3. Click the `sample_mflix` database. The database's data sources appear.
4. Click **Select** on the `movies` data source.

**3**

****Select the Chart Type.****
1. In the **Chart Type** dropdown menu, select **Column**.
2. Select the panel labeled **Stacked** below the **Chart Type** dropdown menu.

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

**4**

### **Add the desired fields to the proper encoding channels.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

1. Drag the `directors` field from the **Fields** section of the Chart Builder view to the **X Axis** encoding channel.
2. In the `directors` **Array Reductions** dropdown, select **Unwind Array**.
3. In the **Fields** section click the `awards` field to expand the `awards` object and view its properties.
4. Drag the `awards.wins` field to the **Y Axis** encoding channel. The **Y Axis** encoding channel determines which field to use for the chart's [aggregation.](https://www.mongodb.com/docs/manual/aggregation/)
5. Leave the **Aggregate** dropdown menu for the **Y Axis** encoding channel on its default value of **sum**. This value directs the aggregation operation to return the total number of award wins for each director.

**EXAMPLE**

### **Aggregation**

[Aggregation](https://www.mongodb.com/docs/manualaggregation/) processes data records using a wide variety of methods and returns computed results which may not be available in the original dataset. Because we are interested in the total number of awards won by each director, we use the `awards.wins` field here and will use an aggregation operator which will allow us to add up the total wins for each director.

**5**

### **Apply a limit to the X axis.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

At this point there are too many columns in our X axis to show any meaningful results. To bring the number down to a manageable level, we'll apply a [limit](https://www.mongodb.com/docs/charts/bin-data/#std-label-charts-limit-data) to get the ten directors with the most award wins.

The `directors` array is already sorted by the aggregated value of `wins` in descending order. To apply a limit to the number of columns in the **X Axis**:

1. Toggle **Limit Results** to **On**.
2. Set **Show** to `10`.

**6**

****Group awards by genre.****
1. Drag the `genres` field to the **Series** encoding channel.
2. In the **Array Reductions** dropdown menu, select `unwind array`. The X axis columns are now broken down by movie genre.
**NOTE**
Some movies contain more than one genre, so the numbers shown in the columns may not be the exact number of awards for each director.

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

**7**

****Title your chart.****
1. Hover over your chart title above the center of the chart and click the pencil icon.
2. Copy the following into the chart title input:

`Directors with Most Awards, Split by Genre`
3. Click the check mark to save your title.
4. Your chart should now look like this:click to enlarge
5. Click **Save and Close** to return to your dashboard.

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

![https://www.mongodb.com/docs/charts/images/charts/tutorial2-directors-with-most-awards.png](https://www.mongodb.com/docs/charts/images/charts/tutorial2-directors-with-most-awards.png)


# **Construct the Chart**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

Next, add a chart to your dashboard showing the TomatoMeter rating and MPAA rating of movies with the most award nominations. A [scatter chart](https://www.mongodb.com/docs/charts/chart-type-reference/scatter-chart/#std-label-scatter-chart-ref) is a good choice for visualizing how data points cluster together around certain values and allows the representation of several different data dimensions.

**1**

### **Click *Add Chart*.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

The **Add Chart** button is in the top right corner of the dashboard.

**2**

### **Select the `sample_mflix.movies` data source.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

In the **Select Data Source** modal that appears:

1. Click the **Project** tab.
2. Click the name of the deployment that contains the sample data source.
3. Click the `sample_mflix` database. The database's data sources appear.
4. Click **Select** on the `movies` data source.

**3**

****Select the Chart Type.****
1. In the **Chart Type** dropdown, select **Grid**.
2. Select the **Scatter** panel below the dropdown menu.

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

**4**

****Add the desired fields to the proper encoding channels.****
1. In the **Fields** section, click the `tomatoes` field to expand the `tomatoes` object and view its properties.
2. Click the `tomatoes.critic` field to also expand that object.
3. Drag the `tomatoes.critic.rating` field to the **X Axis** [encoding channel.](https://www.mongodb.com/docs/charts/encoding-channels/#std-label-encoding-channels)
4. In the **Fields** section click the `awards` field to expand the `awards` object and view its properties.
5. Drag the `awards.nominations` field to the **Y Axis** encoding channel.

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

**5**

### **Add a query filter.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

You can see now that higher-rated movies have a higher density of awards, but the chart is rather noisy. Add a query filter to only include movies with at least 30 award nominations and marginal MPAA ratings.

1. In the **Filters** box, add the following query filter and click the **Apply** button:
    
    ```
    {: {: }, : {: [, , , ]}}
    ```
    

**6**

### **Differentiate the chart by MPAA rating.**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

In the **Fields** section, drag the `rated` field to the **Color** [encoding channel.](https://www.mongodb.com/docs/charts/encoding-channels/#std-label-encoding-channels)

**EXAMPLE**

### **Additional Data Options**

There are three options for adding more data to your chart. You can use any of your data fields to modify the size, color, and shape of the markers on the grid. The `rated` field works well here because it has low cardinality; there are only four possible values (`G`, `PG`, `PG-13`, and `R`). Fields with higher cardinality may make the chart too noisy to read.

**7**

****Title your chart.****
1. Hover over your chart title above the center of the chart and click the pencil icon.
2. Copy the following into the chart title input:

`Movies with Most Awards Nominations, by MPAA Rating`
3. Click the check mark to save your title.
4. Your chart should now look like this:click to enlarge
5. Click **Save and Close** to return to your dashboard.

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

![https://www.mongodb.com/docs/charts/images/charts/tutorial2-most-awards-by-rating.png](https://www.mongodb.com/docs/charts/images/charts/tutorial2-most-awards-by-rating.png)

Your finished dashboard should look similar to this:

![https://www.mongodb.com/docs/charts/images/charts/movie-tutorial-dashboard-final.png](https://www.mongodb.com/docs/charts/images/charts/movie-tutorial-dashboard-final.png)

# **Wrapping Up**

![https://www.mongodb.com/docs/charts/assets/link.svg](https://www.mongodb.com/docs/charts/assets/link.svg)

You now have a dashboard which provides easily accessible insight into award winning directors and award nominated films. Try adding additional charts to the dashboard and see what other interesting insights you can discover.