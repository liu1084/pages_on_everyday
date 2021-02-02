---
id: 80
title: Make a world map using D3.js
date: 2015-12-28T17:21:50+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=80
permalink: /?p=80
categories:
  - d3js
---
Before you make, Tools is required:

  * <a href="http://d3js.org" target="_blank">d3</a> &#8212; d3js.org
  * topojson &#8212; we will generate a small json file from natural earth datasets
  * gdal (Geospatial Data Abstraction Library) &#8212; a toolsets which you must install
  * 1:1e7 Natural Earth datasets &#8212; download (include subunits & populated places, we will merge them to a file)

If you have done, let&#8217;s go head.

<!--more-->

Steps:

  * install nodejs

<pre class="lang:sh decode:true">sudo yum install gcc-c++ gcc libpng libtiff -y
wget https://nodejs.org/dist/v4.2.4/node-v4.2.4.tar.gz
tar zxvf node-v4.2.4.tar.gz 
cd node-v4.2.4/
./configure --prefix=/usr/local/nodejs
make && make install</pre>

  * install proj4

<pre class="lang:sh decode:true">wget http://download.osgeo.org/proj/proj-4.7.0.tar.gz
tar -zvxf proj-4.7.0.tar.gz
cd proj-4.7.0
./configure
make
make install</pre>

  * build gdal

<pre class="lang:sh decode:true">wget http://download.osgeo.org/gdal/gdal-1.7.2.tar.gz
tar -zvxf gdal-1.7.2.tar.gz
cd gdal-1.7.2
./configure --with-static-proj4=/usr/local/lib --with-threads --with-libtiff=internal --with-geotiff=internal --with-jpeg=internal --with-gif=internal --with-png=internal --with-libz=internal
make
make install</pre>

  * making ogr2ogr golbally accessible

<pre class="lang:sh decode:true">ln -s /usr/local/bin/ogr2ogr /usr/local/ogr2ogr</pre>

  * Install topojson

<pre class="lang:sh decode:true">npm install -g topojson
ln -s /usr/local/nodejs/bin/* /usr/bin/</pre>

  * check ogr2ogr && topojson

<pre class="lang:sh decode:true">which ogr2ogr
which</pre>

  * Install topojson

<pre class="lang:sh decode:true">npm install -g topojson
ln -s /usr/local/nodejs/bin/* /usr/bin/</pre>

  * download natural earth datasets

<a href="http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_map_subunits.zip" target="_blank">map subunits</a>

<a href="http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_populated_places.zip" target="_blank">populated places</a>

  * Generator json file of  subunits & places

<pre class="lang:sh decode:true">ogr2ogr   -f GeoJSON   -where " SCALERANK &lt; 3"   places.json   ne_10m_populated_places.shp


ogr2ogr -f GeoJSON subunits.json -where "scalerank &lt;=1 " ne_10m_admin_0_map_subunits.shp</pre>

//subunits.json include countries shapes & features

//places.json include cities & features

  * Merge 2 json file into worldmap.json

topojson will smaller than witch 2 files

<pre class="lang:sh decode:true">-rw-r--r--. 1 root root 404K 12月 28 15:49 places.json
-rw-r--r--. 1 root root  14M 12月 28 16:15 subunits.json
-rw-r--r--. 1 root root 2.3M 12月 28 16:18 worldmap.json</pre>

ogr2ogr是一个很强大的工具，这里只是简单的使用类似SQL的条件语句，通过shapefile（.shp)生成了符合条件的json文件。具体的使用方式，参考：http://www.gdal.org/ogr2ogr.html。

<!--more-->

如果要使用d3绘制世界地图，还需要使用一个小工具，里面包含了ISO3166中提到的各种国家，还有国家对应的首都、电话区号，A2和A3等内容。

<pre class="lang:js decode:true">;
(function ($) {
    var countries = [{"name":"Afghanistan","a2":"AF","a3":"AFG","num":4,"phone":"93","capital":"Kabul"},{"name":"Albania","a2":"AL","a3":"ALB","num":8,"phone":"355","capital":"Tirana"},{"name":"Algeria","a2":"DZ","a3":"DZA","num":12,"phone":"213","capital":"Algiers"},{"name":"American Samoa","a2":"AS","a3":"ASM","num":16,"phone":"1-684","capital":"Pago Pago"},{"name":"Andorra","a2":"AD","a3":"AND","num":20,"phone":"376","capital":"Andorra"},{"name":"Angola","a2":"AO","a3":"AGO","num":24,"phone":"244","capital":"Luanda"},{"name":"Anguilla","a2":"AI","a3":"AIA","num":660,"phone":"1-264","capital":"The Valley"},{"name":"Antarctica","a2":"AQ","a3":"ATA","num":10,"phone":"672","capital":"None"},{"name":"Antigua and Barbuda","a2":"AG","a3":"ATG","num":28,"phone":"1-268","capital":"St. Johns"},{"name":"Argentina","a2":"AR","a3":"ARG","num":32,"phone":"54","capital":"Buenos Aires"},{"name":"Armenia","a2":"AM","a3":"ARM","num":51,"phone":"374","capital":"Yerevan"},{"name":"Aruba","a2":"AW","a3":"ABW","num":533,"phone":"297","capital":"Oranjestad"},{"name":"Australia","a2":"AU","a3":"AUS","num":36,"phone":"61","capital":"Canberra"},{"name":"Austria","a2":"AT","a3":"AUT","num":40,"phone":"43","capital":"Vienna"},{"name":"Azerbaijan","a2":"AZ","a3":"AZE","num":31,"phone":"994","capital":"Baku"},{"name":"Bahamas","a2":"BS","a3":"BHS","num":44,"phone":"1-242","capital":"Nassau"},{"name":"Bahrain","a2":"BH","a3":"BHR","num":48,"phone":"973","capital":"Al-Manamah"},{"name":"Bangladesh","a2":"BD","a3":"BGD","num":50,"phone":"880","capital":"Dhaka"},{"name":"Barbados","a2":"BB","a3":"BRB","num":52,"phone":"1-246","capital":"Bridgetown"},{"name":"Belarus","a2":"BY","a3":"BLR","num":112,"phone":"375","capital":"Minsk"},{"name":"Belgium","a2":"BE","a3":"BEL","num":56,"phone":"32","capital":"Brussels"},{"name":"Belize","a2":"BZ","a3":"BLZ","num":84,"phone":"501","capital":"Belmopan"},{"name":"Benin","a2":"BJ","a3":"BEN","num":204,"phone":"229","capital":"Porto-Novo"},{"name":"Bermuda","a2":"BM","a3":"BMU","num":60,"phone":"1-441","capital":"Hamilton"},{"name":"Bhutan","a2":"BT","a3":"BTN","num":64,"phone":"975","capital":"Thimphu"},{"name":"Bolivia","a2":"BO","a3":"BOL","num":68,"phone":"591","capital":"La Paz"},{"name":"Bonaire","a2":"BQ","a3":"BES","num":535,"phone":"599"},{"name":"Bosnia and Herzegovina","a2":"BA","a3":"BIH","num":70,"phone":"387","capital":"Sarajevo"},{"name":"Botswana","a2":"BW","a3":"BWA","num":72,"phone":"267","capital":"Gaborone"},{"name":"Bouvet Island","a2":"BV","a3":"BVT","num":74,"phone":"47","capital":"None"},{"name":"Brazil","a2":"BR","a3":"BRA","num":76,"phone":"55","capital":"Brasilia"},{"name":"British Indian Ocean Territory","a2":"IO","a3":"IOT","num":86,"phone":"246","capital":"None"},{"name":"Brunei Darussalam","a2":"BN","a3":"BRN","num":96,"phone":"673","capital":"Bandar Seri Begawan"},{"name":"Bulgaria","a2":"BG","a3":"BGR","num":100,"phone":"359","capital":"Sofia"},{"name":"Burkina Faso","a2":"BF","a3":"BFA","num":854,"phone":"226","capital":"Ouagadougou"},{"name":"Burundi","a2":"BI","a3":"BDI","num":108,"phone":"257","capital":"Bujumbura"},{"name":"Cambodia","a2":"KH","a3":"KHM","num":116,"phone":"855","capital":"Phnom Penh"},{"name":"Cameroon","a2":"CM","a3":"CMR","num":120,"phone":"237","capital":"Yaounde"},{"name":"Canada","a2":"CA","a3":"CAN","num":124,"phone":"1","capital":"Toronto"},{"name":"Cape Verde","a2":"CV","a3":"CPV","num":132,"phone":"238","capital":"Praia"},{"name":"Cayman Islands","a2":"KY","a3":"CYM","num":136,"phone":"1-345","capital":"Georgetown"},{"name":"Central African Republic","a2":"CF","a3":"CAF","num":140,"phone":"236","capital":"Bangui"},{"name":"Chad","a2":"TD","a3":"TCD","num":148,"phone":"235","capital":"N'Djamena"},{"name":"Chile","a2":"CL","a3":"CHL","num":152,"phone":"56","capital":"Santiago"},{"name":"China","a2":"CN","a3":"CHN","num":156,"phone":"86","capital":"Beijing"},{"name":"Christmas Island","a2":"CX","a3":"CXR","num":162,"phone":"61","capital":"The Settlement"},{"name":"Cocos (Keeling) Islands","a2":"CC","a3":"CCK","num":166,"phone":"61","capital":"West Island"},{"name":"Colombia","a2":"CO","a3":"COL","num":170,"phone":"57","capital":"Bogota"},{"name":"Comoros","a2":"KM","a3":"COM","num":174,"phone":"269","capital":"Moroni"},{"name":"Congo","a2":"CG","a3":"COG","num":178,"phone":"242","capital":"Brazzaville"},{"name":"Democratic Republic of the Congo","a2":"CD","a3":"COD","num":180,"phone":"243","capital":"Kinshasa"},{"name":"Cook Islands","a2":"CK","a3":"COK","num":184,"phone":"682","capital":"Avarua"},{"name":"Costa Rica","a2":"CR","a3":"CRI","num":188,"phone":"506","capital":"San Jose"},{"name":"Croatia","a2":"HR","a3":"HRV","num":191,"phone":"385","capital":"Zagreb"},{"name":"Cuba","a2":"CU","a3":"CUB","num":192,"phone":"53","capital":"Havana"},{"name":"<a title="Curaçao" href="https://en.wikipedia.org/wiki/Cura%C3%A7ao">Curaçao</a>","a2":"CW","a3":"CUW","num":531,"phone":"599"},{"name":"Cyprus","a2":"CY","a3":"CYP","num":196,"phone":"357","capital":"Nicosia"},{"name":"Czech Republic","a2":"CZ","a3":"CZE","num":203,"phone":"420","capital":"Prague"},{"name":"C??te d'Ivoire","a2":"CI","a3":"CIV","num":384,"phone":"225","capital":"Abidjan"},{"name":"Denmark","a2":"DK","a3":"DNK","num":208,"phone":"45","capital":"Copenhagen"},{"name":"Djibouti","a2":"DJ","a3":"DJI","num":262,"phone":"253","capital":"Djibouti"},{"name":"Dominica","a2":"DM","a3":"DMA","num":212,"phone":"1-767","capital":"Roseau"},{"name":"Dominican Republic","a2":"DO","a3":"DOM","num":214,"phone":"1-809,1-829,1-849","capital":"Santo Domingo"},{"name":"Ecuador","a2":"EC","a3":"ECU","num":218,"phone":"593","capital":"Quito"},{"name":"Egypt","a2":"EG","a3":"EGY","num":818,"phone":"20","capital":"Cairo"},{"name":"El Salvador","a2":"SV","a3":"SLV","num":222,"phone":"503","capital":"San Salvador"},{"name":"Equatorial Guinea","a2":"GQ","a3":"GNQ","num":226,"phone":"240","capital":"Malabo"},{"name":"Eritrea","a2":"ER","a3":"ERI","num":232,"phone":"291","capital":"Asmara"},{"name":"Estonia","a2":"EE","a3":"EST","num":233,"phone":"372","capital":"Tallinn"},{"name":"Ethiopia","a2":"ET","a3":"ETH","num":231,"phone":"251","capital":"Addis Ababa"},{"name":"Falkland Islands (Malvinas)","a2":"FK","a3":"FLK","num":238,"phone":"500","capital":"Stanley"},{"name":"Faroe Islands","a2":"FO","a3":"FRO","num":234,"phone":"298","capital":"Torshavn"},{"name":"Fiji","a2":"FJ","a3":"FJI","num":242,"phone":"679","capital":"Suva"},{"name":"Finland","a2":"FI","a3":"FIN","num":246,"phone":"358","capital":"Helsinki"},{"name":"France","a2":"FR","a3":"FRA","num":250,"phone":"33","capital":"Paris"},{"name":"French Guiana","a2":"GF","a3":"GUF","num":254,"phone":"594","capital":"Cayenne"},{"name":"French Polynesia","a2":"PF","a3":"PYF","num":258,"phone":"689","capital":"Papeete"},{"name":"French Southern Territories","a2":"TF","a3":"ATF","num":260,"phone":"262","capital":"None"},{"name":"Gabon","a2":"GA","a3":"GAB","num":266,"phone":"241","capital":"Libreville"},{"name":"Gambia","a2":"GM","a3":"GMB","num":270,"phone":"220","capital":"Banjul"},{"name":"Georgia","a2":"GE","a3":"GEO","num":268,"phone":"995","capital":"Tbilisi"},{"name":"Germany","a2":"DE","a3":"DEU","num":276,"phone":"49","capital":"Berlin"},{"name":"Ghana","a2":"GH","a3":"GHA","num":288,"phone":"233","capital":"Accra"},{"name":"Gibraltar","a2":"GI","a3":"GIB","num":292,"phone":"350","capital":"Gibraltar"},{"name":"Greece","a2":"GR","a3":"GRC","num":300,"phone":"30","capital":"Athens"},{"name":"Greenland","a2":"GL","a3":"GRL","num":304,"phone":"299","capital":"Godthab"},{"name":"Grenada","a2":"GD","a3":"GRD","num":308,"phone":"1-473","capital":"St. George's"},{"name":"Guadeloupe","a2":"GP","a3":"GLP","num":312,"phone":"590","capital":"Basse-Terre"},{"name":"Guam","a2":"GU","a3":"GUM","num":316,"phone":"1-671","capital":"Agana"},{"name":"Guatemala","a2":"GT","a3":"GTM","num":320,"phone":"502","capital":"Guatemala City"},{"name":"Guernsey","a2":"GG","a3":"GGY","num":831,"phone":"44","capital":"St. Peter Port"},{"name":"Guinea","a2":"GN","a3":"GIN","num":324,"phone":"224","capital":"Conakry"},{"name":"Guinea-Bissau","a2":"GW","a3":"GNB","num":624,"phone":"245","capital":"Bissau"},{"name":"Guyana","a2":"GY","a3":"GUY","num":328,"phone":"592","capital":"Georgetown"},{"name":"Haiti","a2":"HT","a3":"HTI","num":332,"phone":"509","capital":"Port-au-Prince"},{"name":"Heard Island and McDonald Mcdonald Islands","a2":"HM","a3":"HMD","num":334,"phone":"672","capital":"None"},{"name":"Holy See (Vatican City State)","a2":"VA","a3":"VAT","num":336,"phone":"379","capital":"Vatican City"},{"name":"Honduras","a2":"HN","a3":"HND","num":340,"phone":"504","capital":"Tegucigalpa"},{"name":"Hong Kong","a2":"HK","a3":"HKG","num":344,"phone":"852","capital":"Hong Kong"},{"name":"Hungary","a2":"HU","a3":"HUN","num":348,"phone":"36","capital":"Budapest"},{"name":"Iceland","a2":"IS","a3":"ISL","num":352,"phone":"354","capital":"Reykjavik"},{"name":"India","a2":"IN","a3":"IND","num":356,"phone":"91","capital":"New Delhi"},{"name":"Indonesia","a2":"ID","a3":"IDN","num":360,"phone":"62","capital":"Jakarta"},{"name":"Iran, Islamic Republic of","a2":"IR","a3":"IRN","num":364,"phone":"98","capital":"Tehran"},{"name":"Iraq","a2":"IQ","a3":"IRQ","num":368,"phone":"964","capital":"Baghdad"},{"name":"Ireland","a2":"IE","a3":"IRL","num":372,"phone":"353","capital":"Dublin"},{"name":"Isle of Man","a2":"IM","a3":"IMN","num":833,"phone":"44","capital":"Douglas"},{"name":"Israel","a2":"IL","a3":"ISR","num":376,"phone":"972","capital":"Jerusalem"},{"name":"Italy","a2":"IT","a3":"ITA","num":380,"phone":"39","capital":"Rome"},{"name":"Jamaica","a2":"JM","a3":"JAM","num":388,"phone":"1-876","capital":"Kingston"},{"name":"Japan","a2":"JP","a3":"JPN","num":392,"phone":"81","capital":"Tokyo"},{"name":"Jersey","a2":"JE","a3":"JEY","num":832,"phone":"44","capital":"Saint Helier"},{"name":"Jordan","a2":"JO","a3":"JOR","num":400,"phone":"962","capital":"Amman"},{"name":"Kazakhstan","a2":"KZ","a3":"KAZ","num":398,"phone":"7","capital":"Astana"},{"name":"Kenya","a2":"KE","a3":"KEN","num":404,"phone":"254","capital":"Nairobi"},{"name":"Kiribati","a2":"KI","a3":"KIR","num":296,"phone":"686","capital":"Tarawa"},{"name":"Korea, Democratic People's Republic of","a2":"KP","a3":"PRK","num":408,"phone":"850","capital":"Pyongyang"},{"name":"Korea","a2":"KR","a3":"KOR","num":410,"phone":"82","capital":"Seoul"},{"name":"Kuwait","a2":"KW","a3":"KWT","num":414,"phone":"965","capital":"Kuwait City"},{"name":"Kyrgyzstan","a2":"KG","a3":"KGZ","num":417,"phone":"996","capital":"Bishkek"},{"name":"Lao People's Democratic Republic","a2":"LA","a3":"LAO","num":418,"phone":"856","capital":"Vientiane"},{"name":"Latvia","a2":"LV","a3":"LVA","num":428,"phone":"371","capital":"Riga"},{"name":"Lebanon","a2":"LB","a3":"LBN","num":422,"phone":"961","capital":"Beirut"},{"name":"Lesotho","a2":"LS","a3":"LSO","num":426,"phone":"266","capital":"Maseru"},{"name":"Liberia","a2":"LR","a3":"LBR","num":430,"phone":"231","capital":"Monrovia"},{"name":"Libya","a2":"LY","a3":"LBY","num":434,"phone":"218","capital":"Tripoli"},{"name":"Liechtenstein","a2":"LI","a3":"LIE","num":438,"phone":"423","capital":"Vaduz"},{"name":"Lithuania","a2":"LT","a3":"LTU","num":440,"phone":"370","capital":"Vilnius"},{"name":"Luxembourg","a2":"LU","a3":"LUX","num":442,"phone":"352","capital":"Luxembourg"},{"name":"Macao","a2":"MO","a3":"MAC","num":446,"phone":"853","capital":"Macau"},{"name":"Macedonia, the Former Yugoslav Republic of","a2":"MK","a3":"MKD","num":807,"phone":"389","capital":"Skopje"},{"name":"Madagascar","a2":"MG","a3":"MDG","num":450,"phone":"261","capital":"Antananarivo"},{"name":"Malawi","a2":"MW","a3":"MWI","num":454,"phone":"265","capital":"Lilongwe"},{"name":"Malaysia","a2":"MY","a3":"MYS","num":458,"phone":"60","capital":"Kuala Lumpur"},{"name":"Maldives","a2":"MV","a3":"MDV","num":462,"phone":"960","capital":"Male"},{"name":"Mali","a2":"ML","a3":"MLI","num":466,"phone":"223","capital":"Bamako"},{"name":"Malta","a2":"MT","a3":"MLT","num":470,"phone":"356","capital":"Valletta"},{"name":"Marshall Islands","a2":"MH","a3":"MHL","num":584,"phone":"692","capital":"Majuro"},{"name":"Martinique","a2":"MQ","a3":"MTQ","num":474,"phone":"596","capital":"Fort-de-France"},{"name":"Mauritania","a2":"MR","a3":"MRT","num":478,"phone":"222","capital":"Nouakchott"},{"name":"Mauritius","a2":"MU","a3":"MUS","num":480,"phone":"230","capital":"Port Louis"},{"name":"Mayotte","a2":"YT","a3":"MYT","num":175,"phone":"262","capital":"Dzaoudzi"},{"name":"Mexico","a2":"MX","a3":"MEX","num":484,"phone":"52","capital":"Mexico City"},{"name":"Micronesia, Federated States of","a2":"FM","a3":"FSM","num":583,"phone":"691","capital":"Palikir"},{"name":"Moldova, Republic of","a2":"MD","a3":"MDA","num":498,"phone":"373","capital":"Kishinev"},{"name":"Monaco","a2":"MC","a3":"MCO","num":492,"phone":"377","capital":"Monaco"},{"name":"Mongolia","a2":"MN","a3":"MNG","num":496,"phone":"976","capital":"Ulan Bator"},{"name":"Montenegro","a2":"ME","a3":"MNE","num":499,"phone":"382","capital":"Podgorica"},{"name":"Montserrat","a2":"MS","a3":"MSR","num":500,"phone":"1-664","capital":"Plymouth"},{"name":"Morocco","a2":"MA","a3":"MAR","num":504,"phone":"212","capital":"Rabat"},{"name":"Mozambique","a2":"MZ","a3":"MOZ","num":508,"phone":"258","capital":"Maputo"},{"name":"Myanmar","a2":"MM","a3":"MMR","num":104,"phone":"95","capital":"Naypyidaw"},{"name":"Namibia","a2":"NA","a3":"NAM","num":516,"phone":"264","capital":"Windhoek"},{"name":"Nauru","a2":"NR","a3":"NRU","num":520,"phone":"674","capital":"Yaren"},{"name":"Nepal","a2":"NP","a3":"NPL","num":524,"phone":"977","capital":"Kathmandu"},{"name":"Netherlands","a2":"NL","a3":"NLD","num":528,"phone":"31","capital":"Amsterdam"},{"name":"New Caledonia","a2":"NC","a3":"NCL","num":540,"phone":"687","capital":"Noumea"},{"name":"New Zealand","a2":"NZ","a3":"NZL","num":554,"phone":"64","capital":"Wellington"},{"name":"Nicaragua","a2":"NI","a3":"NIC","num":558,"phone":"505","capital":"Managua"},{"name":"Niger","a2":"NE","a3":"NER","num":562,"phone":"227","capital":"Niamey"},{"name":"Nigeria","a2":"NG","a3":"NGA","num":566,"phone":"234","capital":"Lagos"},{"name":"Niue","a2":"NU","a3":"NIU","num":570,"phone":"683","capital":"Alofi"},{"name":"Norfolk Island","a2":"NF","a3":"NFK","num":574,"phone":"672","capital":"Kingston"},{"name":"Northern Mariana Islands","a2":"MP","a3":"MNP","num":580,"phone":"1-670","capital":"Saipan"},{"name":"Norway","a2":"NO","a3":"NOR","num":578,"phone":"47","capital":"Oslo"},{"name":"Oman","a2":"OM","a3":"OMN","num":512,"phone":"968","capital":"Muscat"},{"name":"Pakistan","a2":"PK","a3":"PAK","num":586,"phone":"92","capital":"Islamabad"},{"name":"Palau","a2":"PW","a3":"PLW","num":585,"phone":"680","capital":"Koror"},{"name":"Palestine, State of","a2":"PS","a3":"PSE","num":275,"phone":"970"},{"name":"Panama","a2":"PA","a3":"PAN","num":591,"phone":"507","capital":"Panama City"},{"name":"Papua New Guinea","a2":"PG","a3":"PNG","num":598,"phone":"675","capital":"Port Moresby"},{"name":"Paraguay","a2":"PY","a3":"PRY","num":600,"phone":"595","capital":"Asuncion"},{"name":"Peru","a2":"PE","a3":"PER","num":604,"phone":"51","capital":"Lima"},{"name":"Philippines","a2":"PH","a3":"PHL","num":608,"phone":"63","capital":"Manila"},{"name":"Pitcairn","a2":"PN","a3":"PCN","num":612,"phone":"870","capital":"Adamstown"},{"name":"Poland","a2":"PL","a3":"POL","num":616,"phone":"48","capital":"Warsaw"},{"name":"Portugal","a2":"PT","a3":"PRT","num":620,"phone":"351","capital":"Lisbon"},{"name":"Puerto Rico","a2":"PR","a3":"PRI","num":630,"phone":"1","capital":"San Juan"},{"name":"Qatar","a2":"QA","a3":"QAT","num":634,"phone":"974","capital":"Doha"},{"name":"Romania","a2":"RO","a3":"ROU","num":642,"phone":"40","capital":"Bucharest"},{"name":"Russian Federation","a2":"RU","a3":"RUS","num":643,"phone":"7","capital":"Moscow"},{"name":"Rwanda","a2":"RW","a3":"RWA","num":646,"phone":"250","capital":"Kigali"},{"name":"Reunion","a2":"RE","a3":"REU","num":638,"phone":"262","capital":"Saint-Denis"},{"name":"Saint Barthalemy","a2":"BL","a3":"BLM","num":652,"phone":"590"},{"name":"Saint Helena","a2":"SH","a3":"SHN","num":654,"phone":"290 n","capital":"Jamestown"},{"name":"Saint Kitts and Nevis","a2":"KN","a3":"KNA","num":659,"phone":"1-869","capital":"Basseterre"},{"name":"Saint Lucia","a2":"LC","a3":"LCA","num":662,"phone":"1-758","capital":"Castries"},{"name":"Saint Martin (French part)","a2":"MF","a3":"MAF","num":663,"phone":"590"},{"name":"Saint Pierre and Miquelon","a2":"PM","a3":"SPM","num":666,"phone":"508","capital":"St. Pierre"},{"name":"Saint Vincent and the Grenadines","a2":"VC","a3":"VCT","num":670,"phone":"1-784","capital":"Kingstown"},{"name":"Samoa","a2":"WS","a3":"WSM","num":882,"phone":"685","capital":"Apia"},{"name":"San Marino","a2":"SM","a3":"SMR","num":674,"phone":"378","capital":"San Marino"},{"name":"Sao Tome and Principe","a2":"ST","a3":"STP","num":678,"phone":"239","capital":"Sao Tome"},{"name":"Saudi Arabia","a2":"SA","a3":"SAU","num":682,"phone":"966","capital":"Riyadh"},{"name":"Senegal","a2":"SN","a3":"SEN","num":686,"phone":"221","capital":"Dakar"},{"name":"Serbia","a2":"RS","a3":"SRB","num":688,"phone":"381 p","capital":"Belgrade"},{"name":"Seychelles","a2":"SC","a3":"SYC","num":690,"phone":"248","capital":"Victoria"},{"name":"Sierra Leone","a2":"SL","a3":"SLE","num":694,"phone":"232","capital":"Freetown"},{"name":"Singapore","a2":"SG","a3":"SGP","num":702,"phone":"65","capital":"Singapore"},{"name":"Sint Maarten (Dutch part)","a2":"SX","a3":"SXM","num":534,"phone":"1-721"},{"name":"Slovakia","a2":"SK","a3":"SVK","num":703,"phone":"421","capital":"Bratislava"},{"name":"Slovenia","a2":"SI","a3":"SVN","num":705,"phone":"386","capital":"Ljubljana"},{"name":"Solomon Islands","a2":"SB","a3":"SLB","num":90,"phone":"677","capital":"Honiara"},{"name":"Somalia","a2":"SO","a3":"SOM","num":706,"phone":"252","capital":"Mogadishu"},{"name":"South Africa","a2":"ZA","a3":"ZAF","num":710,"phone":"27","capital":"Johannesburg"},{"name":"South Georgia and the South Sandwich Islands","a2":"GS","a3":"SGS","num":239,"phone":"500","capital":"None"},{"name":"South Sudan","a2":"SS","a3":"SSD","num":728,"phone":"211","capital":"Ramciel"},{"name":"Spain","a2":"ES","a3":"ESP","num":724,"phone":"34","capital":"Madrid"},{"name":"Sri Lanka","a2":"LK","a3":"LKA","num":144,"phone":"94","capital":"Colombo"},{"name":"Sudan","a2":"SD","a3":"SDN","num":729,"phone":"249","capital":"Khartoum"},{"name":"Suriname","a2":"SR","a3":"SUR","num":740,"phone":"597","capital":"Paramaribo"},{"name":"Svalbard and Jan Mayen","a2":"SJ","a3":"SJM","num":744,"phone":"47","capital":"Longyearbyen"},{"name":"Swaziland","a2":"SZ","a3":"SWZ","num":748,"phone":"268","capital":"Mbabane"},{"name":"Sweden","a2":"SE","a3":"SWE","num":752,"phone":"46","capital":"Stockholm"},{"name":"Switzerland","a2":"CH","a3":"CHE","num":756,"phone":"41","capital":"Bern"},{"name":"Syrian Arab Republic","a2":"SY","a3":"SYR","num":760,"phone":"963","capital":"Damascus"},{"name":"Taiwan","a2":"TW","a3":"TWN","num":158,"phone":"886","capital":"Taipei"},{"name":"Tajikistan","a2":"TJ","a3":"TJK","num":762,"phone":"992","capital":"Dushanbe"},{"name":"United Republic of Tanzania","a2":"TZ","a3":"TZA","num":834,"phone":"255","capital":"Dodoma"},{"name":"Thailand","a2":"TH","a3":"THA","num":764,"phone":"66","capital":"Bangkok"},{"name":"Timor-Leste","a2":"TL","a3":"TLS","num":626,"phone":"670"},{"name":"Togo","a2":"TG","a3":"TGO","num":768,"phone":"228","capital":"Lome"},{"name":"Tokelau","a2":"TK","a3":"TKL","num":772,"phone":"690","capital":"None"},{"name":"Tonga","a2":"TO","a3":"TON","num":776,"phone":"676","capital":"Nuku'alofa"},{"name":"Trinidad and Tobago","a2":"TT","a3":"TTO","num":780,"phone":"1-868","capital":"Port of Spain"},{"name":"Tunisia","a2":"TN","a3":"TUN","num":788,"phone":"216","capital":"Tunis"},{"name":"Turkey","a2":"TR","a3":"TUR","num":792,"phone":"90","capital":"Ankara"},{"name":"Turkmenistan","a2":"TM","a3":"TKM","num":795,"phone":"993","capital":"Ashgabat"},{"name":"Turks and Caicos Islands","a2":"TC","a3":"TCA","num":796,"phone":"1-649","capital":"Grand Turk"},{"name":"Tuvalu","a2":"TV","a3":"TUV","num":798,"phone":"688","capital":"Funafuti"},{"name":"Uganda","a2":"UG","a3":"UGA","num":800,"phone":"256","capital":"Kampala"},{"name":"Ukraine","a2":"UA","a3":"UKR","num":804,"phone":"380","capital":"Kiev"},{"name":"United Arab Emirates","a2":"AE","a3":"ARE","num":784,"phone":"971","capital":"Abu Dhabi"},{"name":"United Kingdom","a2":"GB","a3":"GBR","num":826,"phone":"44","capital":"London"},{"name":"United States","a2":"US","a3":"USA","num":840,"phone":"1","capital":"Washington, D.C."},{"name":"United States Minor Outlying Islands","a2":"UM","a3":"UMI","num":581,"phone":"?","capital":"None"},{"name":"Uruguay","a2":"UY","a3":"URY","num":858,"phone":"598","capital":"Montevideo"},{"name":"Uzbekistan","a2":"UZ","a3":"UZB","num":860,"phone":"998","capital":"Tashkent"},{"name":"Vanuatu","a2":"VU","a3":"VUT","num":548,"phone":"678","capital":"Port Vila"},{"name":"Venezuela","a2":"VE","a3":"VEN","num":862,"phone":"58","capital":"Caracas"},{"name":"Viet Nam","a2":"VN","a3":"VNM","num":704,"phone":"84","capital":"Hanoi"},{"name":"British Virgin Islands","a2":"VG","a3":"VGB","num":92,"phone":"1-284","capital":"Road Town"},{"name":"US Virgin Islands","a2":"VI","a3":"VIR","num":850,"phone":"1-340","capital":"Charlotte Amalie"},{"name":"Wallis and Futuna","a2":"WF","a3":"WLF","num":876,"phone":"681","capital":"Mata-Utu"},{"name":"Western Sahara","a2":"EH","a3":"ESH","num":732,"phone":"212","capital":"El Aaiun"},{"name":"Yemen","a2":"YE","a3":"YEM","num":887,"phone":"967","capital":"San'a"},{"name":"Zambia","a2":"ZM","a3":"ZMB","num":894,"phone":"260","capital":"Lusaka"},{"name":"Zimbabwe","a2":"ZW","a3":"ZWE","num":716,"phone":"263","capital":"Harare"},{"name":"Aland Islands","a2":"AX","a3":"ALA","num":248,"phone":"358"}];
    $.fn.extend({
        addCity: function (data, num) {
            var thiz = this;
            var _data = $.extend(true, {}, data);
            $.each(_data, function (j, m) {
                $.each(m, function (k, n) {
                    switch (num){
                        case 2:
                            var a2 = n.a2;
                            $.each(countries, function (i, city) {
                                if (city.a2 === a2) {
                                    _data[j][k]['capital'] = city && city.capital ? city.capital : 'unknown';
                                    return false;
                                }
                            });
                            break;
                        case 3:
                            var a3 = thiz.a2ToA3(n.a2);
                            $.each(countries, function (i, city) {
                                if (city.a3 === a3) {
                                    _data[j][k]['capital'] = city && city.capital ? city.capital : 'unknown';
                                    return false;
                                }
                            });
                            break;
                    }
                });
            });
            return _data;
        },
        a2ToName: function (code) {
            var name = '';
            $.grep(countries, function (country) {
                if (country.a2 === code) {
                    name = country.name;
                    return false;
                }
            });
            return name;
        },
        a3ToName: function (code) {
            var name = '';
            $.grep(countries, function (country) {
                if (country.a3 === code) {
                    name = country.name;
                    return false;
                }
            });
            return name;
        },
        nameToCode: function (name, num) {
            var code = '';
            $.grep(countries, function (country) {
                if (country.name === name) {
                    switch (num) {
                        case 2:
                            code = country.a2;
                            break;
                        case 3:
                            code = country.a3;
                            break;
                        default :
                            code = country.a3;
                            break;
                    }
                    return false;
                }
            });
            return code;
        },

        a2ToA3: function(a2){
            var code = '';

            $.grep(countries, function (country) {
                if (country.a2 === a2) {
                    code = country.a3;
                    return false;
                }
            });
            return code;
        },

        a3ToA2: function(a3){
            var code = '';
            $.grep(countries, function (country) {
                if (country.a3 === a3) {
                    code = country.a2;
                    return false;
                }
            });
            return code;
        }
    });
})(jQuery);</pre>

<!--more-->

OK，now let&#8217;s start make a wordmap with d3 and tools.

worldmap-test.html

<pre class="lang:xhtml decode:true ">&lt;!DOCTYPE html&gt;
&lt;html lang="en-us"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"/&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=Edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;world map test&lt;/title&gt;
    &lt;link rel="shortcut icon" link="img/favicon.ico"/&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;main class="container-fluid"&gt;
    &lt;div class="worldmap" id="worldmap"&gt;&lt;/div&gt;
&lt;/main&gt;
&lt;!-- Javascript start --&gt;
&lt;script src="../libs/jquery/dist/jquery.js"&gt;&lt;/script&gt;
&lt;script src="../libs/d3/d3.js"&gt;&lt;/script&gt;
&lt;script src="../libs/topojson/topojson.js"&gt;&lt;/script&gt;
&lt;script src="../js/app/country-code-capital.js"&gt;&lt;/script&gt;
&lt;script src="demojs/worldmap-test.js"&gt;&lt;/script&gt;

&lt;!-- Javascript end --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

worldmap-test.js

<pre class="">$(function(){

    var width = 1560, height = 1160;
    var boundaryColor = '#eee', highBoundaryColor = '#fff';
    var svg = d3.select('#worldmap').append('svg')
        .attr('width', width)
        .attr('height', height);

    var gMap = svg.append('g').attr('class', 'map');
    var scale = 210;

    var projection = d3.geo.equirectangular()
        .scale(scale)
        .translate([width / 2, height / 2])
        .precision(.1)
        .center([0, 0])
        .rotate([10, 0]);

    d3.json('../../static/data/worldmap.json', function(error, map){
        if (error) throw new Error('worldmap.json is bad.');
        var path = d3.geo.path()
            .projection(projection);

        //generate boundary between counries
        gMap.append("path")
            .datum(topojson.mesh(map, map.objects.subunits, function (a, b) {
                return a !== b;
            }))
            .attr("d", path)
            .attr("class", "subunit-boundary");

        //display countries with random colors
        var subunits = gMap.selectAll('.subunits')
            .data(topojson.feature(map, map.objects.subunits).features);

        var randomColor = (function(){
            var golden_ratio_conjugate = 0.618033988749895;
            var h = Math.random();

            var hslToRgb = function (h, s, l){
                var r, g, b;

                if(s == 0){
                    r = g = b = l; // achromatic
                }else{
                    function hue2rgb(p, q, t){
                        if(t &lt; 0) t += 1;
                        if(t &gt; 1) t -= 1;
                        if(t &lt; 1/6) return p + (q - p) * 6 * t;
                        if(t &lt; 1/2) return q;
                        if(t &lt; 2/3) return p + (q - p) * (2/3 - t) * 6;
                        return p;
                    }

                    var q = l &lt; 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1/3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1/3);
                }

                return '#'+Math.round(r * 255).toString(16)+Math.round(g * 255).toString(16)+Math.round(b * 255).toString(16);
            };

            return function(){
                h += golden_ratio_conjugate;
                h %= 1;
                return hslToRgb(h, 0.5, 0.60);
            };
        })();

        subunits.enter().append('path')
            .attr('class', function(d){
                return 'subunits ' + d.id;
            })
            .attr('d', path)
            .attr('stroke', boundaryColor)
            .attr('fill', randomColor);

        gMap.selectAll('.subunits')
            .on('mouseover', function(d){
                d3.select('.' + d.id)
                    .attr('stroke', highBoundaryColor)
                    .attr('stroke-width', 2);
            })
            .on('mouseout', function(d){
                d3.select('.' + d.id)
                    .attr('stroke', boundaryColor)
                    .attr('stroke-width', 1);
            });


        //display places
        //display point
        gMap.append('path')
            .datum(topojson.feature(map, map.objects.places))
            .attr('d', path)
            .attr('class', 'place');

        //display city's name
        var places = gMap.selectAll('.place-label')
            .data(topojson.feature(map, map.objects.places).features);

        places.enter().append('text')
            .attr('class', 'place-label')
            .attr('transform', function(d){
                return 'translate(' + projection(d.geometry.coordinates) + ')';
            })
            .attr('dy', '.35em')
            .text(function(d){
                return d.properties.name;
            });

        gMap.selectAll('.place-label')
            .attr('x', function(d){
                return d.geometry.coordinates[0] &gt; -1 ? 6 : -6;
            })
            .style('text-anchor', function(d){
                return d.geometry.coordinates[0] &gt; -1 ? 'start': 'end';
            })
    });
});</pre>

&nbsp;

preview

<img class="aligncenter size-large wp-image-103" src="http://blog.83096146.com/wp-content/uploads/2015/12/worldmap-1-1024x423.png" alt="worldmap" width="660" height="273" srcset="http://blog.83096146.com/wp-content/uploads/2015/12/worldmap-1-300x124.png 300w, http://blog.83096146.com/wp-content/uploads/2015/12/worldmap-1-768x317.png 768w, http://blog.83096146.com/wp-content/uploads/2015/12/worldmap-1-1024x423.png 1024w" sizes="(max-width: 660px) 100vw, 660px" />

&nbsp;