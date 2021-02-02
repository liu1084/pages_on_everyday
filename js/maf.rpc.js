

/**
 * 用户和后台交互的action工具方法
 */


(function(){
	
	//定义一个全局的DataCenter
	typeof(dataCenter) === 'undefined' &&  ( dataCenter =  new DataCenter());
	$.maf.action = {
		
		/**
		 * 从服务端获取数据
		 * @method
		 * @param {Object} data
		 * @param {DataCenter} dc
		 * @param {Boolean} showLoading
		 */
		requestData: function( data, dc, showLoading){
			//异步
			if (typeof(showLoading) == "undefined") { 
				$.ude.util.showLoading(!data.sync);
			}else{
				$.ude.util.showLoading(showLoading);
			}
	       
			var requestURL =  this.buildRequestPath(data.url,data.parameters),
				json = dc && dc.toJSON? dc.toJSON() : String( dc || ""),
				_dc = null,
				self = this;
				method = json ? "POST" : "GET";
			var options = {
				
				url: requestURL,
				
				type: method,
				
				contentType: "application/json; charset=utf-8",
				
				headers: $.extend({}, data.headers, {ajaxRequest: true}),
				
				async: !data.sync || true,
				
				data: json,
				
				dataType: "json",
				
				processData: json ? false : true,
				
				cache:false
			};
			
			var derfered = $.ajax(options);
			
			derfered.success(function(returnData){
				var complete = function(){
					if ( data.load ) {
						try {
							data.load(_dc);
						} 
						catch (e) {
						}
					}
					//隐藏加载进度
					$.ude.util.hiddenLoading(!data.sync);
				}
				_dc = new DataCenter(returnData);
				
				self._exceptionProcess(_dc, complete);
			});
			
			derfered.error(function(xhr, res, errorThrown){
				//隐藏加载进度
				$.ude.util.hiddenLoading(!data.sync);
				if ( data.error ) {
					try {
						data.context ? data.error.call(data.context, _dc, args.xhr) : data.error(_dc, xhr);
					} 
					catch (e) {
					}
				}
//				$.ude.util.timeoutProcess(xhr.responseText);
				$.ude.util.timeoutProcess("SESSION-TIMEOUT");
			});
			
		},
		_exceptionProcess: function( dc, complete ){
			var code = dc.getCode();
			if ( code < 0 ){
				//do something
			} else{
				complete();
			}
			
		},
		
		
		//构建URL参数
		buildRequestPath: function(url,parameters){
			 var path = [];
			 for(var name in parameters){
	   			path.push(name+"="+encodeURIComponent(parameters[name]));
	   		 }
	   		 if(path.length==0){
	   			return url;
	   		 }
	   		 path = path.join("&");
	   		 return url.concat(url.lastIndexOf("?")>0?"&":"?" ).concat(path);  
		}
		,
		//上传文件
		uploadFile: function(uploadSetting) {
			var beforeUpload = uploadSetting["check"];
			var fileElementId = uploadSetting.fileElementId;
			//执行自定义检查方法
			if (beforeUpload && ! beforeUpload($("#" + fileElementId))){
				return ;
			}
	        //初始化上传参数
			uploadSetting = jQuery.extend({}, jQuery.ajaxSettings, uploadSetting);
	        //设定返回数据类型，默认json
			uploadSetting.dataType =  (typeof(uploadSetting.dataType)=='undefined'?'json':uploadSetting.dataType);
	        //不启动url加密
			uploadSetting.secureuri = (typeof(uploadSetting.secureuri)=='undefined'?false:uploadSetting.secureuri);
	        var id = new Date().getTime();        
			var form = createUploadForm(id, fileElementId, (typeof(uploadSetting.data)=='undefined'?false:uploadSetting.data));
			var io = createUploadIframe(id, uploadSetting.secureuri);
			var frameId = 'jUploadFrame' + id;
			var formId = 'jUploadForm' + id;		
	        // Watch for a new set of requests
	        if ( uploadSetting.global && ! jQuery.active++ )
			{
				jQuery.event.trigger( "ajaxStart" );
			}            
	        var requestDone = false;
	        // Create the request object
	        var xml = {}   
	        if ( uploadSetting.global )
	            jQuery.event.trigger("ajaxSend", [xml, uploadSetting]);
	        
	        $.ude.util.showLoading(true);
	        
	        // Wait for a response to come back
	        var uploadCallback = function(isTimeout)
			{		
	        	
	        	$.ude.util.hiddenLoading(true);
				var io = document.getElementById(frameId);
	            try 
				{				
					if(io.contentWindow)
					{
						 xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
	                	 xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;
						 
					}else if(io.contentDocument)
					{
						 xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
	                	xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
					}						
	            }catch(e)
				{
					handleError(uploadSetting, xml, null, e);
				}
	            if ( xml || isTimeout == "timeout") 
				{				
	                requestDone = true;
	                var status;
	                try {
	                    status = isTimeout != "timeout" ? "success" : "error";
	                    // Make sure that the request was successful or notmodified
	                    if ( status != "error" )
						{
	                        // process the data (runs the xml through httpData regardless of callback)
	                        var data = uploadHttpData( xml, uploadSetting.dataType );    
	                        // If a local callback was specified, fire it and pass it the data
	                        if ( uploadSetting.success )
	                        	var _dc = new DataCenter(data);
	                            uploadSetting.success(_dc);
	    
	                        // Fire the global callback
	                        if( uploadSetting.global )
	                            jQuery.event.trigger( "ajaxSuccess", [xml, uploadSetting] );
	                    } else
	                        handleError(uploadSetting, xml, status);
	                } catch(e) 
					{
	                    status = "error";
	                    handleError(uploadSetting, xml, status, e);
	                }

	                // The request was completed
	                if( uploadSetting.global )
	                    jQuery.event.trigger( "ajaxComplete", [xml, uploadSetting] );

	                // Handle the global AJAX counter
	                if ( uploadSetting.global && ! --jQuery.active )
	                    jQuery.event.trigger( "ajaxStop" );

	                // Process result
	                if ( uploadSetting.complete )
	                    uploadSetting.complete(xml, status);

	                jQuery(io).unbind()

	                setTimeout(function()
										{	try 
											{
												jQuery(io).remove();
												jQuery(form).remove();	
												
											} catch(e) 
											{
												handleError(uploadSetting, xml, null, e);
											}									

										}, 100)

	                xml = null

	            }
	        }
	        // Timeout checker
	        if ( uploadSetting.timeout > 0 ) 
			{
	            setTimeout(function(){
	                // Check to see if the request is still happening
	                if( !requestDone ) uploadCallback( "timeout" );
	            }, uploadSetting.timeout);
	        }
	        try 
			{

				var form = jQuery('#' + formId);
				jQuery(form).attr('action', uploadSetting.url);
				jQuery(form).attr('method', 'POST');
				jQuery(form).attr('target', frameId);
	            if(form.encoding)
				{
					jQuery(form).attr('encoding', 'multipart/form-data');      			
	            }
	            else
				{	
					jQuery(form).attr('enctype', 'multipart/form-data');			
	            }			
	            jQuery(form).submit();

	        } catch(e) 
			{			
	            handleError(uploadSetting, xml, null, e);
	        }
			
			jQuery('#' + frameId).load(uploadCallback	);
	        return {abort: function () {}};	

	    }
	}
	
	function createUploadIframe(id, uri)
	{
			//create frame
            var frameId = 'jUploadFrame' + id;
            var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
			if(window.ActiveXObject)
			{
                if(typeof uri== 'boolean'){
					iframeHtml += ' src="' + 'javascript:false' + '"';

                }
                else if(typeof uri== 'string'){
					iframeHtml += ' src="' + uri + '"';

                }	
			}
			iframeHtml += ' />';
			jQuery(iframeHtml).appendTo(document.body);

            return jQuery('#' + frameId).get(0);			
    }
	
	function createUploadForm(id, fileElementId, data)
	{
		//create form	
		var formId = 'jUploadForm' + id;
		var fileId = 'jUploadFile' + id;
		var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');	
		if(data)
		{
			for(var i in data)
			{
				jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
			}			
		}		
		var oldElement = jQuery('#' + fileElementId);
		var newElement = jQuery(oldElement).clone();
		jQuery(oldElement).attr('id', fileId);
		jQuery(oldElement).before(newElement);
		jQuery(oldElement).appendTo(form);


		
		//set attributes
		jQuery(form).css('position', 'absolute');
		jQuery(form).css('top', '-1200px');
		jQuery(form).css('left', '-1200px');
		jQuery(form).appendTo('body');		
		return form;
    }
	
	function handleError ( uploadSetting, xhr, status, e ) 
	{   
    	// If a local callback was specified, fire it   
        if ( uploadSetting.error ) {   
            uploadSetting.error.call( uploadSetting.context || uploadSetting, xhr, status, e );   
        }   
  
        // Fire the global callback   
        if ( uploadSetting.global ) {   
            (uploadSetting.context ? jQuery(uploadSetting.context) : jQuery.event).trigger( "ajaxError", [xhr, uploadSetting, e] );   
        }   
	}
	
	function uploadHttpData( r, type ) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if ( type == "script" )
            jQuery.globalEval( data );
        // Get the JavaScript object, if JSON is used.
        if ( type == "json" ){
        	data = r.responseText;  
        	var start = data.indexOf(">");  
        	if(start != -1) 
        	{  
        		var end = data.indexOf("<", start + 1);  
        	    if(end != -1) {  
        			data = data.substring(start + 1, end);  
        	    }  
        	}
        }
        // evaluate scripts within html
        if ( type == "html" )
            jQuery("<div>").html(data).evalScripts();

        return data;
    }

})();