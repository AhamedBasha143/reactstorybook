"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[3763,6597],{"./src/stories/HintIconButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HintIconButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),SkuSearchViewHint=__webpack_require__("./src/stories/shared/SkuSearchViewHint.jsx"),io5=__webpack_require__("./node_modules/react-icons/io5/index.mjs"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),jsx_runtime=(__webpack_require__("./src/stories/F4ValueHelp.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const HintIconButton=()=>{const[showHint,setShowHint]=(0,react.useState)(!1),handleShowHint=()=>{setShowHint(!0)};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:5,justifyContent:"center",backgroundColor:"whitesmoke",padding:10},children:[(0,jsx_runtime.jsx)(IconButton.A,{onClick:handleShowHint,className:"itemInfoBtn",children:(0,jsx_runtime.jsx)(io5.hQ6,{})}),showHint&&(0,jsx_runtime.jsx)(SkuSearchViewHint.A,{show:handleShowHint,handleClose:()=>{setShowHint(!1)}})]})})},stories_HintIconButton=HintIconButton;HintIconButton.__docgenInfo={description:"",methods:[],displayName:"HintIconButton"};const HintIconButton_stories={title:"Components/HintIconButton",component:stories_HintIconButton,tags:["autodocs"]},Default=(args=>(0,jsx_runtime.jsx)(stories_HintIconButton,{})).bind({});Default.parameters={docs:{source:{code:'import React, { useState } from "react";\nimport SkuSearchViewHint from "./shared/SkuSearchViewHint";\nimport { IoInformationOutline } from "react-icons/io5";\nimport { IconButton } from "@mui/material";\nimport \'./F4ValueHelp.css\';\n\n\n\nconst HintIconButton = () => {\n\n  const [showHint, setShowHint] = useState(false);\n   \n    const handleShowHint = () => {\n      setShowHint(true);\n    };\n    const handleCloseHint = () => {\n      setShowHint(false);\n    };\n  \n  \n\n  return (\n    <>\n      <div\n        style={{\n          display: "flex",\n          flexDirection: "row",\n          gap: 5,\n          justifyContent: "center",\n          backgroundColor: "whitesmoke",\n          padding: 10,\n        }}\n      >\n        <IconButton onClick={handleShowHint} className="itemInfoBtn">\n          <IoInformationOutline />\n        </IconButton>\n        {showHint && (\n          <SkuSearchViewHint\n            show={handleShowHint}\n            handleClose={handleCloseHint}\n          />\n        )}\n      </div>\n    </>\n  );\n};\n\nexport default HintIconButton;\n'}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <HintIconButton />",...Default.parameters?.docs?.source}}}},"./src/stories/shared/SkuSearchViewHint.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),_mui_material__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),_mui_material__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/TableHead/TableHead.js"),_mui_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),_mui_material__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),_mui_material__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),_mui_material_Grow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),_mui_icons_material_CloseOutlined__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/CloseOutlined.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Transition=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Transition(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Grow__WEBPACK_IMPORTED_MODULE_2__.A,{ref,...props})})),SKUSeachViewHint=_ref=>{let{show,handleClose}=_ref;const handleCloseDialog=(event,reason)=>{reason&&"backdropClick"===reason||handleClose()};if(!show)return null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{open:show,onClose:handleCloseDialog,TransitionComponent:Transition,id:"dialogHdBtnSKUHint",className:"dialogWidht",disableEscapeKeyDown:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{className:"dialog-header",children:["Tollgate Information",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{style:{position:"absolute",right:13,top:15},onClick:handleCloseDialog,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_CloseOutlined__WEBPACK_IMPORTED_MODULE_6__.A,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{style:{marginTop:"5px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:"External Tollgate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:"Definition"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:"Internal Tollgate"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:"Start"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:"End"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:"Exceptions"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.A,{children:[{externalTollgate:"Order Confirmed",definition:"Once order is Received and it enters SAP",internalTollgate:"Received",start:"Once Order is received, Tollgate is marked as complete",end:"Once Order is received, Tollgate is marked as complete",exceptions:"No Exception"},{externalTollgate:"",definition:"",internalTollgate:"Acknowledged",start:"Once Order is received, Tollgate is marked as In Progress",end:"Once order is Acknowledged to customer or Traget date has been defined then Toll gate is marked as Completed",exceptions:"No Exception"},{externalTollgate:"",definition:"",internalTollgate:"Firmed",start:"Once order is Acknowledged to customer or Traget date has been defined then Toll gate is marked as In Progress",end:"Once Order is Firmed, Order Start Dtae is defined then tollgate is marked as complete",exceptions:"No Exception"},{externalTollgate:"Production",definition:"Units currently in Production",internalTollgate:"In production",start:"",end:"Production qunatity is equivalent to order qty,Tollgate is marked as complete",exceptions:"Not Availble for MTS Order"},{externalTollgate:"",definition:"",internalTollgate:"In Transit",start:"Order has been transferred to Warehouse",end:"When complete ordered quantity is received in Warehouse",exceptions:"Not Availble for MTS Order & third Party"},{externalTollgate:"Warehouse",definition:"Availible in DC and ready to load into truck",internalTollgate:"In Inventory",start:"Order has been transferred to Warehouse",end:"When delivery ticket has been created for complete order then this tollgate is marked as complete",exceptions:"Not Availble for MTS Order & third Party(drop ship)"},{externalTollgate:"",definition:"",internalTollgate:"DC Load Cycle",start:"When delivery ticket has been created for complete order then this tollgate is marked as In Progress",end:"When Shipment Status is defined as completed,then tollgate is marked as complete",exceptions:"Not Availble for third party(drop ship)"},{externalTollgate:"Ready To Ship",definition:"Availible in DC and ready to load into truck",internalTollgate:"Ready To Ship ",start:"When shipment status is defined as completed,tollgates is marked In Progress",end:"When total order quantity has been issued",exceptions:"Not Availble for third party(drop ship)"},{externalTollgate:"Shipped",definition:"Once the units are physically shipped out of DC",internalTollgate:"Out For Delivery ",start:"Qty issues or Qty billed",end:"NA",exceptions:"For third parties billed quantity is considered"}].map(((row,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{sx:{color:"black",fontWeight:"bold",borderBottom:"1px solid darkgray"},children:row.externalTollgate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:row.definition}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{sx:{color:"black",fontWeight:"bold",borderBottom:"1px solid darkgray"},children:row.internalTollgate}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:row.start}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:row.end}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,{children:row.exceptions})]},index)))})]})})})]})})},__WEBPACK_DEFAULT_EXPORT__=SKUSeachViewHint;SKUSeachViewHint.__docgenInfo={description:"",methods:[],displayName:"SKUSeachViewHint"}},"./src/stories/F4ValueHelp.css":()=>{}}]);