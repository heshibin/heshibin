---
title: java中的锁
description: 每次拿数据的时候会上锁，别的线程取拿数据的时候就会阻塞，比如synchronized。
keywords:
 - java
 - 线程
 - 悲观锁
 - 乐观锁
 - 公平锁
 - 非公平锁
 - 可重入锁
 - 不可重入锁
 - 自旋锁
date: 2023-02-18
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-18
  author: machu
---




#### 悲观锁
每次拿数据的时候会上锁，别的线程取拿数据的时候就会阻塞，比如synchronized。

#### 乐观锁
每次去拿数据的时候都认为其他线程不会修改，更新的时候判断是否被更新数据，如果被修改就拒绝更新（CAS机制和版本号机制）。

#### 公平锁
指多个线程按照申请的顺序来获取锁，保证每个线程都能拿到锁，比如ReentrantLock（参数默认是false，表示非公平锁，参数为true时，表示为公平锁）。

#### 非公平锁
获取锁的方式是随机获取的，保证不了每个线程都能拿到锁，比如synchronized、ReetrantLock。

#### 可重入锁
也叫递归锁，在外层使用锁之后，在内层仍然可以使用，并且不会发生死锁。

#### 不可重入锁
若当前线程执行某个方法已经获取该锁，在方法中尝试再次获取锁时，就会获取不到被阻塞。

#### 自旋锁
线程在获取锁的时候，如果锁已经被其他线程获取，该线程将会循环等待，不断的判断锁是否能够被成功获取。



#### 相关文章

- [java中保证线程安全的几种方法](https://machu.top/docs/小记/2023-02/17java中保证线程安全的几种方法)
- [高性能的Compare and Swap](https://machu.top/docs/小记/2023-02/19高性能的Compare%20and%20Swap)
- [ReentrantLock和Synchronized的使用场景和实现机制](https://machu.top/docs/小记/2023-02/20ReentrantLock和Synchronized的使用场景和实现机制)
- [使用线程池的好处以及常用线程池](https://machu.top/docs/小记/2023-02/21使用线程池的好处) 
- [要通过ThreadPoolExecutor创建线程池的原因](https://machu.top/docs/小记/2023-02/22要通过ThreadPoolExecutor创建线程池的原因)

import Quote from '@site/src/components/Quote';

> <Quote></Quote>
