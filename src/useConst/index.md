---
title: useConst
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 2
---

# useConst

常量值

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const value = useConst(initialValue: T | (() => T))
```

### 参数

| 参数         | 说明       | 类型             | 默认值 |
| :----------- | :--------- | :--------------- | :----- |
| initialValue | 常量初始值 | `T \| (() => T)` | -      |

### 返回值

| 参数  | 说明   | 类型 | 默认值 |
| :---- | :----- | :--- | :----- |
| value | 常量值 | `T`  | -      |
