## python项目打包并上传Nexus包管理器，并在其他项目中引用公共包



### 第一步：在Nexus中创建hosted资源库

![image-20240604094436156](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604094436156.png)

![image-20240604094534531](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604094534531.png)

![image-20240604094628927](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604094628927.png)

![image-20240604094752713](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604094752713.png)

### 第二步：在本地用户目录创建.pypirc配置文件

![image-20240604094857837](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604094857837.png)



### 第三步：构建公共项目

![image-20240604094947637](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604094947637.png)

![image-20240604095058029](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604095058029.png)

### 第四步： 上传公共项目



1. 在公共项目中创建`setup.py`文件，定义包的名称、版本等信息。
2. 使用命令 `python setup.py sdist bdist_wheel` 生成分发包。
3. 将包上传到PyPI： `twine upload dist/*`。
4. 在其他项目中，通过 `pip install yourpackage` 安装公共模块。



如果遇到以下错误：

>requests.exceptions.SSLError: HTTPSConnectionPool(host='maven.cinaval.com', port=443): Max retries exceeded with url: /repository/cinaval-pipy/ (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1007)')))



```shell
pip install --trusted-host=pypi.org --trusted-host=maven.xxx.com --user pip-system-certs
```



### 第五步：在其他项目中引用公共项目的包和文件

安装公共模块（这里的模块的名称和setup.py中的name字段的值要一致，可以通过https://maven.xxx.com/repository/cinaval-pipy/simple/ 进行确认）

```shell
pip install --index-url=https://maven.xxx.com/repository/cinaval-pipy/simple/ xxx-py-commons
```



使用包中的方法

```python
import unittest

import numpy as np
from plot.PlotUtils import PlotUtils


class MyTestCase(unittest.TestCase):
    def test_something(self):
        data1 = np.random.uniform(low=0, high=100, size=50)  # 生成范围在0到100之间的50个随机浮点数
        data2 = np.random.uniform(low=-50, high=50, size=50)  # 生成范围在-50到50之间的50个随机浮点数
        data3 = np.random.uniform(low=-100, high=0, size=50)  # 生成范围在-100到0之间的50个随机浮点数
        data4 = np.random.uniform(low=0.1, high=.5, size=50)  # 生成范围在-100到0之间的50个随机浮点数
        plotter = PlotUtils(data1, data2, data3, data4, title="测试")
        plotter.plot_lines()


if __name__ == '__main__':
    unittest.main()
```

![image-20240604104232953](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240604104232953.png)