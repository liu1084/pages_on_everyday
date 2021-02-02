---
layout: post
title: "java/spring/How to upload file and store image to db?"
date: 2017-07-31 14:12:48 +0800
comments: true
categories: 
---

## HTML
```html
<form method="POST" enctype="multipart/form-data">
    <input type="file" id="device-default-image" />
    <a href="#" id="setup-device-default-image">设置外观图片</a>
</form>
```
#js
```js
//上传图片
$(document).off('change', '#device-default-image')
		.on('change', '#device-default-image', function(){
	var _this = this;
	var deviceId = currentDevice.id;
	var deviceModelName = currentDevice.mobileInfoModel;
	var files = document.getElementById('device-default-image').files;
	var formData = new FormData();
	for (var i = 0; i < files.length; i++) {
		formData.append("file" + i, files[i]);
	}

	var url = appPath + '/admin/equipmentManage/upload/' + deviceId + '/' + deviceModelName;
	$.ajax({
		url: url,
		type: 'POST',
		data: formData,
		dataType: "json",
		cache: false,
		contentType: false,
		processData: false,
		global: false,
		success: function (data) {
			//保存成功，需要更新图片
			console.log(data);
			if (data.code === 200){
				debugger;
				var deviceInfo = data.result;
				if (deviceInfo){
                    $(_this).parents('.device-left-section').find('.device-thumbnail').css({
                        'background': 'url(data:' + deviceInfo['mobilePicType'] + ';base64,' + deviceInfo['mobilePicBase64'] + ')',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center center'
                    });
				}
			}
		},
		error: function (error) {
			console.log(error.responseText);
			MessageBox.alert({
				title: "提示",
				message: "文件上传失败！",
				yesStr: "确定",
				type: 'warning'
			});
		}
	});
});
```
## controller

```java
/**
	 * 保存设备的墙纸
	 * @param deviceId
	 * @param modelName
	 * @param multipartRequest
	 * @return
	 */
	@RequestMapping(value = "/upload/{deviceId}/{modelName}", method = RequestMethod.POST)
	@ResponseBody
	public APIResponse changeImageByDeviceModel(final @PathVariable("deviceId") String deviceId, final @PathVariable("modelName") String modelName,
												final MultipartHttpServletRequest multipartRequest) {
		if (multipartRequest == null) {
			return APIResponse.toErrorResponse("上传手机图片文件不能为空");
		}

		if (deviceId == null) {
			return APIResponse.toErrorResponse("设备id不能为空");
		}

		if (modelName == null) {
			return APIResponse.toErrorResponse("设备类型不能为空");
		}

		final Iterator<String> iterator = multipartRequest.getFileNames();
		if (!iterator.hasNext()) {
			return APIResponse.toErrorResponse("上传手机图片文件不能为空");
		}

		CommonsMultipartFile multipartFile = null;
		if (iterator.hasNext()) {
			// 取第一个
			final String key = iterator.next();
			multipartFile = (CommonsMultipartFile) multipartRequest.getFile(key);
		}

		String fileType = multipartFile.getContentType();

		if (EImageType.getByType(fileType) == null) {
			return APIResponse.toErrorResponse("文件类型必须是图片格式（jpg/png/gif等）");
		}

		String fileName = System.currentTimeMillis() + "-" + UUID.randomUUID().toString() + "." + EImageType.getByType(fileType).name().toLowerCase();

		File dir = new File(this.downLoadPath + "/");
		if (!dir.exists()) {
			dir.mkdir();
		}

		String imageName = this.downLoadPath + File.separator + fileName;

		File file = new File(imageName);
		DeviceDTO deviceDTO = null;
		try {
			multipartFile.transferTo(file);
			String imageStringBase64 = Base64.encodeBase64String(FileUtils.readFileToByteArray(file));
			UtfDeviceInfoViewEntity detail = equipmentManageRepository.getDeviceDetailInfo(deviceId);
			deviceDTO = new DeviceDTO();
			List<UtfDeviceInfoTEntity> deviceInfoTEntity = equipmentManageRepository.getDeviceInfo(modelName);
			if (deviceInfoTEntity.size() > 0) {
				UtfDeviceInfoTEntity device = deviceInfoTEntity.get(0);
				deviceDTO.setId(device.getId());
			}
			deviceDTO.setMobilePic(imageName);
			deviceDTO.setMobileInfoModel(modelName);
			deviceDTO.setMobileInfoDensity(detail.getMobileInfoDensity());
			deviceDTO.setMobileInfoImsi(detail.getMobileInfoImsi());
			deviceDTO.setMobileInfoManufacturer(detail.getMobileInfoManufacturer());
			deviceDTO.setMobileInfoResolutionRatio(detail.getMobileInfoResolutionRatio());
			deviceDTO.setMobileInfoVersion(detail.getMobileInfoVersion());
			deviceDTO.setMobilePic(fileName);
			deviceDTO.setMobilePicType(fileType);
			deviceDTO.setMobilePicBase64(imageStringBase64);
			equipmentManageRepository.saveOrUpdateDevice(deviceDTO);
		} catch (final Exception e) {
			logger.debug(e.getMessage());
		}

		return APIResponse.toOkResponse(deviceDTO);
	}
```