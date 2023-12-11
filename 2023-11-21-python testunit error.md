## python testunit

```python
if __name__ == '__main__':
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
```



# Unittest code

```python
import unittest
from name_function import get_formatted_name
class NamesTestCase(unittest.TestCase):

    def test_first_last_name(self):
        formatted_name=get_formatted_name("allen","park")
        self.assertEqual(formatted_name,"Allen Park")

unittest.main()
```

# ERROR

```python
/Users/xxx/Library/Jupyter/runtime/kernel-0eacd257-bf93-4c0f-843c-2e8a96377a17
(unittest.loader._FailedTest)

AttributeError: module '__main__' has no attribute
'/Users/xxx/Library/Jupyter/runtime/kernel-0eacd257-bf93-4c0f-843c-2e8a96377a17'
```

