### java类中static block vs block

1. 首先static块会在实例化类之前调用，所以无法访问实例变量和方法。通常这个代码块中定义静态的变量。