(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{259:function(t,e,l){var C=l(260),r=l(261);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){C(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}l(17),l(37),l(57),l(45),l(36),l(44),l(75),l(76);var c={area:{series:[{data:[10,8,9,8,11,16,4,15,18,21,18,16,19,14,13,18,10,10,10,22,19,20,18,17,19,13,18,14,15]}],chart:{height:180,type:"area",sparkline:{enabled:!0}},colors:["#382CDD"],fill:{type:["solid"],colors:["#EBEAFC"]},stroke:{curve:"straight",width:2},__variants:{"dark-bg":{colors:["#8880EB"],fill:{type:["solid"],colors:["#6056E4"]}}}},"area-small":{series:[{data:[140,110,120,140,110,130,100,120,150,120]}],chart:{height:100,type:"area",sparkline:{enabled:!0}},colors:["#382CDD"],fill:{type:["solid"],colors:["#EBEAFC"]},stroke:{width:2},__variants:{indigo:{colors:["#382CDD"],fill:{type:["solid"],colors:["#D7D5F8"]}},"indigo-gradient":{colors:["#382CDD"],fill:{type:["gradient"],colors:["#8880EB","#EBEAFC"]}},blue:{colors:["#2D70F5"],fill:{type:["solid"],colors:["#D5E2FD"]}},"blue-gradient":{colors:["#2D70F5"],fill:{type:["gradient"],colors:["#81A9F9","#EAF1FE"]}},green:{colors:["#17BB84"],fill:{type:["solid"],colors:["#D1F1E6"]}},"green-gradient":{colors:["#17BB84"],fill:{type:["gradient"],colors:["#74D6B5","#E8F8F3"]}},orange:{colors:["#F67A28"],fill:{type:["solid"],colors:["#FDE4D4"]}},"orange-gradient":{colors:["#F67A28"],fill:{type:["gradient"],colors:["#FAAF7E","#FEF2EA"]}}}},"columns-stacked":{series:[{data:[20,50,18,50,30,40,30,40]},{data:[30,0,32,0,20,10,20,10]}],chart:{type:"bar",height:100,stacked:!0,sparkline:{enabled:!0}},colors:["#2D70F5","#F1F5FB"],fill:{opacity:1},plotOptions:{bar:{borderRadius:8}}},"columns-thin":{series:[{name:"Unique visitors",data:[99200,68400,72111,65020,62e3,71e3,84232]},{name:"Total visitors",data:[112001,92402,86240,97201,72102,102011,98212]}],chart:{type:"bar",height:300,toolbar:{show:!1}},stroke:{colors:["transparent"],width:4},colors:["#8128DE","#382CDD"],dataLabels:{enabled:!1},legend:{show:!1},plotOptions:{bar:{borderRadius:3,columnWidth:12}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},__variants:{orange:{colors:["#F67A28","#E85444"]}}},columns:{series:[{data:[300,400,200,350,500,400,300,200,100,400,500,300,400,200,100,300,400,200,350,500,400,300,200,100,400,500,300,400,200,100,250]}],chart:{height:200,type:"bar",toolbar:{show:!1}},grid:{show:!0},dataLabels:{enabled:!1},colors:["#382CDD"],xaxis:{type:"integer",categories:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],labels:{show:!0,hideOverlappingLabels:!1,showDuplicates:!0,trim:!1}},yaxis:{opposite:!0,labels:{show:!0,align:"right"}},plotOptions:{bar:{borderRadius:10}}},"radial-bar-part":{series:[24],chart:{type:"radialBar",offsetY:-20,sparkline:{enabled:!0}},colors:["#382CDD"],stroke:{lineCap:"round"},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{margin:15,size:"65%"},track:{background:"#EBEAFC",strokeWidth:"97%",margin:5},dataLabels:{name:{show:!1},value:{show:!1}}}}},"radial-bar":{series:[54],chart:{type:"radialBar",sparkline:{enabled:!0}},colors:["#382CDD"],stroke:{lineCap:"round"},plotOptions:{radialBar:{startAngle:-120,endAngle:240,hollow:{margin:15,size:"65%"},track:{background:"#EBEAFC",strokeWidth:"97%",margin:5},dataLabels:{total:{show:!0,label:"$16,250",fontSize:24,formatter:function(){return"Total Payments"}}}}},__variants:{orange:{colors:["#F67A28"],plotOptions:{radialBar:{startAngle:-120,endAngle:240,hollow:{margin:15,size:"65%"},track:{background:"#EBEAFC",strokeWidth:"97%",margin:5},dataLabels:{total:{show:!0,label:"$16,250",fontSize:24,formatter:function(){return"Total inventory"}}}}}}}},donut:{series:[65450,26950,5350],chart:{type:"donut",width:"100%",height:240},dataLabels:{enabled:!1},legend:{show:!1},colors:["#2D70F5","#382CDD","#F67A28"],stroke:{lineCap:"round"},plotOptions:{pie:{donut:{size:"85%",labels:{show:!0,total:{label:"Total customers",showAlways:!0,show:!0}}}},stroke:{colors:void 0}}}},d=[];"function"==typeof ApexCharts&&document.querySelectorAll(".chart").forEach((function(t){if(!d.includes(t)){var e=t.getAttribute("data-type"),l=t.getAttribute("data-variant");if("object"===r(c[e])){var C=c[e];"object"===r(C.__variants)&&"object"===r(C.__variants[l])&&(C=n(n({},C),C.__variants[l])),new ApexCharts(t,C).render(),d.push(t)}}}))},260:function(t,e){t.exports=function(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t},t.exports.__esModule=!0,t.exports.default=t.exports},261:function(t,e){function l(e){return t.exports=l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,l(e)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},278:function(t,e,l){"use strict";l.r(e);l(259);var C={name:"index",data:function(){return{}}},r=l(25),component=Object(r.a)(C,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"mx-auto lg:ml-80"},[l("section",{staticClass:"py-8"},[l("div",{staticClass:"container px-4 mx-auto"},[l("div",{staticClass:"flex flex-wrap -m-4"},[l("div",{staticClass:"w-full md:w-1/2 lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 rounded bg-gray-100"},[l("div",{staticClass:"flex mb-2"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"18",viewbox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M9.00013 0.666656C7.90578 0.666656 6.82215 0.882205 5.8111 1.30099C4.80006 1.71978 3.8814 2.33361 3.10758 3.10743C1.54477 4.67024 0.666799 6.78985 0.666799 8.99999C0.659514 10.9243 1.32579 12.7904 2.55013 14.275L0.883466 15.9417C0.767834 16.0588 0.689504 16.2077 0.658359 16.3693C0.627214 16.531 0.64465 16.6982 0.708466 16.85C0.777681 16.9999 0.889886 17.1259 1.03084 17.212C1.17179 17.298 1.33513 17.3403 1.50013 17.3333H9.00013C11.2103 17.3333 13.3299 16.4553 14.8927 14.8925C16.4555 13.3297 17.3335 11.2101 17.3335 8.99999C17.3335 6.78985 16.4555 4.67024 14.8927 3.10743C13.3299 1.54463 11.2103 0.666656 9.00013 0.666656ZM9.00013 15.6667H3.50847L4.28347 14.8917C4.43868 14.7355 4.52579 14.5243 4.52579 14.3042C4.52579 14.084 4.43868 13.8728 4.28347 13.7167C3.19229 12.6267 2.51278 11.1921 2.36071 9.65732C2.20864 8.12253 2.59342 6.58249 3.44949 5.29959C4.30556 4.01669 5.57996 3.07029 7.05556 2.62163C8.53117 2.17298 10.1167 2.24983 11.542 2.83908C12.9673 3.42834 14.1442 4.49355 14.8722 5.85323C15.6002 7.21291 15.8342 8.78294 15.5344 10.2958C15.2346 11.8087 14.4196 13.1709 13.2281 14.1502C12.0366 15.1295 10.5424 15.6654 9.00013 15.6667ZM13.1668 8.16666H4.83347C4.61245 8.16666 4.40049 8.25445 4.24421 8.41073C4.08793 8.56701 4.00013 8.77898 4.00013 8.99999C4.00013 9.221 4.08793 9.43296 4.24421 9.58924C4.40049 9.74553 4.61245 9.83332 4.83347 9.83332H13.1668C13.3878 9.83332 13.5998 9.74553 13.7561 9.58924C13.9123 9.43296 14.0001 9.221 14.0001 8.99999C14.0001 8.77898 13.9123 8.56701 13.7561 8.41073C13.5998 8.25445 13.3878 8.16666 13.1668 8.16666ZM11.5001 11.5H6.50013C6.27912 11.5 6.06716 11.5878 5.91088 11.7441C5.7546 11.9003 5.6668 12.1123 5.6668 12.3333C5.6668 12.5543 5.7546 12.7663 5.91088 12.9226C6.06716 13.0789 6.27912 13.1667 6.50013 13.1667H11.5001C11.7211 13.1667 11.9331 13.0789 12.0894 12.9226C12.2457 12.7663 12.3335 12.5543 12.3335 12.3333C12.3335 12.1123 12.2457 11.9003 12.0894 11.7441C11.9331 11.5878 11.7211 11.5 11.5001 11.5ZM6.50013 6.49999H11.5001C11.7211 6.49999 11.9331 6.41219 12.0894 6.25591C12.2457 6.09963 12.3335 5.88767 12.3335 5.66666C12.3335 5.44564 12.2457 5.23368 12.0894 5.0774C11.9331 4.92112 11.7211 4.83332 11.5001 4.83332H6.50013C6.27912 4.83332 6.06716 4.92112 5.91088 5.0774C5.7546 5.23368 5.6668 5.44564 5.6668 5.66666C5.6668 5.88767 5.7546 6.09963 5.91088 6.25591C6.06716 6.41219 6.27912 6.49999 6.50013 6.49999Z",fill:"#382CDD"}})])]),t._v(" "),l("h3",{staticClass:"text-sm text-gray-600"},[t._v("Responses")]),t._v(" "),l("span",{staticClass:"inline-block ml-auto px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded-full"},[t._v("30 Days")])]),t._v(" "),l("h2",{staticClass:"mb-2 text-3xl font-bold"},[t._v("1 450")]),t._v(" "),l("span",{staticClass:"text-xs text-red-500"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"10",viewbox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M16.5 4.16667C16.3906 4.16661 16.2822 4.18812 16.181 4.22998C16.0799 4.27183 15.988 4.33322 15.9106 4.41061C15.8332 4.488 15.7719 4.57989 15.73 4.68103C15.6881 4.78216 15.6666 4.89055 15.6667 5V7.15495L10.4225 1.91084C10.3452 1.83344 10.2533 1.77204 10.1522 1.73015C10.0511 1.68825 9.94277 1.66669 9.83333 1.66669C9.7239 1.66669 9.61554 1.68825 9.51445 1.73015C9.41335 1.77204 9.3215 1.83344 9.24414 1.91084L6.50002 4.65495L2.08919 0.244171C1.93245 0.0902454 1.72127 0.00444584 1.50159 0.00544068C1.28191 0.00643553 1.07151 0.094144 0.91617 0.249483C0.760831 0.404822 0.673123 0.61522 0.672128 0.8349C0.671133 1.05458 0.756932 1.26576 0.910858 1.4225L5.91086 6.4225C5.98822 6.4999 6.08007 6.5613 6.18116 6.60319C6.28226 6.64508 6.39062 6.66665 6.50005 6.66665C6.60948 6.66665 6.71784 6.64508 6.81893 6.60319C6.92003 6.5613 7.01188 6.4999 7.08924 6.4225L9.83336 3.67839L14.4883 8.33334H12.3334C12.1123 8.33334 11.9004 8.42113 11.7441 8.57741C11.5878 8.7337 11.5 8.94566 11.5 9.16667C11.5 9.38768 11.5878 9.59965 11.7441 9.75593C11.9004 9.91221 12.1123 10 12.3334 10H16.5C16.6095 10.0001 16.7179 9.97855 16.819 9.9367C16.9201 9.89484 17.012 9.83346 17.0894 9.75607C17.1668 9.67867 17.2282 9.58678 17.2701 9.48565C17.3119 9.38452 17.3334 9.27612 17.3334 9.16667V5C17.3334 4.89055 17.3119 4.78216 17.2701 4.68103C17.2282 4.57989 17.1668 4.488 17.0894 4.41061C17.012 4.33322 16.9201 4.27183 16.819 4.22998C16.7179 4.18812 16.6095 4.16661 16.5 4.16667Z",fill:"#E85444"}})])]),t._v(" "),l("span",[t._v("25% less")])])])]),t._v(" "),l("div",{staticClass:"w-full md:w-1/2 lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 rounded bg-gray-100"},[l("div",{staticClass:"flex mb-2"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"16",viewbox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M14.8334 3.41668H12.3334V2.58334C12.3334 1.9203 12.07 1.28442 11.6012 0.815577C11.1323 0.346736 10.4965 0.0833435 9.83342 0.0833435H8.16675C7.50371 0.0833435 6.86782 0.346736 6.39898 0.815577C5.93014 1.28442 5.66675 1.9203 5.66675 2.58334V3.41668H3.16675C2.50371 3.41668 1.86782 3.68007 1.39898 4.14891C0.93014 4.61775 0.666748 5.25363 0.666748 5.91668V13.4167C0.666748 14.0797 0.93014 14.7156 1.39898 15.1844C1.86782 15.6533 2.50371 15.9167 3.16675 15.9167H14.8334C15.4965 15.9167 16.1323 15.6533 16.6012 15.1844C17.07 14.7156 17.3334 14.0797 17.3334 13.4167V5.91668C17.3334 5.25363 17.07 4.61775 16.6012 4.14891C16.1323 3.68007 15.4965 3.41668 14.8334 3.41668ZM7.33342 2.58334C7.33342 2.36233 7.42121 2.15037 7.57749 1.99409C7.73377 1.83781 7.94573 1.75001 8.16675 1.75001H9.83342C10.0544 1.75001 10.2664 1.83781 10.4227 1.99409C10.579 2.15037 10.6667 2.36233 10.6667 2.58334V3.41668H7.33342V2.58334ZM15.6667 13.4167C15.6667 13.6377 15.579 13.8497 15.4227 14.0059C15.2664 14.1622 15.0544 14.25 14.8334 14.25H3.16675C2.94573 14.25 2.73377 14.1622 2.57749 14.0059C2.42121 13.8497 2.33341 13.6377 2.33341 13.4167V8.83334C3.14628 9.15577 3.9819 9.41759 4.83342 9.61668V10.1083C4.83342 10.3294 4.92121 10.5413 5.07749 10.6976C5.23377 10.8539 5.44573 10.9417 5.66675 10.9417C5.88776 10.9417 6.09972 10.8539 6.256 10.6976C6.41228 10.5413 6.50008 10.3294 6.50008 10.1083V9.93334C7.3287 10.0462 8.16382 10.1046 9.00008 10.1083C9.83634 10.1046 10.6715 10.0462 11.5001 9.93334V10.1083C11.5001 10.3294 11.5879 10.5413 11.7442 10.6976C11.9004 10.8539 12.1124 10.9417 12.3334 10.9417C12.5544 10.9417 12.7664 10.8539 12.9227 10.6976C13.079 10.5413 13.1667 10.3294 13.1667 10.1083V9.61668C14.0183 9.41759 14.8539 9.15577 15.6667 8.83334V13.4167ZM15.6667 7.00834C14.8562 7.35042 14.0204 7.62904 13.1667 7.84168V7.58334C13.1667 7.36233 13.079 7.15037 12.9227 6.99409C12.7664 6.83781 12.5544 6.75001 12.3334 6.75001C12.1124 6.75001 11.9004 6.83781 11.7442 6.99409C11.5879 7.15037 11.5001 7.36233 11.5001 7.58334V8.20001C9.84279 8.45004 8.15737 8.45004 6.50008 8.20001V7.58334C6.50008 7.36233 6.41228 7.15037 6.256 6.99409C6.09972 6.83781 5.88776 6.75001 5.66675 6.75001C5.44573 6.75001 5.23377 6.83781 5.07749 6.99409C4.92121 7.15037 4.83342 7.36233 4.83342 7.58334V7.85834C3.97977 7.6457 3.14392 7.36709 2.33341 7.02501V5.91668C2.33341 5.69566 2.42121 5.4837 2.57749 5.32742C2.73377 5.17114 2.94573 5.08334 3.16675 5.08334H14.8334C15.0544 5.08334 15.2664 5.17114 15.4227 5.32742C15.579 5.4837 15.6667 5.69566 15.6667 5.91668V7.00834Z",fill:"#382CDD"}})])]),t._v(" "),l("h3",{staticClass:"text-sm text-gray-600"},[t._v("Projects")]),t._v(" "),l("span",{staticClass:"inline-block ml-auto px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded-full"},[t._v("30 Days")])]),t._v(" "),l("h2",{staticClass:"mb-2 text-3xl font-bold"},[t._v("54")]),t._v(" "),l("span",{staticClass:"text-xs text-green-500"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"10",viewbox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M16.5 5.83333C16.3906 5.83339 16.2822 5.81188 16.181 5.77002C16.0799 5.72817 15.988 5.66678 15.9106 5.58939C15.8332 5.512 15.7719 5.42011 15.73 5.31897C15.6881 5.21784 15.6666 5.10945 15.6667 5V2.84505L10.4225 8.08916C10.3452 8.16656 10.2533 8.22796 10.1522 8.26985C10.0511 8.31175 9.94277 8.33331 9.83333 8.33331C9.7239 8.33331 9.61554 8.31175 9.51445 8.26985C9.41335 8.22796 9.3215 8.16656 9.24414 8.08916L6.50002 5.34505L2.08919 9.75583C1.93245 9.90975 1.72127 9.99555 1.50159 9.99456C1.28191 9.99356 1.07151 9.90586 0.91617 9.75052C0.760831 9.59518 0.673123 9.38478 0.672128 9.1651C0.671133 8.94542 0.756932 8.73424 0.910858 8.5775L5.91086 3.5775C5.98822 3.5001 6.08007 3.4387 6.18116 3.39681C6.28226 3.35492 6.39062 3.33335 6.50005 3.33335C6.60948 3.33335 6.71784 3.35492 6.81893 3.39681C6.92003 3.4387 7.01188 3.5001 7.08924 3.5775L9.83336 6.32161L14.4883 1.66666H12.3334C12.1123 1.66666 11.9004 1.57887 11.7441 1.42259C11.5878 1.2663 11.5 1.05434 11.5 0.833329C11.5 0.612315 11.5878 0.400352 11.7441 0.244073C11.9004 0.0877924 12.1123 -4.76837e-06 12.3334 -4.76837e-06H16.5C16.6095 -6.67572e-05 16.7179 0.0214453 16.819 0.063302C16.9201 0.105159 17.012 0.166539 17.0894 0.243935C17.1668 0.321329 17.2282 0.413218 17.2701 0.514352C17.3119 0.615484 17.3334 0.723876 17.3334 0.833329V5C17.3334 5.10945 17.3119 5.21784 17.2701 5.31897C17.2282 5.42011 17.1668 5.512 17.0894 5.58939C17.012 5.66678 16.9201 5.72817 16.819 5.77002C16.7179 5.81188 16.6095 5.83339 16.5 5.83333Z",fill:"#17BB84"}})])]),t._v(" "),l("span",[t._v("25% more")])])])]),t._v(" "),l("div",{staticClass:"w-full md:w-1/2 lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 rounded bg-gray-100"},[l("div",{staticClass:"flex mb-2"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"14",height:"18",viewbox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M13.6666 6.44999C13.6579 6.37344 13.6411 6.29802 13.6166 6.22499V6.14999C13.5765 6.06431 13.5231 5.98554 13.4583 5.91666L8.45825 0.916656C8.38936 0.851837 8.3106 0.798391 8.22492 0.758323H8.14992C8.06526 0.709774 7.97177 0.67861 7.87492 0.666656H2.83325C2.17021 0.666656 1.53433 0.930049 1.06548 1.39889C0.596644 1.86773 0.333252 2.50362 0.333252 3.16666V14.8333C0.333252 15.4964 0.596644 16.1322 1.06548 16.6011C1.53433 17.0699 2.17021 17.3333 2.83325 17.3333H11.1666C11.8296 17.3333 12.4655 17.0699 12.9344 16.6011C13.4032 16.1322 13.6666 15.4964 13.6666 14.8333V6.49999C13.6666 6.49999 13.6666 6.49999 13.6666 6.44999ZM8.66658 3.50832L10.8249 5.66666H9.49992C9.2789 5.66666 9.06694 5.57886 8.91066 5.42258C8.75438 5.2663 8.66658 5.05434 8.66658 4.83332V3.50832ZM11.9999 14.8333C11.9999 15.0543 11.9121 15.2663 11.7558 15.4226C11.5996 15.5789 11.3876 15.6667 11.1666 15.6667H2.83325C2.61224 15.6667 2.40028 15.5789 2.244 15.4226C2.08772 15.2663 1.99992 15.0543 1.99992 14.8333V3.16666C1.99992 2.94564 2.08772 2.73368 2.244 2.5774C2.40028 2.42112 2.61224 2.33332 2.83325 2.33332H6.99992V4.83332C6.99992 5.49636 7.26331 6.13225 7.73215 6.60109C8.20099 7.06993 8.83688 7.33332 9.49992 7.33332H11.9999V14.8333Z",fill:"#382CDD"}})])]),t._v(" "),l("h3",{staticClass:"text-sm text-gray-600"},[t._v("Reports")]),t._v(" "),l("span",{staticClass:"inline-block ml-auto px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded-full"},[t._v("30 Days")])]),t._v(" "),l("h2",{staticClass:"mb-2 text-3xl font-bold"},[t._v("492")]),t._v(" "),l("span",{staticClass:"text-xs text-green-500"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"10",viewbox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M16.5 5.83333C16.3906 5.83339 16.2822 5.81188 16.181 5.77002C16.0799 5.72817 15.988 5.66678 15.9106 5.58939C15.8332 5.512 15.7719 5.42011 15.73 5.31897C15.6881 5.21784 15.6666 5.10945 15.6667 5V2.84505L10.4225 8.08916C10.3452 8.16656 10.2533 8.22796 10.1522 8.26985C10.0511 8.31175 9.94277 8.33331 9.83333 8.33331C9.7239 8.33331 9.61554 8.31175 9.51445 8.26985C9.41335 8.22796 9.3215 8.16656 9.24414 8.08916L6.50002 5.34505L2.08919 9.75583C1.93245 9.90975 1.72127 9.99555 1.50159 9.99456C1.28191 9.99356 1.07151 9.90586 0.91617 9.75052C0.760831 9.59518 0.673123 9.38478 0.672128 9.1651C0.671133 8.94542 0.756932 8.73424 0.910858 8.5775L5.91086 3.5775C5.98822 3.5001 6.08007 3.4387 6.18116 3.39681C6.28226 3.35492 6.39062 3.33335 6.50005 3.33335C6.60948 3.33335 6.71784 3.35492 6.81893 3.39681C6.92003 3.4387 7.01188 3.5001 7.08924 3.5775L9.83336 6.32161L14.4883 1.66666H12.3334C12.1123 1.66666 11.9004 1.57887 11.7441 1.42259C11.5878 1.2663 11.5 1.05434 11.5 0.833329C11.5 0.612315 11.5878 0.400352 11.7441 0.244073C11.9004 0.0877924 12.1123 -4.76837e-06 12.3334 -4.76837e-06H16.5C16.6095 -6.67572e-05 16.7179 0.0214453 16.819 0.063302C16.9201 0.105159 17.012 0.166539 17.0894 0.243935C17.1668 0.321329 17.2282 0.413218 17.2701 0.514352C17.3119 0.615484 17.3334 0.723876 17.3334 0.833329V5C17.3334 5.10945 17.3119 5.21784 17.2701 5.31897C17.2282 5.42011 17.1668 5.512 17.0894 5.58939C17.012 5.66678 16.9201 5.72817 16.819 5.77002C16.7179 5.81188 16.6095 5.83339 16.5 5.83333Z",fill:"#17BB84"}})])]),t._v(" "),l("span",[t._v("12.5% more")])])])]),t._v(" "),l("div",{staticClass:"w-full md:w-1/2 lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 rounded bg-gray-100"},[l("div",{staticClass:"flex mb-2"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"18",viewbox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M11.3413 9.23332C11.8687 8.66686 12.1659 7.92397 12.1746 7.14999C12.1746 6.31456 11.8427 5.51334 11.252 4.9226C10.6612 4.33186 9.86003 3.99999 9.02459 3.99999C8.18916 3.99999 7.38795 4.33186 6.79721 4.9226C6.20647 5.51334 5.87459 6.31456 5.87459 7.14999C5.88329 7.92397 6.18045 8.66686 6.70793 9.23332C5.97347 9.59905 5.34144 10.1416 4.86869 10.8122C4.39594 11.4828 4.09728 12.2604 3.99959 13.075C3.97528 13.296 4.03976 13.5176 4.17885 13.6911C4.31794 13.8646 4.52025 13.9757 4.74126 14C4.96227 14.0243 5.18389 13.9598 5.35736 13.8207C5.53084 13.6816 5.64195 13.4793 5.66626 13.2583C5.7657 12.4509 6.15696 11.7078 6.76633 11.1689C7.3757 10.63 8.16111 10.3325 8.97459 10.3325C9.78808 10.3325 10.5735 10.63 11.1829 11.1689C11.7922 11.7078 12.1835 12.4509 12.2829 13.2583C12.3061 13.472 12.4109 13.6685 12.5756 13.8067C12.7402 13.9449 12.9518 14.0141 13.1663 14H13.2579C13.4764 13.9749 13.676 13.8644 13.8134 13.6927C13.9508 13.521 14.0147 13.302 13.9913 13.0833C13.9008 12.273 13.6116 11.4975 13.1493 10.8259C12.687 10.1542 12.0659 9.60716 11.3413 9.23332ZM8.99959 8.63332C8.70622 8.63332 8.41943 8.54633 8.1755 8.38334C7.93156 8.22035 7.74144 7.98868 7.62917 7.71764C7.5169 7.44659 7.48753 7.14834 7.54476 6.86061C7.602 6.57287 7.74327 6.30856 7.95072 6.10112C8.15817 5.89367 8.42247 5.75239 8.71021 5.69516C8.99795 5.63792 9.2962 5.6673 9.56724 5.77957C9.83828 5.89184 10.0699 6.08196 10.2329 6.32589C10.3959 6.56983 10.4829 6.85661 10.4829 7.14999C10.4829 7.54339 10.3266 7.92069 10.0485 8.19887C9.77029 8.47704 9.393 8.63332 8.99959 8.63332ZM14.8329 0.666656H3.16626C2.50322 0.666656 1.86733 0.930049 1.39849 1.39889C0.929652 1.86773 0.66626 2.50362 0.66626 3.16666V14.8333C0.66626 15.4964 0.929652 16.1322 1.39849 16.6011C1.86733 17.0699 2.50322 17.3333 3.16626 17.3333H14.8329C15.496 17.3333 16.1319 17.0699 16.6007 16.6011C17.0695 16.1322 17.3329 15.4964 17.3329 14.8333V3.16666C17.3329 2.50362 17.0695 1.86773 16.6007 1.39889C16.1319 0.930049 15.496 0.666656 14.8329 0.666656ZM15.6663 14.8333C15.6663 15.0543 15.5785 15.2663 15.4222 15.4226C15.2659 15.5789 15.0539 15.6667 14.8329 15.6667H3.16626C2.94525 15.6667 2.73328 15.5789 2.577 15.4226C2.42072 15.2663 2.33293 15.0543 2.33293 14.8333V3.16666C2.33293 2.94564 2.42072 2.73368 2.577 2.5774C2.73328 2.42112 2.94525 2.33332 3.16626 2.33332H14.8329C15.0539 2.33332 15.2659 2.42112 15.4222 2.5774C15.5785 2.73368 15.6663 2.94564 15.6663 3.16666V14.8333Z",fill:"#382CDD"}})])]),t._v(" "),l("h3",{staticClass:"text-sm text-gray-600"},[t._v("Users")]),t._v(" "),l("span",{staticClass:"inline-block ml-auto px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded-full"},[t._v("30 Days")])]),t._v(" "),l("h2",{staticClass:"mb-2 text-3xl font-bold"},[t._v("235")]),t._v(" "),l("span",{staticClass:"text-xs text-red-500"},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{attrs:{width:"18",height:"10",viewbox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M16.5 4.16667C16.3906 4.16661 16.2822 4.18812 16.181 4.22998C16.0799 4.27183 15.988 4.33322 15.9106 4.41061C15.8332 4.488 15.7719 4.57989 15.73 4.68103C15.6881 4.78216 15.6666 4.89055 15.6667 5V7.15495L10.4225 1.91084C10.3452 1.83344 10.2533 1.77204 10.1522 1.73015C10.0511 1.68825 9.94277 1.66669 9.83333 1.66669C9.7239 1.66669 9.61554 1.68825 9.51445 1.73015C9.41335 1.77204 9.3215 1.83344 9.24414 1.91084L6.50002 4.65495L2.08919 0.244171C1.93245 0.0902454 1.72127 0.00444584 1.50159 0.00544068C1.28191 0.00643553 1.07151 0.094144 0.91617 0.249483C0.760831 0.404822 0.673123 0.61522 0.672128 0.8349C0.671133 1.05458 0.756932 1.26576 0.910858 1.4225L5.91086 6.4225C5.98822 6.4999 6.08007 6.5613 6.18116 6.60319C6.28226 6.64508 6.39062 6.66665 6.50005 6.66665C6.60948 6.66665 6.71784 6.64508 6.81893 6.60319C6.92003 6.5613 7.01188 6.4999 7.08924 6.4225L9.83336 3.67839L14.4883 8.33334H12.3334C12.1123 8.33334 11.9004 8.42113 11.7441 8.57741C11.5878 8.7337 11.5 8.94566 11.5 9.16667C11.5 9.38768 11.5878 9.59965 11.7441 9.75593C11.9004 9.91221 12.1123 10 12.3334 10H16.5C16.6095 10.0001 16.7179 9.97855 16.819 9.9367C16.9201 9.89484 17.012 9.83346 17.0894 9.75607C17.1668 9.67867 17.2282 9.58678 17.2701 9.48565C17.3119 9.38452 17.3334 9.27612 17.3334 9.16667V5C17.3334 4.89055 17.3119 4.78216 17.2701 4.68103C17.2282 4.57989 17.1668 4.488 17.0894 4.41061C17.012 4.33322 16.9201 4.27183 16.819 4.22998C16.7179 4.18812 16.6095 4.16661 16.5 4.16667Z",fill:"#E85444"}})])]),t._v(" "),l("span",[t._v("25% less")])])])])])])]),t._v(" "),l("section",{staticClass:"pb-8"},[l("div",{staticClass:"container px-4 mx-auto"},[l("div",{staticClass:"flex flex-wrap -m-4"},[l("div",{staticClass:"w-full lg:w-1/2 p-4"},[l("div",{staticClass:"p-6 mb-8 bg-gray-100 shadow rounded"},[l("div",{staticClass:"flex mb-3 items-center justify-between"},[l("h3",{staticClass:"text-gray-500"},[t._v("Total Income")]),t._v(" "),l("button",{staticClass:"focus:outline-none"},[l("svg",{staticClass:"h-4 w-4 text-gray-200",attrs:{viewbox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M8 0.333344C7.67037 0.333344 7.34813 0.431092 7.07405 0.614228C6.79997 0.797363 6.58635 1.05766 6.4602 1.36221C6.33406 1.66675 6.30105 2.00186 6.36536 2.32516C6.42967 2.64846 6.5884 2.94543 6.82149 3.17852C7.05458 3.41161 7.35155 3.57034 7.67485 3.63465C7.99815 3.69896 8.33326 3.66596 8.63781 3.53981C8.94235 3.41366 9.20265 3.20004 9.38578 2.92596C9.56892 2.65188 9.66667 2.32965 9.66667 2.00001C9.66667 1.55798 9.49107 1.13406 9.17851 0.821499C8.86595 0.508939 8.44203 0.333344 8 0.333344ZM2.16667 0.333344C1.83703 0.333344 1.5148 0.431092 1.24072 0.614228C0.966635 0.797363 0.753014 1.05766 0.626868 1.36221C0.500722 1.66675 0.467717 2.00186 0.532025 2.32516C0.596334 2.64846 0.755068 2.94543 0.988156 3.17852C1.22124 3.41161 1.51822 3.57034 1.84152 3.63465C2.16482 3.69896 2.49993 3.66596 2.80447 3.53981C3.10902 3.41366 3.36931 3.20004 3.55245 2.92596C3.73559 2.65188 3.83333 2.32965 3.83333 2.00001C3.83333 1.55798 3.65774 1.13406 3.34518 0.821499C3.03262 0.508939 2.6087 0.333344 2.16667 0.333344ZM13.8333 0.333344C13.5037 0.333344 13.1815 0.431092 12.9074 0.614228C12.6333 0.797363 12.4197 1.05766 12.2935 1.36221C12.1674 1.66675 12.1344 2.00186 12.1987 2.32516C12.263 2.64846 12.4217 2.94543 12.6548 3.17852C12.8879 3.41161 13.1849 3.57034 13.5082 3.63465C13.8315 3.69896 14.1666 3.66596 14.4711 3.53981C14.7757 3.41366 15.036 3.20004 15.2191 2.92596C15.4023 2.65188 15.5 2.32965 15.5 2.00001C15.5 1.55798 15.3244 1.13406 15.0118 0.821499C14.6993 0.508939 14.2754 0.333344 13.8333 0.333344Z",fill:"currentColor"}})])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),l("p",{staticClass:"text-xs"},[t._v("Yearly Goal")])]),t._v(" "),l("div",{staticClass:"p-6 bg-gray-100 shadow rounded"},[l("div",{staticClass:"flex mb-3 items-center justify-between"},[l("h3",{staticClass:"text-gray-500"},[t._v("New Users")]),t._v(" "),l("button",{staticClass:"focus:outline-none"},[l("svg",{staticClass:"h-4 w-4 text-gray-200",attrs:{viewbox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M8 0.333344C7.67037 0.333344 7.34813 0.431092 7.07405 0.614228C6.79997 0.797363 6.58635 1.05766 6.4602 1.36221C6.33406 1.66675 6.30105 2.00186 6.36536 2.32516C6.42967 2.64846 6.5884 2.94543 6.82149 3.17852C7.05458 3.41161 7.35155 3.57034 7.67485 3.63465C7.99815 3.69896 8.33326 3.66596 8.63781 3.53981C8.94235 3.41366 9.20265 3.20004 9.38578 2.92596C9.56892 2.65188 9.66667 2.32965 9.66667 2.00001C9.66667 1.55798 9.49107 1.13406 9.17851 0.821499C8.86595 0.508939 8.44203 0.333344 8 0.333344ZM2.16667 0.333344C1.83703 0.333344 1.5148 0.431092 1.24072 0.614228C0.966635 0.797363 0.753014 1.05766 0.626868 1.36221C0.500722 1.66675 0.467717 2.00186 0.532025 2.32516C0.596334 2.64846 0.755068 2.94543 0.988156 3.17852C1.22124 3.41161 1.51822 3.57034 1.84152 3.63465C2.16482 3.69896 2.49993 3.66596 2.80447 3.53981C3.10902 3.41366 3.36931 3.20004 3.55245 2.92596C3.73559 2.65188 3.83333 2.32965 3.83333 2.00001C3.83333 1.55798 3.65774 1.13406 3.34518 0.821499C3.03262 0.508939 2.6087 0.333344 2.16667 0.333344ZM13.8333 0.333344C13.5037 0.333344 13.1815 0.431092 12.9074 0.614228C12.6333 0.797363 12.4197 1.05766 12.2935 1.36221C12.1674 1.66675 12.1344 2.00186 12.1987 2.32516C12.263 2.64846 12.4217 2.94543 12.6548 3.17852C12.8879 3.41161 13.1849 3.57034 13.5082 3.63465C13.8315 3.69896 14.1666 3.66596 14.4711 3.53981C14.7757 3.41366 15.036 3.20004 15.2191 2.92596C15.4023 2.65188 15.5 2.32965 15.5 2.00001C15.5 1.55798 15.3244 1.13406 15.0118 0.821499C14.6993 0.508939 14.2754 0.333344 13.8333 0.333344Z",fill:"currentColor"}})])])]),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"chart",attrs:{"data-type":"columns-stacked"}})])]),t._v(" "),t._m(3)])])]),t._v(" "),t._m(4),t._v(" "),l("section",{staticClass:"pb-8"},[l("div",{staticClass:"container px-4 mx-auto"},[l("div",{staticClass:"pt-4 bg-white shadow rounded"},[t._m(5),t._v(" "),l("div",{staticClass:"p-4 overflow-x-auto"},[t._m(6),t._v(" "),l("div",{staticClass:"text-center mt-5"},[l("a",{staticClass:"inline-flex items-center text-xs text-indigo-500 hover:text-blue-600 font-medium",attrs:{href:"#"}},[l("span",{staticClass:"inline-block mr-2"},[l("svg",{staticClass:"text-indigo-400 h-3 w-3",attrs:{viewbox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M8.66667 12.3333H3.33333C2.8029 12.3333 2.29419 12.1226 1.91912 11.7476C1.54405 11.3725 1.33333 10.8638 1.33333 10.3333V3.66668C1.33333 3.48987 1.2631 3.3203 1.13807 3.19527C1.01305 3.07025 0.843478 3.00001 0.666667 3.00001C0.489856 3.00001 0.320286 3.07025 0.195262 3.19527C0.0702379 3.3203 0 3.48987 0 3.66668V10.3333C0 11.2174 0.351189 12.0652 0.976311 12.6904C1.60143 13.3155 2.44928 13.6667 3.33333 13.6667H8.66667C8.84348 13.6667 9.01305 13.5964 9.13807 13.4714C9.2631 13.3464 9.33333 13.1768 9.33333 13C9.33333 12.8232 9.2631 12.6536 9.13807 12.5286C9.01305 12.4036 8.84348 12.3333 8.66667 12.3333ZM4.66667 7.66668C4.66667 7.84349 4.7369 8.01306 4.86193 8.13808C4.98695 8.26311 5.15652 8.33334 5.33333 8.33334H8.66667C8.84348 8.33334 9.01305 8.26311 9.13807 8.13808C9.2631 8.01306 9.33333 7.84349 9.33333 7.66668C9.33333 7.48987 9.2631 7.3203 9.13807 7.19527C9.01305 7.07025 8.84348 7.00001 8.66667 7.00001H5.33333C5.15652 7.00001 4.98695 7.07025 4.86193 7.19527C4.7369 7.3203 4.66667 7.48987 4.66667 7.66668ZM12 4.96001C11.9931 4.89877 11.9796 4.83843 11.96 4.78001V4.72001C11.9279 4.65146 11.8852 4.58845 11.8333 4.53334V4.53334L7.83333 0.533343C7.77822 0.481488 7.71521 0.438731 7.64667 0.406677C7.62677 0.40385 7.60657 0.40385 7.58667 0.406677C7.51894 0.367838 7.44415 0.342906 7.36667 0.333344H4.66667C4.13623 0.333344 3.62753 0.544057 3.25245 0.91913C2.87738 1.2942 2.66667 1.80291 2.66667 2.33334V9.00001C2.66667 9.53044 2.87738 10.0392 3.25245 10.4142C3.62753 10.7893 4.13623 11 4.66667 11H10C10.5304 11 11.0391 10.7893 11.4142 10.4142C11.7893 10.0392 12 9.53044 12 9.00001V5.00001C12 5.00001 12 5.00001 12 4.96001ZM8 2.60668L9.72667 4.33334H8.66667C8.48986 4.33334 8.32029 4.26311 8.19526 4.13808C8.07024 4.01306 8 3.84349 8 3.66668V2.60668ZM10.6667 9.00001C10.6667 9.17682 10.5964 9.34639 10.4714 9.47141C10.3464 9.59644 10.1768 9.66668 10 9.66668H4.66667C4.48986 9.66668 4.32029 9.59644 4.19526 9.47141C4.07024 9.34639 4 9.17682 4 9.00001V2.33334C4 2.15653 4.07024 1.98696 4.19526 1.86194C4.32029 1.73691 4.48986 1.66668 4.66667 1.66668H6.66667V3.66668C6.66847 3.89411 6.70905 4.11956 6.78667 4.33334H5.33333C5.15652 4.33334 4.98695 4.40358 4.86193 4.52861C4.7369 4.65363 4.66667 4.8232 4.66667 5.00001C4.66667 5.17682 4.7369 5.34639 4.86193 5.47141C4.98695 5.59644 5.15652 5.66668 5.33333 5.66668H10.6667V9.00001Z",fill:"currentColor"}})])]),t._v(" "),l("span",[t._v("Load more transactions")])])])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center mb-3"},[l("span",{staticClass:"text-4xl font-bold"},[t._v("$124,563.00")]),t._v(" "),l("span",{staticClass:"inline-block ml-2 py-1 px-2 bg-green-500 text-white text-xs rounded-full"},[t._v("+6.9%")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative w-full h-1 mb-2 bg-gray-50 rounded"},[e("div",{staticClass:"absolute top-0 left-0 w-4/6 h-full bg-purple-500 rounded"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center mb-3"},[l("span",{staticClass:"text-4xl font-bold"},[t._v("94.2%")]),t._v(" "),l("span",{staticClass:"inline-block ml-2 py-1 px-2 bg-green-500 text-white text-xs rounded-full"},[t._v("+6.9%")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full lg:w-1/2 p-4"},[l("div",{staticClass:"bg-gray-100 rounded"},[l("div",{staticClass:"flex items-center py-5 px-6 border-b"},[l("h3",{staticClass:"text-2xl font-bold"},[t._v("Balance")]),t._v(" "),l("div",{staticClass:"ml-auto inline-block py-2 px-3 border rounded text-xs text-gray-500"},[l("select",{staticClass:"pr-1 focus:outline-0",attrs:{name:""}},[l("option",{attrs:{value:"1"}},[t._v("Monthly")]),t._v(" "),l("option",{attrs:{value:"1"}},[t._v("Yearly")]),t._v(" "),l("option",{attrs:{value:"1"}},[t._v("Weekly")])])])]),t._v(" "),l("div",{staticClass:"pt-4 px-6"},[l("div",{staticClass:"flex flex-wrap -m-4 pb-16"},[l("div",{staticClass:"w-full md:w-1/2 p-4"},[l("div",{staticClass:"py-4 px-6 border rounded"},[l("h4",{staticClass:"text-xs text-gray-500"},[t._v("Earnings")]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("span",{staticClass:"mr-2 text-3xl font-bold"},[t._v("43.41%")]),t._v(" "),l("span",{staticClass:"py-1 px-2 bg-green-500 text-xs text-white rounded-full"},[t._v("+2.5%")])])])]),t._v(" "),l("div",{staticClass:"w-full md:w-1/2 p-4"},[l("div",{staticClass:"py-4 px-6 border rounded"},[l("h4",{staticClass:"text-xs text-gray-500"},[t._v("Sales Value")]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("span",{staticClass:"mr-2 text-3xl font-bold"},[t._v("$95,422")]),t._v(" "),l("span",{staticClass:"py-1 px-2 bg-green-500 text-xs text-white rounded-full"},[t._v("+13.5%")])])])])])]),t._v(" "),l("div",{staticClass:"chart",attrs:{"data-type":"area"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pb-8"},[l("div",{staticClass:"container px-4 mx-auto"},[l("div",{staticClass:"flex flex-wrap -m-4"},[l("div",{staticClass:"w-full lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 bg-white rounded"},[l("h3",{staticClass:"text-xl font-bold"},[t._v("Payments")]),t._v(" "),l("div",{staticClass:"chart",attrs:{"data-type":"radial-bar"}})])]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 bg-white rounded"},[l("h3",{staticClass:"text-xl font-bold"},[t._v("Inventory")]),t._v(" "),l("div",{staticClass:"chart",attrs:{"data-type":"radial-bar","data-variant":"orange"}})])]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 bg-white rounded"},[l("h3",{staticClass:"text-xl font-bold"},[t._v("Sales")]),t._v(" "),l("div",{staticClass:"chart",attrs:{"data-type":"radial-bar","data-variant":"orange"}})])]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/4 p-4"},[l("div",{staticClass:"p-6 bg-white rounded"},[l("h3",{staticClass:"text-xl font-bold"},[t._v("Returns")]),t._v(" "),l("div",{staticClass:"chart",attrs:{"data-type":"radial-bar"}})])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex px-6 pb-4 border-b"},[l("h3",{staticClass:"text-xl font-bold"},[t._v("Recent Transactions")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",{staticClass:"table-auto w-full"},[l("thead",[l("tr",{staticClass:"text-xs text-gray-500 text-left"},[l("th",{staticClass:"pb-3 font-medium"},[t._v("Transaction ID")]),t._v(" "),l("th",{staticClass:"pb-3 font-medium"},[t._v("Date")]),t._v(" "),l("th",{staticClass:"pb-3 font-medium"},[t._v("E-mail")]),t._v(" "),l("th",{staticClass:"pb-3 font-medium"},[t._v("Subscription")]),t._v(" "),l("th",{staticClass:"pb-3 font-medium"},[t._v("Status")])])]),t._v(" "),l("tbody",[l("tr",{staticClass:"text-xs bg-gray-50"},[l("td",{staticClass:"py-5 px-6 font-medium"},[t._v("GH443gh7484")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("08.04.2021")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("demo.@gmail.com")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("Monthly")]),t._v(" "),l("td",[l("span",{staticClass:"inline-block py-1 px-2 text-white bg-green-500 rounded-full"},[t._v("Completed")])])]),t._v(" "),l("tr",{staticClass:"text-xs"},[l("td",{staticClass:"py-5 px-6 font-medium"},[t._v("GH443gh7484")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("08.04.2021")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("demo.@gmail.com")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("Monthly")]),t._v(" "),l("td",[l("span",{staticClass:"inline-block py-1 px-2 text-white bg-red-500 rounded-full"},[t._v("Canceled")])])]),t._v(" "),l("tr",{staticClass:"text-xs bg-gray-50"},[l("td",{staticClass:"py-5 px-6 font-medium"},[t._v("GH443gh7484")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("08.04.2021")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("demo.@gmail.com")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("Lifetime")]),t._v(" "),l("td",[l("span",{staticClass:"inline-block py-1 px-2 text-white bg-orange-500 rounded-full"},[t._v("Pending")])])]),t._v(" "),l("tr",{staticClass:"text-xs"},[l("td",{staticClass:"py-5 px-6 font-medium"},[t._v("GH443gh7484")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("08.04.2021")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("demo.@gmail.com")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("Yearly")]),t._v(" "),l("td",[l("span",{staticClass:"inline-block py-1 px-2 text-white bg-green-500 rounded-full"},[t._v("Completed")])])]),t._v(" "),l("tr",{staticClass:"text-xs bg-gray-50"},[l("td",{staticClass:"py-5 px-6 font-medium"},[t._v("GH443gh7484")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("08.04.2021")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("demo.@gmail.com")]),t._v(" "),l("td",{staticClass:"font-medium"},[t._v("Monthly")]),t._v(" "),l("td",[l("span",{staticClass:"inline-block py-1 px-2 text-white bg-green-500 rounded-full"},[t._v("Completed")])])])])])}],!1,null,null,null);e.default=component.exports}}]);