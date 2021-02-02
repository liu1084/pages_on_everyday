### java 线程池ExecutorService的使用



```java
//获取CPU的核数
int cores = Runtime.getRuntime().availableProcessors();
//创建线程池
ExecutorService parseExcelExecutor = Executors.newFixedThreadPool(cores);
List<Callable<MaintenanceRecordWithValidateDTO>> tasks = new CopyOnWriteArrayList<>();
templates.parallelStream().forEach(maintenanceRecordTemplate -> {
    Callable<MaintenanceRecordWithValidateDTO> task = new GetResult(siteId, maintenanceRecordTemplate, inspectTypeResults, maintenanceTypeResults);
    //将多个任务放到list中打包
    tasks.add(task);
});
//将任务提交到线程池中调用, 并使用一共list接收所有值
List<Future<MaintenanceRecordWithValidateDTO>> futures = parseExcelExecutor.invokeAll(tasks,10,TimeUnit.SECONDS);
//返回结果
List<MaintenanceRecordWithValidateDTO> maintenanceRecordWithValidateDTOS = new ArrayList<>();
//获取每个线程的计算结果
for (Future<MaintenanceRecordWithValidateDTO> future : futures) {
    if (future.get() != null) {
        maintenanceRecordWithValidateDTOS.add(future.get());
    }
}
//关闭线程池
parseExcelExecutor.shutdown();
return maintenanceRecordWithValidateDTOS;
```

