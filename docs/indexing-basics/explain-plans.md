---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 1. 索引的执行计划

<Tabs>
 
<TabItem value="compass" label="Compass">

当用Compass在`sample_mflix`数据库上打开并设置为`movies`集合时，让我们运行一个查询来分析它的执行计划:

#### Filter : 
```json
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
```
#### Sort :
```json
	{"title": 1}
```
 #### 预览

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/query-filter-sort-compass.png')}
    border="1px"
/>

现在让我们查看“Explain Plan”选项卡。您应该可以观察到查询正在使用 `COLLSCAN` 通过所有可用文档。正在应用内存排序，并且 `No index available for this query`.

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/query-explain-compass.png')}
     border="1px"
/>

  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">

当我们登录到我们的Atlas群集时，让我们确定要使用并分析其查询计划的查询

```json
use sample_mflix

db.movies.find(
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
)
.sort(
	{"title": 1}
)
```
如果我们在该查询上使用 `.explain(true)` 输出，我们将看到没有使用索引，并选择了 `COLLSCAN` 计划
```json
 db.movies.find(
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
)
.sort(
	{"title": 1}
).explain(true)
```
```json
{ executionStats: {
  executionSuccess: true,
  nReturned: 12,
  executionTimeMillis: 36,
  totalKeysExamined: 0,
  totalDocsExamined: 23533,
  executionStages: {
    stage: 'SORT',
    nReturned: 12,
    executionTimeMillisEstimate: 5,
    works: 23548,
    advanced: 12,
    needTime: 23535,
    needYield: 0,
    saveState: 23,
    restoreState: 23,
    isEOF: 1,
    sortPattern: {
      title: 1
    },
    memLimit: 33554432,
    type: 'simple',
    totalDataSizeSorted: 24676,
    usedDisk: false,
    inputStage: {
      stage: 'COLLSCAN',
      filter: {
        '$and': [
          {
            cast: {
              '$eq': 'Bill Murray'
            }
          },
          {
            year: {
              '$gte': 2000
            }
          }
        ]
      },
      nReturned: 12,
      executionTimeMillisEstimate: 5,
      works: 23535,
      advanced: 12,
      needTime: 23522,
      needYield: 0,
      saveState: 23,
      restoreState: 23,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 23533
    }
  }
  ```

  </TabItem>
</Tabs>

接下来，让我们学习如何使用索引加快查询速度并降低数据库利用率开销。

