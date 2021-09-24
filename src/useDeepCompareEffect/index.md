---
title: useDeepCompareEffect
nav:
  title: Hooks
  path: /hooks
group:
  title: SideEffect
  path: /slide-effect
  order: 3
---

# useDeepCompareEffect

useDeepCompareEffect 使用同 useEffect

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
useDeepCompareEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined)
```

### 参数

| 参数   | 说明                        | 类型                                | 默认值 |
| :----- | :-------------------------- | :---------------------------------- | :----- |
| effect | 同 useEffect 的执行函数参数 | `React.EffectCallback`              | -      |
| deps   | 同 useEffect 的依赖数组参数 | `React.DependencyList \| undefined` | -      |
