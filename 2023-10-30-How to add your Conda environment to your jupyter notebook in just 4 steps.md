## How to add your Conda environment to your jupyter notebook in just 4 steps

> https://medium.com/@nrk25693/how-to-add-your-conda-environment-to-your-jupyter-notebook-in-just-4-steps-abeab8b8d084



In this article I am going to detail the steps, to add the Conda environment to your Jupyter notebook.

**Step 1:** Create a Conda environment.

```
conda create --name firstEnv
```

once you have created the environment you will see,

![img](https://miro.medium.com/v2/resize:fit:1400/1*-XO11EGam-liFNEg1-QUww.png)

output after you create your environment.

**Step 2:** Activate the environment using the command as shown in the console. After you activate it, you can install any package you need in this environment.

For example, I am going to install Tensorflow in this environment. The command to do so,

```
conda install -c conda-forge tensorflow
```

![img](https://miro.medium.com/v2/resize:fit:1400/1*4LMpbqJUfcf1Vdf6Cc6vTQ.png)

**Step 3:** Now you have successfully installed Tensorflow. Congratulations!!

Now comes the step to set this conda environment on your jupyter notebook, to do so please install ipykernel.

```
conda install -c anaconda ipykernel
```

After installing this,

just type,

```
python -m ipykernel install --user --name=firstEnv
```

Using the above command, I will now have this conda environment in my Jupyter notebook.

![img](https://miro.medium.com/v2/resize:fit:1400/1*cmfzg482hlu5U6Q34VzrjQ.png)

**Step 4:** Just check your Jupyter Notebook, to see the shining firstEnv.

![img](https://miro.medium.com/v2/resize:fit:1400/1*QpkEdJSnvDDhIWRIxGMr5A.png)

Yayy!! Happy coding :)