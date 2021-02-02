---
layout: post
title: "javascript/ajax upload"
date: 2017-06-06 18:25:16 +0800
comments: true
categories: 
---

```html
<td style="width:86%; position: relative;" colspan="5">
	<input type="text" class="form-control" id="menuPageUrl" placeholder=<s:text name="menuPageUrlplaceholder"/> style="width:60%;">
	<input name="upload" id="upload" class="form-control" type="file" value="" multiple="multiple"
	style="width: 30%; margin-left: 5px; display: inline-block; opacity: 0;z-index: -1 ">
	<input type="button" class="btn btn-default" value="选择文件上传..."
	style="position: absolute; right: 10%; width: 240px; height: 28px; z-index: -1;"/>
	<a style="cursor: pointer; margin-left: 5px; display: none;">查看</a>
</td>
```

```js
$(document).off('change', '#upload').on('change', '#upload', function(){
	getSelectedNode();
	var path = $('#menuTree').data('path');
	if (path){
		var complete = function(dc){
			var fileName = dc.getParameter('fileName');
			var url = dc.getParameter('url');
			var link = dc.getParameter('link');
			$("#menuPageUrl").val(url);
			$('#upload').parent("td").find('a').attr('href', link).attr('target', '_blank').show();
			detectPages(link);
		};
		var data = {
			path: path
		};


		var uploadSetting = {};
		uploadSetting.fileElementId = "upload";
		uploadSetting.data = data;
		uploadSetting.url = appPath + "/utf/config/projectstructure/uploadFile.action";
		uploadSetting.success = complete;
		$.maf.action.uploadFile(uploadSetting);
	}
});


```

```java
	private File upload;
	private String uploadFileName;
	private String fileUploadContentType;

	public String getFileUploadContentType() {
		return fileUploadContentType;
	}

	public void setFileUploadContentType(String fileUploadContentType) {
		this.fileUploadContentType = fileUploadContentType;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}


	public void uploadFile() throws Exception {
		DataCenter returnDc = DataCenterFactory.getInstance().createDataCenter();
		try {
			if (upload != null) {
				HttpServletRequest request = ServletActionContext.getRequest();
				logger.info(request.getRequestURL());

				StringBuilder url = new StringBuilder();
				StringBuilder serverPath = new StringBuilder();
				String[] parents = ((String[]) request.getParameterMap().get("path"))[0].split(",");
				ArrayUtils.reverse(parents);
				String parentPath = "";
				for (int i = 0; i < parents.length; i++) {
					if (i == parents.length - 1) {
						parentPath += parents[i];
					} else {
						parentPath += parents[i] + "/";
					}
				}
				checkStaticFolder(parentPath);
				String fileName = handleFile(parentPath);
				url.append(parentPath)
						.append("/")
						.append(fileName);

				serverPath.append(request.getScheme())
						.append("://")
						.append(request.getServerName())
						.append(":").append(request.getServerPort())
						.append(request.getContextPath())
						.append("/")
						.append(getLink(UTFConfig.getParameter("staticPageUploadPath"), parentPath))
						.append("/")
						.append(fileName);

				returnDc.setCode(MESSAGE_CODE_SUCCESS);
				returnDc.addParameter("fileName", fileName);
				returnDc.addParameter("url", url.toString());
				returnDc.addParameter("link", serverPath.toString());
			}
		} catch (Exception e) {
			returnDc.setCode(MESSAGE_CODE_FAIL);
			returnDc.setDetail(e.getMessage());
			logger.error(e.getMessage(), e);
		} finally {
			super.writerDataCenterToPage(returnDc);
		}
	}

	private String handleFile(String parentPath) throws Exception {
		if (upload == null) {
			return "";
		}


		File file = new File(getUploadFullPath(parentPath) + File.separator + uploadFileName);
		FileUtils.copyFile(upload, file);
		return uploadFileName;
	}

	private void checkStaticFolder(String parentPath) {
		String path =  UTFConfig.getParameter("staticPageUploadPath");
		if (org.apache.commons.lang3.StringUtils.isEmpty(path)) {
			logger.info("静态文件目录未在配置文件中定义, 无法使用手动上传静态文件功能!");
		} else {
			File file = new File(getUploadFullPath(parentPath));
			if (!file.isDirectory() || !file.exists()) {
				try {
					file.mkdirs();
				} catch (Exception ignored) {
					logger.error("文件夹" + getUploadFullPath(parentPath) + "不存在或者没有权限写");
				}
			}
		}
	}

	private String getLink(String sourcePath, String parentPath) {
		return sourcePath + "/" + parentPath;
	}

	private String getUploadFullPath (String parentPath){
		String servletPath = ServletActionContext.getServletContext().getRealPath(".") + "/";
		String path =  UTFConfig.getParameter("staticPageUploadPath")
				+ "/"
				+ parentPath;
		return servletPath + path;
	}

```