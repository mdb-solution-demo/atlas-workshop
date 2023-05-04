"use strict";(self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Workshop \u6574\u4f53\u4ecb\u7ecd","href":"/atlas-workshop/docs/intro","docId":"intro"},{"type":"category","label":"\u7ec3\u4e60A: \u5f00\u59cb\u4f7f\u7528Atlas","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. \u5f00\u59cb\u4f7f\u7528 MongoDB Atlas","href":"/atlas-workshop/docs/setting-up-atlas/get-started-atlas","docId":"setting-up-atlas/get-started-atlas"},{"type":"link","label":"2. \u52a0\u8f7d\u6837\u4f8b\u6570\u636e\u5230 MyCluster","href":"/atlas-workshop/docs/setting-up-atlas/create-your-first-datasets","docId":"setting-up-atlas/create-your-first-datasets"}],"href":"/atlas-workshop/docs/category/\u7ec3\u4e60a-\u5f00\u59cb\u4f7f\u7528atlas"},{"type":"category","label":"\u7ec3\u4e60B: \u8bbf\u95ee\u60a8\u7684Atlas\u96c6\u7fa4","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. \u8bbf\u95ee\u60a8\u7684\u96c6\u7fa4","href":"/atlas-workshop/docs/access-your-cluster/access-the-atlas-cluster","docId":"access-your-cluster/access-the-atlas-cluster"}],"href":"/atlas-workshop/docs/category/\u7ec3\u4e60b-\u8bbf\u95ee\u60a8\u7684atlas\u96c6\u7fa4"},{"type":"category","label":"\u7ec3\u4e60C: \u7d22\u5f15\u4e0e\u6267\u884c\u8ba1\u5212","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. \u67e5\u770b\u7d22\u5f15\u7684\u6267\u884c\u8ba1\u5212","href":"/atlas-workshop/docs/indexing-basics/explain-plans","docId":"indexing-basics/explain-plans"},{"type":"link","label":"2. \u5982\u4f55\u521b\u5efa\u9ad8\u6548\u590d\u5408\u7d22\u5f15","href":"/atlas-workshop/docs/indexing-basics/","docId":"indexing-basics/indexing-basics"}],"href":"/atlas-workshop/docs/category/\u7ec3\u4e60c-\u7d22\u5f15\u4e0e\u6267\u884c\u8ba1\u5212"},{"type":"category","label":"\u7ec3\u4e60D: \u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801(IaC)","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1.\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801\uff08Terraform\uff09","href":"/atlas-workshop/docs/Infr-as-code/","docId":"Infr-as-code/infr-as-code"}],"href":"/atlas-workshop/docs/category/\u7ec3\u4e60d-\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801iac"},{"type":"category","label":"\u9644\u5f55: \u5e38\u89c1\u95ee\u9898","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1. VPC Peering","href":"/atlas-workshop/docs/q&a/vpc-peering","docId":"q&a/vpc-peering"}],"href":"/atlas-workshop/docs/category/\u9644\u5f55-\u5e38\u89c1\u95ee\u9898"}]},"docs":{"access-your-cluster/access-the-atlas-cluster":{"id":"access-your-cluster/access-the-atlas-cluster","title":"1. \u8bbf\u95ee\u60a8\u7684\u96c6\u7fa4","description":"\u6211\u4eec\u6709\u591a\u79cd\u65b9\u5f0f\u8fde\u63a5\u5230MongoDB Atlas\u96c6\u7fa4\uff0c\u9664\u4e86\u5e94\u7528\u9a71\u52a8\u8fde\u63a5\u5916\uff0c\u5e38\u89c1\u7684\u6709\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\uff0c\u5927\u5bb6\u53ef\u4ee5\u5206\u522b\u5c1d\u8bd5\u4e00\u4e0b","sidebar":"tutorialSidebar"},"indexing-basics/explain-plans":{"id":"indexing-basics/explain-plans","title":"1. \u67e5\u770b\u7d22\u5f15\u7684\u6267\u884c\u8ba1\u5212","description":"\u5f53\u7528Compass\u5728sample_mflix\u6570\u636e\u5e93\u4e0a\u6253\u5f00\u5e76\u8bbe\u7f6e\u4e3amovies\u96c6\u5408\u65f6\uff0c\u8ba9\u6211\u4eec\u8fd0\u884c\u4e00\u4e2a\u67e5\u8be2\u6765\u5206\u6790\u5b83\u7684\u6267\u884c\u8ba1\u5212:","sidebar":"tutorialSidebar"},"indexing-basics/indexing-basics":{"id":"indexing-basics/indexing-basics","title":"2. \u5982\u4f55\u521b\u5efa\u9ad8\u6548\u590d\u5408\u7d22\u5f15","description":"\u5728\u4efb\u4f55\u6570\u636e\u5e93\u4e2d\uff0c\u7d22\u5f15\u90fd\u652f\u6301\u9ad8\u6548\u6267\u884c\u67e5\u8be2\u3002\u5982\u679c\u6ca1\u6709\u7d22\u5f15\uff0c\u6570\u636e\u5e93\u5fc5\u987b\u626b\u63cf\u96c6\u5408\u6216\u8868\u4e2d\u7684\u6bcf\u4e2a\u6587\u6863\uff0c\u4ee5\u9009\u62e9\u4e0e\u67e5\u8be2\u8bed\u53e5\u5339\u914d\u7684\u6587\u6863\u3002\u5982\u679c\u67e5\u8be2\u5b58\u5728\u5408\u9002\u7684\u7d22\u5f15\uff0c\u5219\u6570\u636e\u5e93\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15\u6765\u9650\u5236\u5fc5\u987b\u68c0\u67e5\u7684\u6587\u6863\u6570\u91cf\u3002","sidebar":"tutorialSidebar"},"Infr-as-code/infr-as-code":{"id":"Infr-as-code/infr-as-code","title":"1.\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801\uff08Terraform\uff09","description":"1. \u521b\u5efa\u5e76\u4f7f\u7528Atlas API Key","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Workshop \u6574\u4f53\u4ecb\u7ecd","description":"\u6b22\u8fce\u53c2\u52a0 Atlas Workshop for Developer Day.","sidebar":"tutorialSidebar"},"q&a/vpc-peering":{"id":"q&a/vpc-peering","title":"1. VPC Peering","description":"GCP VPC \u662f\u5168\u5c40\u8d44\u6e90\uff0cVPC\u5185\u90e8\u7684\u5b50\u7f51\u4f5c\u4e3a\u5206\u533a\u8d44\u6e90\uff0c\u6d41\u91cf\u81ea\u52a8\u8de8\u533a\u57df\u8def\u7531\u3002\u800cAWS vpc\u662f\u533a\u57df\u8d44\u6e90:\u5fc5\u987b\u6dfb\u52a0\u989d\u5916\u7684\u8d44\u6e90\u6765\u8def\u7531\u533a\u57df\u4e4b\u95f4\u7684\u6d41\u91cf\u3002","sidebar":"tutorialSidebar"},"setting-up-atlas/create-your-first-datasets":{"id":"setting-up-atlas/create-your-first-datasets","title":"2. \u52a0\u8f7d\u6837\u4f8b\u6570\u636e\u5230 MyCluster","description":"\u4e0e MongoDB \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u5b8c\u6210\uff0c\u5305\u62ec  \u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f:","sidebar":"tutorialSidebar"},"setting-up-atlas/get-started-atlas":{"id":"setting-up-atlas/get-started-atlas","title":"1. \u5f00\u59cb\u4f7f\u7528 MongoDB Atlas","description":"MongoDB Atlas\u662f\u4e00\u4e2a\u5f00\u53d1\u8005\u6570\u636e\u5e73\u53f0\uff0c\u96c6\u6210\u4e86\u4e00\u4e2a\u591a\u4e91\u6570\u636e\u5e93\u548c\u4e00\u7ec4\u591a\u6837\u5316\u7684\u6570\u636e\u670d\u52a1\u3002Atlas\u7b80\u5316\u4e86\u6570\u636e\u5e93\u90e8\u7f72\u548c\u7ba1\u7406\uff0c\u540c\u65f6\u652f\u6301\u73b0\u4ee3\u6570\u636e\u9a71\u52a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u3002","sidebar":"tutorialSidebar"}}}')}}]);