---
slug: 选中div内文本复制后会多一个换行符
title: 选中div内文本复制后会多一个换行符
date: 2023-01-02
authors: heshibin
tags: [js]
---

# 选中div内文本复制后会多一个换行符

## 代码如下

```javascript
const copyToken = document.getElementById('token-text')
if (copyToken.innerHTML !== '') {
    const range = document.createRange()
  	range.selectNodeContents(copyToken)
  	window.getSelection().removeAllRanges()
  	window.getSelection().addRange(range)
  	const tag = document.execCommand('copy')
  	if (tag) {
    	message.success('复制成功!')
  	}
}
```

注意上方的`range.selectNodeContents()`

## selectNodeContents


selectNodeContents() 方法把范围边界设置为一个节点的子节点。

选中内容

## selectNode

selectNode() 方法把范围边界设置为一个节点。

选中节点





