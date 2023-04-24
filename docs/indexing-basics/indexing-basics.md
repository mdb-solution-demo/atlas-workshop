---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 2. 索引基础知识

在任何数据库中，索引都支持高效执行查询。如果没有索引，数据库必须扫描集合或表中的每个文档，以选择与查询语句匹配的文档。如果查询存在合适的索引，则数据库可以使用索引来限制必须检查的文档数量。

MongoDB提供广泛的索引[类型和功能](https://docs.mongodb.com/manual/indexes)，具有特定于语言的排序顺序，以支持对数据的复杂访问模式。 MongoDB索引可以根据需求创建和删除，以适应不断变化的应用程序要求和查询模式，并可以声明在文档中的任何字段上，包括嵌套在数组中的字段。

MongoDB中复合索引的顺序有一个最佳实践规则，称为ESR。这个规则代表在索引定义中的相等(Equality)、排序(Sort)和范围(Range)字段的放置。

### 1. 让我们为我们的查询创建一些索引。

<Tabs>
  <TabItem value="data-explorer" label="Data Explorer" default>


  数据浏览器允许我们通过转到“索引”选项卡并创建一个新索引来创建索引。按以下顺序添加字段以尝试覆盖我们的查询预测：

  ```json
  {
  "cast" :1,
  "year" : 1,
  "title" : 1
}
```


  
   <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-2-atlas/data-explorer-index.png')}
        border="1px"
    
    />

  

  </TabItem>
  <TabItem value="compass" label="Compass">


  数据浏览器允许我们通过转到“索引”选项卡并创建一个新索引来创建索引。按以下顺序添加字段以尝试覆盖我们的查询预测：

  ```json
  {
  "cast" :1,
  "year" : 1,
  "title" : 1
}
```

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/index-compass.png')}
    border="1px"
/>

 
  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">

使用shell创建索引是通过`createIndex`命令完成的：
```js

db.movies.createIndex(  {
  "cast" :1,
  "year" : 1,
  "title" : 1
})
```


  </TabItem>
</Tabs>

### 2.现在让我们看看索引创建后的执行计划


<Tabs>
  <TabItem value="compass" label="Compass">


 现在查询正在使用索引来最小化扫描文档的数量，但是查询仍在内存中进行排序

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/compass-no-sort.png')}
   border="1px"
/>

 
  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">

如果我们在该查询上使用`.explain(true)`输出，我们将看到使用了索引(IXSCAN阶段)，但是存在内存排序。

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
 inputStage: {
        stage: 'SORT',
        nReturned: 12,
        executionTimeMillisEstimate: 0,
        works: 26,
        advanced: 12,
        needTime: 13,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        sortPattern: {
          title: 1
        },
        memLimit: 33554432,
        type: 'default',
        totalDataSizeSorted: 1281,
        usedDisk: false,
        inputStage: {
          stage: 'IXSCAN',
  ```

  </TabItem>
</Tabs>

### 3.让我们更改字段的顺序以符合ESR(相等、排序和范围)顺序：

<Tabs>
  <TabItem value="compass" label="Compass">


要遵循ESR规则，让我们按照我们的查询`cast-相等`、`title-排序`和最后`year-范围`的顺序使用如下顺序：

  ```json
{
  "cast" :1,
  "title" : 1,
  "year" : 1
}
```

并删除以前的索引。

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/compass-ESR.png')}
    border="1px"
/>

 
  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">

 要遵循ESR规则，让我们按照我们的查询`cast-相等`、`title-排序`和最后`year-范围`的顺序使用如下顺序：

```js

db.movies.createIndex(  {
  "cast" :1,
    "title" : 1
  "year" : 1

})

db.movies.dropIndex({
  "cast" :1,
  "year" : 1,
  "title" : 1
})
```
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
 executionStages: {
      stage: 'FETCH',
      nReturned: 12,
      executionTimeMillisEstimate: 0,
      works: 21,
      advanced: 12,
      needTime: 8,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 12,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
```



  </TabItem>
</Tabs>

### 4.恭喜！！正如您所看到的，查询仅使用索引，没有排序阶段。
