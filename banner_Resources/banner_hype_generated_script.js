//	HYPE.documents["banner"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "banner_Resources";
	var documentName = "banner";
	var documentLoaderFilename = "banner_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{onSceneLoadAction:{type:0},onSceneKeyDownAction:{type:0},onSceneKeyPressAction:{type:0},initialValues:{"7":{aU:8,G:"#000000",c:252,aV:8,r:"inline",d:8,e:"1.000000",t:11,Z:"break-word",w:"Jouw sparringspartner in het sollictatieproces",bF:"12",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:168,F:"center",b:0},"8":{aU:8,G:"#3CA1D4",c:220,aV:8,r:"inline",d:7,e:"1.000000",t:11,Z:"break-word",w:"Job Broker Banking &amp; Insurance",bF:"12",A:"#3CA1D4",x:"visible",j:"absolute",B:"#3CA1D4",k:"div",y:"preserve",C:"#3CA1D4",z:"6",aS:8,D:"#3CA1D4",aT:8,a:184,F:"center",b:157},"4":{o:"content-box",h:"stripe.png",x:"visible",a:133,q:"100% 100%",b:87,j:"absolute",r:"inline",c:353,k:"div",z:"1",d:4,bF:"12"},"11":{c:234,d:131,I:"None",e:"1.000000",J:"None",aW:"0.000000",K:"None",g:"#FFFFFF",L:"None",aP:"pointer",M:0,N:0,aI:15,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",k:"div",aJ:15,D:"#A0A0A0",aK:15,aA:{goToURL:"http://jobbroker.nl",type:5,openInNewWindow:true},z:"1",a:0,aL:15,b:0},"9":{aU:8,G:"#3CA1D4",c:220,aV:8,r:"inline",d:7,t:11,Z:"break-word",w:"Werving &amp; Selectie en Detachering",bF:"12",A:"#3CA1D4",x:"visible",j:"absolute",B:"#3CA1D4",k:"div",y:"preserve",C:"#3CA1D4",z:"7",aS:8,D:"#3CA1D4",aT:8,a:184,F:"center",b:159},"5":{aU:8,G:"#000000",c:220,aV:8,I:"None",r:"inline",d:8,J:"None",e:"1.000000",K:"None",t:11,L:"None",Z:"break-word",M:0,w:"Jouw sparringspartner in het sollictatieproces",N:0,j:"absolute",x:"visible",O:0,k:"div",P:0,bF:"12",y:"preserve",z:"3",aS:8,aT:8,a:184,F:"center",b:-64},"12":{x:"visible",k:"div",c:618,aA:{goToURL:"http://jobbroker.nl",type:5,openInNewWindow:true},d:180,z:"2",a:-184,j:"absolute",aP:"pointer",b:-24},"6":{aU:8,G:"#000000",c:220,aV:8,r:"inline",d:8,e:"1.000000",t:11,Z:"break-word",w:"Jouw sparringspartner in het sollictatieproces",bF:"12",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:184,F:"center",b:-64},"10":{aU:8,G:"#3CA1D4",c:220,aV:8,r:"inline",d:7,e:"1.000000",t:11,Z:"break-word",w:"We get you there!!",bF:"12",A:"#3CA1D4",x:"visible",j:"absolute",B:"#3CA1D4",k:"div",y:"preserve",C:"#3CA1D4",z:"8",aS:8,D:"#3CA1D4",aT:8,a:184,F:"center",b:157},"2":{p:"no-repeat",c:72,q:"100% 100%",d:52,r:"inline",aW:"0.000000",aX:0.519802,h:"logo.png",aY:"0",bF:"12",j:"absolute",x:"visible",k:"div",l:"0deg",Q:0,z:"2",m:"",R:"#000000",n:"",S:0,a:184,o:"content-box",T:0,b:64}},sceneIndex:0,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:1.0333333,i:"b",e:32,r:1,s:0,o:"7"},{f:"1",t:0,d:6,i:"a",e:184,r:1,s:184,o:"9"},{f:"1",t:0,d:3.5,i:"b",e:64,r:1,s:64,o:"2"},{f:"1",t:0,d:3,i:"a",e:184,r:1,s:184,o:"8"},{f:"1",t:0,d:0.96666664,i:"b",e:120,r:1,s:157,o:"8"},{f:"1",t:0,d:4,i:"w",e:"Voor een warme en persoonlijke introductie",r:1,s:"Jouw sparringspartner in het sollictatieproces",o:"5"},{f:"2",t:0,d:3,i:"b",e:0,r:1,s:-64,o:"6"},{f:"2",t:0,d:6,i:"b",e:0,r:1,s:-64,o:"5"},{f:"1",t:0.96666664,d:2.0333333,i:"b",e:120,s:120,o:"8"},{f:"2",t:1,d:2,i:"w",e:"Wij kennen de klant en de klant kent ons",r:1,s:"Jouw sparringspartner in het sollictatieproces",o:"6"},{f:"2",t:1.0333333,d:0.9666667,i:"b",e:32,s:32,o:"7"},{f:"1",t:3,d:0.5,i:"e",e:"0.000000",r:1,s:"1.000000",o:"7"},{f:"1",t:3,d:1,i:"b",e:118,s:120,o:"8"},{f:"1",t:3,d:1,i:"a",e:420,s:184,o:"8"},{f:"1",t:3,d:0.5,i:"a",e:266,r:1,s:184,o:"2"},{f:"1",t:3,d:1,i:"b",e:118,r:1,s:159,o:"9"},{f:"2",t:3,d:0.9666667,i:"b",e:32,s:0,o:"6"},{f:"1",t:3.5,d:0.5,i:"a",e:184,s:266,o:"2"},{f:"1",t:3.5,d:3.5,i:"b",e:64,s:64,o:"2"},{f:"1",t:3.9666667,d:0.033333302,i:"b",e:32,s:32,o:"6"},{f:"1",t:4,d:0,i:"b",e:118,s:118,o:"8"},{f:"1",t:4,d:0,i:"a",e:420,s:420,o:"8"},{f:"1",t:4,d:2,i:"a",e:184,s:184,o:"2"},{f:"1",t:4,d:2,i:"b",e:118,s:118,o:"9"},{f:"2",t:4,d:0,i:"b",e:32,s:32,o:"6"},{f:"1",t:6,d:1,i:"b",e:118,s:118,o:"9"},{f:"1",t:6,d:1,i:"a",e:420,s:184,o:"9"},{f:"1",t:6,d:1,i:"b",e:118,r:1,s:157,o:"10"},{f:"1",t:6,d:1,i:"b",e:32,s:0,o:"5"},{f:"1",t:6,d:0.5,i:"e",e:"0.000000",r:1,s:"1.000000",o:"6"},{f:"1",t:6,d:1,i:"a",e:348,s:184,o:"2"},{f:"1",t:7,d:3,i:"b",e:118,s:118,o:"10"},{f:"1",t:7,d:2,i:"a",e:348,s:348,o:"2"},{f:"1",t:9,d:1,i:"a",e:420,r:1,s:184,o:"10"},{f:"1",t:9,d:0.5,i:"e",e:"0.000000",r:1,s:"1.000000",o:"5"},{f:"1",t:9,d:1,i:"a",e:184,s:348,o:"2"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:10}},perspective:"600px",oid:"1",onSceneAnimationCompleteAction:{type:1,transition:1,sceneSymbol:3},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("banner_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

